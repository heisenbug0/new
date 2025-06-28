"use client";
import { useEffect } from "react";

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
  useEffect(() => {
    // Initialize AOS when component mounts
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.refresh();
    }
  }, []);

  return (
    <section className="networkContainer flx fdc aic jcc" aria-label="Wallet Networks">
      <ul className="networkCardList">
        {networks.map((net, index) => (
          <li key={net.name}>
            <button
              className="NetworkCard flx aic"
              value={net.name}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              onClick={() => openLogin(net.name)}
              aria-label={`Login with ${net.name}`}
            >
              <span className="flx aic jcc">
                <img src={`/images/${net.img}`} alt={net.name} />
                <h5>{net.name}</h5>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}