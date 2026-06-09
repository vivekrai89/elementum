import React from 'react';

/* Exact avatar positions from Figma:
   left side: 3 avatars (small, large, small) in a column
   right side: 4 avatars (small top-right, small mid-right, medium, large bottom) */
const LEFT_AVATARS = [
  { url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&h=120&fit=crop&crop=faces', size: 72, top: '8%', left: '3%' },
  { url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=160&h=160&fit=crop&crop=faces', size: 130, top: '28%', left: '5%' },
  { url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=110&h=110&fit=crop&crop=faces', size: 62, top: '65%', left: '2%' },
];

const RIGHT_AVATARS = [
  { url: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=120&h=120&fit=crop&crop=faces', size: 72, top: '5%', right: '16%' },
  { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=faces', size: 95, top: '5%', right: '3%' },
  { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces', size: 72, top: '42%', right: '6%' },
  { url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces', size: 140, bottom: '5%', right: '2%' },
];

function FloatingAvatar({ av }) {
  return (
    <div style={{
      position: 'absolute',
      ...av,
      width: av.size,
      height: av.size,
      borderRadius: '50%',
      overflow: 'hidden',
      border: '3px solid #fff',
      boxShadow: '0 4px 18px rgba(0,0,0,0.10)',
      transition: 'transform 0.3s ease',
    }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img src={av.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{
      position: 'relative',
      padding: '80px 40px',
      minHeight: 480,
      overflow: 'hidden',
    }}>
      {/* All floating avatars */}
      {LEFT_AVATARS.map((av, i) => <FloatingAvatar key={`l${i}`} av={av} />)}
      {RIGHT_AVATARS.map((av, i) => <FloatingAvatar key={`r${i}`} av={av} />)}

      {/* Centered content */}
      <div style={{
        maxWidth: 600,
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative', zIndex: 2,
      }}>
        {/* Heading */}
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          color: '#111',
          marginBottom: '2rem',
        }}>
          <span style={{
            background: '#C8EACD',
            borderRadius: 10,
            padding: '1px 12px 4px',
            display: 'inline-block',
          }}>What</span>
          {' our customer'}
          <br />
          says{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            About Us
            <span style={{
              position: 'absolute', left: 0, right: 0, bottom: -3,
              height: 3, background: '#F5C842', borderRadius: 2,
            }} />
          </span>
        </h2>

        {/* Quote card */}
        <div style={{
          background: '#fff',
          borderRadius: 18,
          padding: '2rem 2.25rem',
          boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
          position: 'relative',
        }}>
          {/* Opening quote mark */}
          <span style={{
            position: 'absolute', top: 16, left: 20,
            fontFamily: 'Georgia, serif',
            fontSize: '3.5rem',
            color: '#bbb',
            lineHeight: 1,
          }}>"</span>
          <p style={{
            fontSize: '0.9rem',
            color: '#444',
            lineHeight: 1.85,
            textAlign: 'center',
            padding: '0.25rem 1rem 0',
          }}>
            Elementum delivered the site within the timeline as they requested.
            In the end, the client found a 50% increase in traffic within days since its launch.
            They also had an impressive ability to use technologies that the company
            hadn't used, which have also proved to be easy to use and reliable
          </p>
          {/* Closing quote mark */}
          <span style={{
            position: 'absolute', bottom: 10, right: 22,
            fontFamily: 'Georgia, serif',
            fontSize: '3.5rem',
            color: '#bbb',
            lineHeight: 1,
          }}>"</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testi-float { display: none !important; }
        }
      `}</style>
    </section>
  );
}
