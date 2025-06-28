"use client";

export default function Footer() {
  return (
    <footer id="footer-section" className="footer-section" aria-label="Site Footer">
      <div className="footerLogo">
        <img src="/images/stellar-logo.svg" alt="Stellar Logo" height={36} />
      </div>
      <div className="footerListItems flx fdc jcc">
        <ul aria-label="Footer Links - Info">
          <li><a href="#">Newsletters</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Security Guide</a></li>
          <li><a href="#">Bug Bounty Programm</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <ul aria-label="Footer Links - Explore">
          <li><a href="#">Explore on stellar</a></li>
          <li><a href="#">Explore on stellar Expert</a></li>
          <li><a href="#">Market Making with kelp</a></li>
        </ul>
        <ul aria-label="Footer Links - Policies">
          <li><a href="#">Brand Policies</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <nav className="socialIcons flx aic jcc" aria-label="Social Media Links">
        <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
        <a href="#" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
      </nav>
      <div className="copyrights flx aic jcc">
        <p>
          &copy; 2024 stellar. All rights reserved. <a href="#">Terms and Conditions</a> <br /> <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
} 