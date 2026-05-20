'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function UTMTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const utmSource = searchParams.get('utm_source');
      const utmMedium = searchParams.get('utm_medium');
      const utmCampaign = searchParams.get('utm_campaign');

      if (utmSource) sessionStorage.setItem('saved_utm_source', utmSource);
      if (utmMedium) sessionStorage.setItem('saved_utm_medium', utmMedium);
      if (utmCampaign) sessionStorage.setItem('saved_utm_campaign', utmCampaign);
    }
  }, [searchParams]);

  return null;
}
