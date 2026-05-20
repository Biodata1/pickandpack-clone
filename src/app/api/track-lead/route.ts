import { NextResponse } from 'next/server';

/**
 * POST /api/track-lead
 *
 * Server-side proxy untuk meneruskan data lead ke Make.com Webhook.
 * URL Webhook disimpan aman di .env.local (tidak pernah bocor ke client).
 *
 * Data tambahan (enrichment) yang ditambahkan di server:
 * - timestamp: waktu server saat data diterima
 * - ip_address: IP pengunjung (dari header x-forwarded-for)
 * - device_info: User-Agent browser pengunjung
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validasi minimal: pastikan ada tipe lead
    if (!body.tipe_lead) {
      return NextResponse.json(
        { success: false, error: 'Field tipe_lead wajib diisi' },
        { status: 400 }
      );
    }

    // Server-side enrichment — data ini tidak bisa dimanipulasi client
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'Unknown';
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    const enrichedData = {
      ...body,
      ip_address: ip,
      device_info: userAgent,
      timestamp: new Date().toISOString(),
    };

    // Cek apakah webhook URL sudah dikonfigurasi
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl || webhookUrl.includes('GANTI_DENGAN')) {
      console.warn('[track-lead] MAKE_WEBHOOK_URL belum dikonfigurasi. Data tidak diteruskan.');
      // Tetap return success agar tidak mengganggu UX di frontend
      return NextResponse.json({ success: true, warning: 'Webhook belum dikonfigurasi' });
    }

    // Tembak ke Make.com secara server-to-server (aman & rahasia)
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enrichedData),
    });

    if (!response.ok) {
      console.error('[track-lead] Make.com response:', response.status, response.statusText);
      throw new Error(`Make.com responded with ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[track-lead] Error:', message);
    // Return 200 even on error to avoid breaking the user's WA flow
    return NextResponse.json({ success: false, error: message }, { status: 200 });
  }
}
