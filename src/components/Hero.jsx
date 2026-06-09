import React, { useEffect, useRef } from 'react';

/* ── Highlight helpers ─────────────────────────────── */
function YellowUnderline({ children }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      {/* double yellow underline lines — exactly like Figma */}
      <span style={{
        position: 'absolute', left: 0, right: 0, bottom: -6,
        height: 3, background: '#F5C842', borderRadius: 2,
      }} />
      <span style={{
        position: 'absolute', left: 0, right: 0, bottom: -12,
        height: 3, background: '#F5C842', borderRadius: 2,
      }} />
    </span>
  );
}

function PinkPill({ children }) {
  return (
    <span style={{
      background: '#F5BCCE',
      borderRadius: 60,
      padding: '0 18px 6px 18px',
      display: 'inline-block',
      lineHeight: 'inherit',
    }}>
      {children}
    </span>
  );
}

function MintPill({ children }) {
  return (
    <span style={{
      background: '#C8EACD',
      borderRadius: 12,
      padding: '0 16px 4px 16px',
      display: 'inline-block',
      lineHeight: 'inherit',
    }}>
      {children}
    </span>
  );
}

/* ── Avatar data — scattered organic layout matching Figma ── */
const AVATARS = [
  // row 1: two stacked small circles far left
  { url: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=120&h=120&fit=crop&crop=faces', w: 76, h: 76, left: '2%', bottom: 185 },
  { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces', w: 118, h: 118, left: '9%', bottom: 110 },
  // tall large circle left-center
  { url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=faces', w: 162, h: 162, left: '24%', bottom: 100 },
  // short circle below left-center
  { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=faces', w: 118, h: 118, left: '33%', bottom: 20 },
  // two overlapping circles center
  { url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=180&h=180&fit=crop&crop=faces', w: 140, h: 140, left: '47%', bottom: 130 },
  { url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=160&h=160&fit=crop&crop=faces', w: 118, h: 118, left: '57%', bottom: 60 },
  // right side: tall circle
  { url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=180&h=180&fit=crop&crop=faces', w: 140, h: 140, left: '73%', bottom: 120 },
  // far right small
  { url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=140&h=140&fit=crop&crop=faces', w: 118, h: 118, left: '86%', bottom: 50 },
];

export default function Hero() {
  const avatarRefs = useRef([]);

  useEffect(() => {
    avatarRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 400 + i * 100);
    });
  }, []);

  return (
    <section style={{
      position: 'relative',
      paddingTop: 64,
      minHeight: '100vh',
      overflow: 'hidden',
      background: '#fff',
    }}>

      {/* ── Left squiggly decoration (pink + black outlines) ── */}
      <svg
        width="80" height="180"
        viewBox="0 0 80 180"
        fill="none"
        style={{ position: 'absolute', left: 0, top: '38%', pointerEvents: 'none' }}
      >
        {/* pink arc */}
        <path
          d="M 60 10 C 80 40, 10 60, 30 100 C 50 140, 80 150, 60 170"
          stroke="#F4A7B5" strokeWidth="3" strokeLinecap="round" fill="none"
        />
        {/* black squiggle */}
        <path
          d="M 35 15 C 55 45, -15 65, 5 105 C 25 145, 55 155, 35 175"
          stroke="#111" strokeWidth="3" strokeLinecap="round" fill="none"
        />
      </svg>

      {/* ── Purple teardrop shape top-right ── */}
      <div style={{
        position: 'absolute', top: '18%', right: '5%',
        width: 68, height: 88,
        background: '#7B4FCC',
        borderRadius: '50% 0% 50% 50%',
        transform: 'rotate(15deg)',
        pointerEvents: 'none',
      }} />

      {/* ── Pink blob glow far right edge ── */}
      <div style={{
        position: 'absolute', top: '22%', right: '-2%',
        width: 90, height: 120,
        background: 'rgba(245,188,206,0.35)',
        borderRadius: '50%',
        filter: 'blur(20px)',
        pointerEvents: 'none',
      }} />

      {/* ── Headline ── */}
      <div style={{
        textAlign: 'center',
        padding: '60px 40px 0',
        maxWidth: 960,
        margin: '0 auto',
        position: 'relative', zIndex: 2,
      }}>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(3rem, 7.5vw, 6rem)',
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          color: '#111',
          marginBottom: 0,
        }}>
          {'The '}
          <YellowUnderline>thinkers</YellowUnderline>
          {' and'}
          <br />
          {'doers were '}
          <PinkPill>changing</PinkPill>
          <br />
          {'the '}
          <MintPill>status</MintPill>
          {' Quo with'}
        </h1>

        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.95rem',
          color: '#555',
          lineHeight: 1.75,
          maxWidth: 480,
          margin: '2.5rem auto 0',
          fontWeight: 400,
        }}>
          We are a team of strategists, designers communicators, researchers. Together,
          we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>

      {/* ── Organic avatar scatter ── */}
      <div style={{
        position: 'relative',
        height: 310,
        marginTop: 40,
        maxWidth: 1180,
        margin: '40px auto 0',
      }}>
        {AVATARS.map((av, i) => (
          <div
            key={i}
            ref={el => avatarRefs.current[i] = el}
            style={{
              position: 'absolute',
              left: av.left,
              bottom: av.bottom,
              width: av.w,
              height: av.h,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid #fff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.04)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.16)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.10)';
            }}
          >
            <img
              src={av.url}
              alt="Team member"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-avatar-row { height: 220px !important; }
        }
      `}</style>
    </section>
  );
}
