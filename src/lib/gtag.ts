export const GA_TRACKING_ID = 'G-Q0YJ0TH3B1';

export const trackGAEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};
