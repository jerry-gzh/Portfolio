import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.png";
import LightLogo from "../../assets/logo-l.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import {
    RiHome2Line,
    RiUser3Line,
    RiStackLine,
    RiFileList3Line,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
    RiAwardFill
} from "react-icons/ri";


const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);
    const [t, i18n] = useTranslation("global");


    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo">
                    <img src={props.theme === 'light' ? LightLogo : Logo} alt="logo" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <RiHome2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <RiUser3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#services" className="nav__link">
                                    <RiFileList3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <RiStackLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#blog" className="nav__link">
                                    <RiAwardFill />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">

                    <button onClick={(i18next.language === 'en')? () => i18n.changeLanguage("es") : () => i18n.changeLanguage("en") } 
                    className="nav__link footer__button" id="lan">
                        {(i18next.language === 'en')? 'ES' : 'EN'}
                    </button>

                    <button onClick={() => { props.switchTheme(); showMenu(!toggle) }} className="nav__link footer__button">
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
