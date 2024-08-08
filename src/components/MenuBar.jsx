import React, { useContext, useState } from 'react';
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`flex flex-col items-center ${darkLightMode === 'light'
            ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black'
            : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700'
            } p-2 shadow-md w-full`}
        >
            <div className="flex justify-between items-center w-full px-4">
                <div className="flex items-center">
                    <img src="../assets/crypto-news-logo.png" alt="Website Logo" className="clickable h-20 w-20 lg:w-32 lg:h-32 mr-2" onClick={showHomePage} />
                    <span
                        className={`text-2xl md:text-3xl lg:text-4xl font-bold font-serif ${darkLightMode === 'light' ? 'text-black' : 'text-white'}`}>{title}
                    </span>
                </div>
                <div className="flex md:hidden">
                    <button
                        className="text-black font-bold hover:text-yellow-700 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            color={`${darkLightMode === 'light' ? "black" : "white"}`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <ul className={`flex space-x-8 md:space-x-4 lg:space-x-8 font-bold ${darkLightMode === 'light' ? 'text-black' : 'text-white'}`}>
                        <li>
                            <button onClick={showHomePage} className="text-xl md:text-2xl lg:texl-3xl font-bold hover:text-yellow-700 focus:outline-none">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={showAboutPage} className="text-xl md:text-2xl lg:texl-3xl font-bold hover:text-yellow-700 focus:outline-none">
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={showContactPage} className="text-xl md:text-2xl lg:texl-3xl font-bold hover:text-yellow-700 focus:outline-none">
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
            {isMenuOpen && (
                <nav className={`md:hidden w-full ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-white'
                    }`}>
                    <ul className="flex flex-col items-center space-y-4">
                        <li>
                            <button onClick={showHomePage} className="font-bold text-xl hover:text-yellow-700 focus:outline-none">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={showAboutPage} className="font-bold text-xl hover:text-yellow-700 focus:outline-none">
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={showContactPage} className="font-bold text-xl hover:text-yellow-700 focus:outline-none">
                                Contact Us
                            </button>
                        </li>
                        <li>
                            <button onClick={toggleMode} className="font-bold text-black hover:text-yellow-700 focus:outline-none">
                                {darkLightMode === 'light' ? (
                                    <img src="../assets/dark-mode.png" alt="Dark Mode" className="w-6 h-6" />
                                ) : (
                                    <img src="../assets/light-mode.png" alt="Light Mode" className="w-6 h-6" />
                                )}
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default MenuBar;
