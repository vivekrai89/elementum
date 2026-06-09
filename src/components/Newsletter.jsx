import React, { useState } from 'react';

export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section style={{
      background: '#D5EDE1',
      padding: '72px 40px 80px',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>

      {/* Curved red/coral arrow pointing down — from Figma */}
      <svg
        width="90" height="80"
        viewBox="0 0 90 80"
        fill="none"
        style={{ display: 'block', margin: '0 auto 1.5rem' }}
      >
        <path
          d="M 15 8 C 22 24, 50 28, 58 48 C 62 58, 46 66, 46 66"
          stroke="#E8635A" strokeWidth="2.5" strokeLinecap="round" fill="none"
        />
        <path
          d="M 24 8 C 30 24, 58 28, 65 48 C 69 58, 53 66, 53 66"
          stroke="#E8635A" strokeWidth="2.5" strokeLinecap="round" fill="none"
        />
        {/* arrowhead */}
        <path
          d="M 41 60 L 48 70 L 56 60"
          stroke="#E8635A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
      </svg>

      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
        color: '#111',
        marginBottom: '0.75rem',
      }}>
        Subscribe to<br />our newsletter
      </h2>

      <p style={{
        fontSize: '0.9rem',
        color: '#555',
        marginBottom: '2rem',
      }}>
        To make your stay special and even more memorable
      </p>

      {done ? (
        <p style={{ fontWeight: 600, color: '#2a7a4e', fontSize: '1rem' }}>
          Thank you for subscribing!
        </p>
      ) : (
        <button
          onClick={() => setDone(true)}
          style={{
            background: '#111',
            color: '#fff',
            padding: '0.85rem 2.5rem',
            borderRadius: 50,
            fontSize: '0.9rem',
            fontWeight: 600,
            fontFamily: "'Space Grotesk', sans-serif",
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#333'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Subscribe Now
        </button>
      )}

      {/* Purple teardrop — bottom right */}
      <div style={{
        position: 'absolute',
        bottom: -20, right: 30,
        width: 80, height: 100,
        background: '#7B4FCC',
        borderRadius: '50% 0 50% 50%',
        transform: 'rotate(20deg)',
        opacity: 0.9,
        pointerEvents: 'none',
      }} />
    </section>
  );
}
