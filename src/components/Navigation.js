import React from "react";
import outlierLogo from '../images/Outlier-Logo.png';
const Navigation = () => {
	return (
		<nav className="nav">
            <div className="nav__logo nav__logo--mobile">
               <img src={outlierLogo} alt="Outlier logo"/>
            </div>
            <ul className="nav__links">
                <li className="nav__link">
                    <div className="nav__logo nav__logo--desktop">
                        <img src={outlierLogo} alt="Outlier logo"/>
                    </div>
                </li>
                <li className="nav__link">
                    about
                </li>
                <li className="nav__link">
                   team
                </li>
                <li className="nav__link">
                   companies
                </li>
                <li className="nav__link">
                   criteria
                </li>
                <li className="nav__link">
                   careers
                </li>
                <li className="nav__link">
                   contact
                </li>
            </ul>
        </nav>
	);
};

export default Navigation;
