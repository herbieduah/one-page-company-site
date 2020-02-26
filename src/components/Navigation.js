import React, { useState, useEffect } from "react";
import outlierLogo from "../images/Outlier-Logo.png";
const Navigation = () => {
  let [pos, setPos] = useState(window.pageYOffset);
  let [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let temp = window.pageYOffset;
      setVisible(pos > temp);
      setPos(temp);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className={`nav${!visible ? " nav--hidden" : ""}`}>
      <div className="nav__logo nav__logo--mobile">
        <img src={outlierLogo} alt="Outlier logo" />
      </div>
      <ul className="nav__links">
        <li className="nav__link">
          <div className="nav__logo nav__logo--desktop">
            <img src={outlierLogo} alt="Outlier logo" />
          </div>
        </li>
        <li className="nav__link">about</li>
        <li className="nav__link">team</li>
        <li className="nav__link">companies</li>
        <li className="nav__link">criteria</li>
        <li className="nav__link">careers</li>
        <li className="nav__link">contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
