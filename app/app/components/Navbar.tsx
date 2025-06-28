"use client";
import Image from "next/image";

type NavbarProps = {
  navActive: boolean;
  setNavActive: (active: boolean) => void;
};

const navLinks = [
  { label: "Blockchain", href: "#", active: true },
  { label: "User stellar", href: "https://stellar.org/" },
  { label: "Explorer", href: "https://stellar.expert/explorer/public" },
  { label: "Community", href: "https://stellar.org/community" },
  { label: "Foundation", href: "https://stellar.org/foundation" },
];

export default function Navbar({ navActive, setNavActive }: NavbarProps) {
  return (
    <nav id="navbar" className="navbar" aria-label="Main Navigation">
      <div className="navbarContainer flx aic" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', height: 72 }}>
        <a href="#" className="logo" aria-label="Stellar Home" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1.5rem 0.5rem 0', height: '100%' }}>
          <img src="/images/stellar-logo.svg" alt="Stellar Logo" height={40} style={{ display: 'block' }} />
        </a>
        <ul
          className={`flx navListItems${navActive ? " active" : ""}`}
          role="menubar"
          style={{ marginLeft: 'auto', gap: '2rem', display: 'flex', alignItems: 'center', listStyle: 'none', background: 'none', boxShadow: 'none' }}
        >
          {navLinks.map((link) => (
            <li key={link.label} role="none">
              <a
                href={link.href}
                className={
                  link.active
                    ? "navbar-link active"
                    : "navbar-link"
                }
                role="menuitem"
                tabIndex={0}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-current={link.active ? 'page' : undefined}
                style={{
                  color: link.active ? '#1a73e8' : '#222',
                  fontWeight: 600,
                  fontSize: 16,
                  padding: '0.5rem 1rem',
                  borderRadius: 6,
                  transition: 'background 0.2s, color 0.2s',
                  background: link.active ? 'rgba(26,115,232,0.08)' : 'none',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'block',
                }}
                onMouseOver={e => (e.currentTarget.style.background = 'rgba(26,115,232,0.08)')}
                onMouseOut={e => (e.currentTarget.style.background = link.active ? 'rgba(26,115,232,0.08)' : 'none')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`harmburgerBtn${navActive ? " active" : ""}`}
          aria-label={navActive ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={navActive}
          aria-controls="navbar-menu"
          onClick={() => setNavActive(!navActive)}
          style={{ marginLeft: 24, display: 'none' }}
        >
          <span className="line-harmburger firstLine" />
          <span className="line-harmburger middleLine" />
          <span className="line-harmburger lastLine" />
        </button>
      </div>
    </nav>
  );
} 