import React, { useState, useEffect, useRef } from 'react';

const SERVICES = [
  {
    tag: 'Office of multiple\ninterest content',
    title: 'Collaborative & partnership',
  },
  {
    tag: 'The hanger US Air force\ndigital experimental',
    title: 'We talk about our weight',
  },
  {
    tag: 'Delta faucet content,\nsocial, digital',
    title: 'Piloting digital confidence',
    hasCircle: true,
  },
];

function ServiceRow({ service, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: '1px solid #ddd',
        transition: 'background 0.2s',
        background: hovered ? '#fafafa' : 'transparent',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '210px 1fr 50px',
        alignItems: 'center',
        gap: '2rem',
        padding: '1.8rem 0.5rem',
      }} className="service-row-inner">
        {/* Tag */}
        <span style={{
          fontSize: '0.78rem',
          color: '#888',
          lineHeight: 1.55,
          whiteSpace: 'pre-line',
          fontFamily: "'Space Grotesk', sans-serif",
        }}>
          {service.tag}
        </span>

        {/* Title */}
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(1.3rem, 2.8vw, 2.1rem)',
          letterSpacing: '-0.02em',
          color: '#111',
          lineHeight: 1.2,
          position: 'relative',
        }}>
          {service.title}
          {/* Floating circle on 3rd row — matches Figma */}
          {service.hasCircle && (
            <span style={{
              position: 'absolute',
              right: '5%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 72, height: 72,
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'inline-block',
              boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
              opacity: hovered ? 1 : 0.85,
              transition: 'opacity 0.3s',
            }}>
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=150&h=150&fit=crop"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </span>
          )}
        </span>

        {/* Arrow */}
        <span style={{
          fontSize: '1.25rem',
          color: '#111',
          display: 'inline-block',
          transform: hovered ? 'translateX(8px)' : 'translateX(0)',
          transition: 'transform 0.25s ease',
          justifySelf: 'end',
        }}>→</span>
      </div>
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.opacity = 0;
    ref.current.style.transform = 'translateY(40px)';
    ref.current.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        ref.current.style.opacity = 1;
        ref.current.style.transform = 'translateY(0)';
      }
    }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ position: 'relative', padding: '80px 0 80px', overflow: 'hidden' }}>

      {/* Coral wavy line — top right, matching Figma */}
      <svg
        viewBox="0 0 520 200"
        fill="none"
        style={{
          position: 'absolute', top: 0, right: 0,
          width: '45%', height: 'auto',
          pointerEvents: 'none', zIndex: 0,
        }}
      >
        <path
          d="M 520 20 C 440 20, 400 100, 320 110 C 240 120, 180 50, 110 70 C 60 82, 20 140, 0 180"
          stroke="#E8635A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#111',
          }}>
            {'What we '}
            <span style={{
              background: '#C8EACD',
              borderRadius: 12,
              padding: '2px 16px 6px',
              display: 'inline-block',
            }}>can</span>
            <br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              offer
              <span style={{
                position: 'absolute', left: 0, right: 0, bottom: -4,
                height: 4, background: '#F5C842', borderRadius: 2,
              }} />
            </span>
            {' you!'}
          </h2>
        </div>

        {/* Rows */}
        <div>
          {SERVICES.map((s, i) => (
            <ServiceRow key={i} service={s} index={i} />
          ))}
          <div style={{ borderTop: '1px solid #ddd' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .service-row-inner {
            grid-template-columns: 1fr 40px !important;
          }
          .service-row-inner > span:first-child { display: none; }
        }
      `}</style>
    </section>
  );
}
