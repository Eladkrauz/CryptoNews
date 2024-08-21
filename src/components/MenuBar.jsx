/**
 * MenuBar.jsx
 * 
 * This file defines the MenuBar component for the Crypto News application.
 * The MenuBar component provides navigation links for navigating between different pages of the application, such as Home, About, and Contact.
 * It also includes a dark/light mode toggle button and a mobile-friendly menu.
 */

import React, { useContext, useState } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import '../styles/ButtonHover.css';
import StylesObject from '../styles/StylesObject';

/**
 * MenuBar component provides navigation links and a mode toggle button.
 * @param {object} onPageClick - Object containing functions to handle navigation events.
 * @param {string} title - The title to display in the menu bar.
 */
function MenuBar({ onPageClick, title }) {
    const style = StylesObject.menuBar;
    const { showHomePage, showAboutPage, showContactPage } = onPageClick; // Destructure navigation functions
    const { darkLightMode, toggleMode } = useContext(DarkLightModeContext); // Access the dark/light mode context
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track the mobile menu's open/close state

    /**
     * Toggle the mobile menu between open and closed states.
     */
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={style.outerWrapperTheme(darkLightMode)}>
            <div className={style.headerWrapper}>
                <div className={style.logo.wrapper}>
                    {/* Logo image that navigates to the home page when clicked */}
                    <img src={style.logo.path} alt="Website Logo" className={style.logo.style} onClick={showHomePage} />
                    {/* Display the title passed as a prop */}
                    <span className={style.titleTextTheme(darkLightMode)}>{title}</span>
                </div>
                <div className={style.mobileMenu.buttonWrapper}>
                    {/* Button to toggle the mobile menu */}
                    <button className={style.mobileMenu.buttonStyle} onClick={toggleMenu}>
                        {/* Conditionally render the hamburger or 'X' icon based on the menu state */}
                        {isMenuOpen ? (
                            // SVG for 'X' icon when the menu is open
                            <svg
                                className={style.mobileMenu.hamburgerIcon}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                color={`${darkLightMode === 'light' ? "black" : "white"}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            // SVG for hamburger icon when the menu is closed
                            <svg
                                className={style.mobileMenu.hamburgerIcon}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                color={`${darkLightMode === 'light' ? "black" : "white"}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                </div>
                {/* Regular navigation menu for desktop view */}
                <nav className={style.regMenu.wrapper}>
                    <ul className={style.regMenu.listTheme(darkLightMode)}>
                        <li><button onClick={showHomePage} className={style.regMenu.item}>Home</button></li>
                        <li><button onClick={showAboutPage} className={style.regMenu.item}>About</button></li>
                        <li><button onClick={showContactPage} className={style.regMenu.item}>Contact Us</button></li>
                        <li>
                            {/* Button to toggle dark/light mode */}
                            <button onClick={toggleMode} className={style.regMenu.modeToggleWrapper}>
                                <span
                                    className={style.regMenu.modeToggleIcon[darkLightMode]}
                                    alt="Toggle Mode">
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            {isMenuOpen && (
                /* Mobile-friendly navigation menu */
                <nav className={style.mobileMenu.wrapperTheme(darkLightMode)}>
                    <ul className={style.mobileMenu.layout}>
                        <li><button onClick={showHomePage} className={style.mobileMenu.item}>Home</button></li>
                        <li><button onClick={showAboutPage} className={style.mobileMenu.item}>About</button></li>
                        <li><button onClick={showContactPage} className={style.mobileMenu.item}>Contact Us</button></li>
                        <li>
                            {/* Mobile mode toggle button */}
                            <button onClick={toggleMode} className={style.mobileMenu.item}>
                                <img src={style.mobileMenu.modeToggle.path[darkLightMode]} alt="Mode" className={style.mobileMenu.modeToggle.imageStyle} />
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default MenuBar;
