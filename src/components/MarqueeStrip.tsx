'use client';

interface MarqueeStripProps {
  items?: string[];
  variant?: 'dark' | 'light';
  speed?: number;
}

const defaultItems = [
  'Printwork Indonesia',
  'Custom Packaging',
  'Food Grade',
  'Eco-Kraft',
  'ISO 9001:2015',
  'FSSC 22000',
  'Min. 500 Pcs',
  'Cetak Premium',
];

export default function MarqueeStrip({
  items = defaultItems,
  variant = 'dark',
  speed = 30,
}: MarqueeStripProps) {
  // Duplicate items for seamless infinite loop
  const allItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`marquee-strip ${variant === 'light' ? 'marquee-strip-light' : ''}`}>
      <div
        className="marquee-content"
        style={{ animationDuration: `${speed}s` }}
      >
        {allItems.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="separator">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
