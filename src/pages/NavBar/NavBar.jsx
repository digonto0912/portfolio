import React, { useState } from 'react';
import "./NavBar.css";
import menuIcon from "../../../public/images/menu.png";

// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    };

    return (
        <div id="navbar" className="NavBar">
            <div className="navNameSide">Fardul Islam</div>
            <div className="navPagesSide">
                <div><a href="/">HOME</a></div>
                <div><a href="/about">ABOUT</a></div>
                <div><a href="/projects">PROJECTS</a></div>
                <div><a href="/blog">BLOG</a></div>
                <div><a href="/contact-info">CONTACT INFO</a></div>
                <div className="resumeBtn"><a href="/resume">MY RESUME</a></div>
            </div>

            {/* mobile nav */}
            <div className="mobileNav">

                <div id="showButton" className="mobileNavBtnIcon" onClick={toggleMenu}>
                    <img src={menuIcon} className="h60" alt="Menu" />
                </div>

                {showMenu && (
                    <div className="mobileNavOptions">
                        <a href="/"><div>HOME</div></a>
                        <a href="/about"><div>ABOUT</div></a>
                        <a href="/projects"><div>PROJECTS</div></a>
                        <a href="/blog"><div>BLOG</div></a>
                        <a href="/contact-info"><div>CONTACT INFO</div></a>
                        <a href="/resume" className="resumeBtn"><div>MY RESUME</div></a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
