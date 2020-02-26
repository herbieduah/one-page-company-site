import React from "react";
import outlierLogo from "../images/Outlier-Logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <img src={outlierLogo} alt="Outlier logo" />
        </div>
        <ul className="footer__links">
          <li className="footer__link">contact</li>
          <li className="footer__link">media</li>
          <li className="footer__link">sitemap</li>
        </ul>
      </div>
      <p className="footer__address">668 N 44th St, Suite 300 Phoenix, AZ 85008</p>
    </div>
  );
};

export default Footer;
