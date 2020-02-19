import React from "react";

const Navigation = () => {
	return (
		<nav className="nav">
            <ul className="nav__links">
                <li className="nav__link">
                    <div className="nav__logo">
                        <img src="" alt=""/>
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
