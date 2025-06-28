"use client";
import Image from "next/image";

type NetworkCardsProps = {
  openLogin: (networkName: string) => void;
  cardBg?: string;
};

const networks = [
  { name: "Scopuly", img: "scopuly-img.webp" },
  { name: "Stellar", img: "stellar-singleLogo.webp" },
  { name: "Lobstr", img: "lobstr-img.webp" },
  { name: "Stellar x", img: "stellar-X-img.webp" },
  { name: "Firefly", img: "firefly-img.webp" },
  { name: "Centaurus", img: "centaurus-img.webp" },
  { name: "Stellarport", img: "stellarPort-img.webp" },
  { name: "Smartlands", img: "smartlands-img.webp" },
  { name: "StellarTerm", img: "stellarTerm-img.webp" },
  { name: "Stronghold", img: "stronghold-img.webp" },
  { name: "Astral", img: "astral-img.webp" },
  { name: "Stargazer", img: "stargazer.webp" },
  { name: "Saza", img: "saza-img.webp" },
  { name: "Clic", img: "Clic-img.webp" },
  { name: "Atomic", img: "atomic_wallet_logo.webp" },
  { name: "Ledger", img: "ledger-img.webp" },
];

export default function NetworkCards({ openLogin, cardBg }: NetworkCardsProps) {
  return (
    <section className="networkContainer flx fdc aic jcc" aria-label="Wallet Networks">
      <ul className="networkCardList" style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
        {networks.map((net) => (
          <li key={net.name} style={{ marginBottom: '1rem' }}>
            <button
              className="NetworkCard flx aic"
              value={net.name}
              data-aos="fade-up"
              onClick={() => openLogin(net.name)}
              aria-label={`Login with ${net.name}`}
              style={{ width: '100%', background: cardBg || undefined, color: cardBg ? '#222' : undefined, boxShadow: cardBg ? '0 2px 8px rgba(0,0,0,0.08)' : undefined }}
            >
              <span className="flx aic jcc">
                <img src={`/images/${net.img}`} alt={net.name} height={32} style={{ marginRight: 12 }} />
                <h5 style={{ margin: 0 }}>{net.name}</h5>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
} 