"use client";

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
      <div className="navbarContainer flx aic">
        <div className="logo">
          <img src="/images/stellar-logo.svg" alt="Stellar Logo" />
        </div>
        <ul className={`flx navListItems${navActive ? " active" : ""}`} role="menubar">
          {navLinks.map((link) => (
            <li key={link.label} role="none">
              <a
                href={link.href}
                className={link.active ? "active flx aic jcsb" : "flx aic jcsb"}
                role="menuitem"
                tabIndex={0}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-current={link.active ? 'page' : undefined}
              >
                <li>{link.label}</li>
                <i className="fa-solid fa-arrow-right"></i>
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
        >
          <span className="line-harmburger firstLine" />
          <span className="line-harmburger middleLine" />
          <span className="line-harmburger lastLine" />
        </button>
      </div>
    </nav>
  );
}