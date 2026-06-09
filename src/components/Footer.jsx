import React from 'react';

const COLS = [
  {
    heading: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    heading: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    heading: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#D5EDE1', padding: '2.5rem 40px 2.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Thin divider */}
        <div style={{ height: 1, background: 'rgba(0,0,0,0.15)', marginBottom: '2.5rem' }} />

        {/* 4-col grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          marginBottom: '3rem',
        }} className="footer-grid">

          {COLS.map((col, i) => (
            <div key={i}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '0.9rem',
                color: '#111',
                marginBottom: '1.25rem',
                letterSpacing: '-0.01em',
              }}>
                {col.heading}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: '0.84rem',
                        color: '#444',
                        transition: 'color 0.2s',
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                      onMouseEnter={e => e.target.style.color = '#111'}
                      onMouseLeave={e => e.target.style.color = '#444'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: '0.9rem',
              color: '#111',
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}>
              Terms & Policies
            </h4>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '0.65rem',
              fontSize: '0.84rem', color: '#444', lineHeight: 1.6,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              <p>1498w Fluton ste, STE<br />2D Chicago, IL 63867.</p>
              <p>(123) 456789000</p>
              <p>info@elementum.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.1)',
          paddingTop: '1.5rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#666',
          fontFamily: "'Space Grotesk', sans-serif",
        }}>
          ©2023 Elementum. All rights reserved
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
