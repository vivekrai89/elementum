import React, { useState, useEffect } from 'react';

const NAV_LINKS = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
      background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
      boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.07)' : 'none',
      transition: 'box-shadow 0.3s, background 0.3s',
      borderBottom: '1px solid #f0f0f0',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: '0 40px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700, fontSize: '1.25rem',
          letterSpacing: '-0.02em', color: '#111',
          flexShrink: 0,
        }}>
          Elementum
        </a>

        {/* Center nav links */}
        <ul style={{
          display: 'flex', gap: '2.5rem', alignItems: 'center',
        }} className="nav-links-desktop">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a href="#" style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.875rem', fontWeight: 400, color: '#222',
                transition: 'color 0.2s',
                position: 'relative',
              }}
                onMouseEnter={e => e.target.style.color = '#000'}
                onMouseLeave={e => e.target.style.color = '#222'}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger — always visible, matches Figma */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#111', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#111', borderRadius: 2 }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          background: '#fff', borderTop: '1px solid #f0f0f0',
          padding: '1rem 2rem 1.5rem',
        }}>
          {NAV_LINKS.map(link => (
            <div key={link} style={{ padding: '0.6rem 0' }}>
              <a href="#" style={{ fontSize: '1rem', color: '#222', fontWeight: 500 }}>{link}</a>
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
