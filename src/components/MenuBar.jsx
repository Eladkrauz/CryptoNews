/**
 * This file defines the MenuBar component for the Crypto News application.
 * The MenuBar component provides navigation links for Home, About, and Contact pages.
 * It also includes a button to toggle between dark and light modes.
 * The component uses the dark/light mode context to apply appropriate styles.
 */

import React, { useContext } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import '../styles/ButtonHover.css';

/**
 * MenuBar component provides navigation links and a mode toggle button.
 * @param {object} onPageClick - Object containing functions to handle navigation events.
 * @param {string} title - The title to display in the menu bar.
 */
function MenuBar({ onPageClick, title }) {
    const { showHomePage, showAboutPage, showContactPage } = onPageClick; // Destructure navigation functions
    const { darkLightMode, toggleMode } = useContext(DarkLightModeContext); // Access the dark/light mode context

    return (
        <div className={`flex justify-between items-center p-2 shadow-md ${darkLightMode === 'light'
            ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black'
            : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700'
            }`}
        >
            <div className="flex items-center">
                <img src="./src/assets/crypto-news-logo.png" alt="Website Logo" className="clickable h-20 w-20 mr-2" onClick={showHomePage} />
                <span
                    className={`text-2xl font-bold font-serif ${darkLightMode === 'light' ? 'text-black' : 'text-white'}`}>{title}
                </span>
            </div>
            <nav>
                <ul className={`flex space-x-8 font-bold ${darkLightMode === 'light' ? 'text-black' : 'text-white'}`}>
                    <li>
                        <button onClick={showHomePage} className="text-xl font-bold hover:text-yellow-700 focus:outline-none">
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={showAboutPage} className="text-xl font-bold hover:text-yellow-700 focus:outline-none">
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={showContactPage} className="text-xl font-bold hover:text-yellow-700 focus:outline-none">
                            Contact Us
                        </button>
                    </li>
                    <li>
                        <button onClick={toggleMode} className="hover:text-yellow-700 focus:outline-none pr-6">
                            <span
                                className={darkLightMode === 'light' ? "button-img-dark-mode" : "button-img-light-mode"}
                                alt="Toggle Mode">
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MenuBar;
