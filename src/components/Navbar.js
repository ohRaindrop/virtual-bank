import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-scroll";

import './Navbar.css';


const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };
    const handleMobileMenu = () => {
        setClick(false);
    };



    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={5000}
                >
                    <HashLink
                        to="/#home"
                        className="navbar-logo"
                        smooth>
                        LOGO
                    </HashLink>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas  fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={5000}
                        >
                            <HashLink
                                className="nav-links"
                                onClick={handleMobileMenu}
                                to="/#about"
                            >
                                About
                            </HashLink>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={5000}
                        >
                            <HashLink
                                className="nav-links"
                                onClick={handleMobileMenu}
                                to="/#discover"
                            >
                                Discover
                            </HashLink>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={5000}
                        >
                            <HashLink
                                className="nav-links"
                                onClick={handleMobileMenu}
                                to="/#services"
                            >
                                Services
                            </HashLink>
                        </Link>
                    </li>
                    <li className="nav-item" onClick={handleMobileMenu}>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={5000}
                        >
                            <HashLink className="nav-links" to="/#signUp">
                                Sign-up
                            </HashLink>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={5000}
                        >
                            <HashLink className="nav-links-mobile" to="/login">
                                Log in
                            </HashLink>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar