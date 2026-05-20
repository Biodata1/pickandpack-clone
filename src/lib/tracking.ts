/**
 * Centralized Lead Tracking Utility
 *
 * Mengirim data lead ke API Route internal (/api/track-lead)
 * yang kemudian diteruskan secara aman ke Make.com Webhook.
 *
 * Fitur:
 * - Otomatis menangkap UTM parameters dari URL (utm_source, utm_medium, utm_campaign)
 * - Otomatis menangkap halaman asal (path)
 * - Fire-and-forget (tidak memblokir UI atau memicu popup blocker)
 */

export type LeadPayload = {
  nama: string;
  nomor_wa: string;
  produk: string;
  tipe_lead: 'form_submit' | 'wa_click';
  path?: string;
};

export function trackLead(payload: LeadPayload): void {
  // Hanya eksekusi di browser (client-side safety guard)
  if (typeof window === 'undefined') return;

  // Otomatis tangkap UTM params dari URL (misal: ?utm_source=google&utm_medium=cpc)
  const urlParams = new URLSearchParams(window.location.search);
  const utm_source = urlParams.get('utm_source') || 'organic';
  const utm_medium = urlParams.get('utm_medium') || 'none';
  const utm_campaign = urlParams.get('utm_campaign') || '';

  const finalPayload = {
    ...payload,
    path: payload.path || window.location.href,
    utm_source,
    utm_medium,
    utm_campaign,
    status: 'pending',
  };

  // Fire and forget — tidak pakai await agar tidak memblokir navigasi ke WA
  fetch('/api/track-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(finalPayload),
  }).catch((err) => console.error('[Tracking] Gagal mengirim lead:', err));
}
