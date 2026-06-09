import React, { useEffect, useRef } from 'react';

function useReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

function RevealBlock({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.opacity = 0;
    ref.current.style.transform = 'translateY(48px)';
    ref.current.style.transition = `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref}>{children}</div>;
}

function Triangle({ style }) {
  return (
    <div style={{
      width: 0, height: 0,
      borderLeft: '36px solid transparent',
      borderRight: '36px solid transparent',
      borderBottom: '62px solid #E8635A',
      position: 'absolute',
      ...style,
    }} />
  );
}

function ReadMoreLink() {
  return (
    <a
      href="#"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 12,
        fontSize: '0.875rem', fontWeight: 500, color: '#111',
        marginTop: '1.5rem',
        transition: 'gap 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.gap = '20px'}
      onMouseLeave={e => e.currentTarget.style.gap = '12px'}
    >
      Read more
      <span style={{ display: 'inline-block', width: 60, height: 1, background: '#111', position: 'relative', top: 1 }} />
      <span>→</span>
    </a>
  );
}

export default function About() {
  return (
    <section style={{ position: 'relative', padding: '80px 0 60px', overflow: 'hidden' }}>

      {/* Pink radial glow — top right, exactly like Figma */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 420, height: 320,
        background: 'radial-gradient(circle at 80% 20%, rgba(248,160,160,0.22) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Coral wavy SVG line — spans across both blocks */}
      <svg
        viewBox="0 0 1100 520"
        fill="none"
        style={{
          position: 'absolute', top: '5%', left: 0,
          width: '100%', height: 'auto',
          pointerEvents: 'none', zIndex: 0,
        }}
        preserveAspectRatio="none"
      >
        <path
          d="M 1050 30 C 950 30, 870 180, 750 200 C 630 220, 560 100, 450 120
             C 340 140, 260 280, 200 340 C 140 400, 100 430, 50 480"
          stroke="#E8635A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* ── Block 1: Text left, Image right ── */}
        <RevealBlock delay={0}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
            marginBottom: '8rem',
          }} className="about-grid">
            {/* Text */}
            <div>
              <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                color: '#111',
                marginBottom: '1.25rem',
              }}>
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  Tomorrow
                  <span style={{
                    position: 'absolute', left: 0, right: 0, bottom: -3,
                    height: 3, background: '#F5C842', borderRadius: 2,
                  }} />
                </span>
                {' should'}
                <br />
                {'be better than '}
                <span style={{
                  background: '#C8EACD',
                  borderRadius: 10,
                  padding: '1px 12px 4px',
                  display: 'inline-block',
                }}>today</span>
              </h2>
              <p style={{
                fontSize: '0.9rem', color: '#555', lineHeight: 1.8,
                maxWidth: 380, marginBottom: 0,
              }}>
                We are a team of strategists, designers communicators, researchers.
                Together, we believe that progress only happens when you refuse to play things safe.
              </p>
              <ReadMoreLink />
            </div>

            {/* Image with triangle decoration */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <Triangle style={{ top: -18, right: 10, zIndex: 2 }} />
              <div style={{
                width: 370, height: 370, borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 8px 40px rgba(0,0,0,0.13)',
                flexShrink: 0,
                transition: 'transform 0.4s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                  alt="Team in meeting"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </RevealBlock>

        {/* ── Block 2: Image left, Text right ── */}
        <RevealBlock delay={100}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }} className="about-grid">
            {/* Image with TWO triangles */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <Triangle style={{ top: -22, left: 30, zIndex: 2 }} />
              <div style={{
                width: 370, height: 370, borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 8px 40px rgba(0,0,0,0.13)',
                flexShrink: 0,
                transition: 'transform 0.4s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="Team working"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <Triangle style={{ bottom: -22, left: 60, zIndex: 2 }} />
            </div>

            {/* Text */}
            <div>
              <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                color: '#111',
                marginBottom: '1rem',
              }}>
                <span style={{
                  background: '#C8EACD',
                  borderRadius: 10,
                  padding: '1px 12px 4px',
                  display: 'inline-block',
                }}>See</span>
                {' how we can'}
                <br />
                {'help you progress'}
              </h2>
              {/* yellow underline bar */}
              <div style={{
                width: 110, height: 3.5,
                background: '#F5C842',
                borderRadius: 2,
                marginBottom: '1.25rem',
              }} />
              <p style={{
                fontSize: '0.9rem', color: '#555', lineHeight: 1.8,
                maxWidth: 380, marginBottom: 0,
              }}>
                We add a layer of fearless insights and action that allows change makers
                to accelerate their progress in areas such as brand, design digital,
                comms and social research.
              </p>
              <ReadMoreLink />
            </div>
          </div>
        </RevealBlock>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-grid > div:first-child { order: 2; }
          .about-grid > div:last-child { order: 1; }
        }
      `}</style>
    </section>
  );
}
