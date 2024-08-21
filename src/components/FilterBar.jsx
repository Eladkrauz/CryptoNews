/**
 * FilterBar.jsx
 * 
 * This file defines the FilterBar component for the Crypto News application.
 * The FilterBar component displays a list of popular cryptocurrencies that users can select to filter news articles.
 * It includes a dropdown menu for mobile devices and dynamically applies styles based on the dark/light mode.
 */

import React, { useState, useContext } from 'react';
import currencies from './Currencies.jsx';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext.jsx';
import StylesObject from '../styles/StylesObject.jsx';

/**
 * FilterBar component displays a list of currencies for filtering news articles.
 * @param {function} onCurrencyClick - Function to handle the event when a currency is clicked.
 */
function FilterBar({ onCurrencyClick }) {
    const style = StylesObject.filterBar;
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the mobile menu is open
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context

    /**
     * Toggle the mobile menu between open and closed states.
     */
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={style.outerContainerTheme(darkLightMode)}>
            <div className={style.headerContainer}>
                <div className={style.mobileMenuButtonContainer}>
                    {/* Mobile menu button to toggle the currency filter dropdown */}
                    <button className={style.mobileMenuButton} onClick={toggleMenu}>
                        <h1 className={style.mobileMenuButtonTextTheme(darkLightMode)}>Filter Currencies</h1>
                        {/* SVG icon for the mobile menu */}
                        {isMenuOpen ? (
                            // SVG for 'X' icon when the menu is open
                            <svg
                                className={style.mobileMenuIcon}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                color={`${darkLightMode === 'light' ? 'black' : 'white'}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            // SVG for hamburger icon when the menu is closed
                            <svg
                                className={style.mobileMenuIcon}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                color={`${darkLightMode === 'light' ? 'black' : 'white'}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                </div>
                {/* Display list of currencies for filtering news articles */}
                <ul className={style.navMenuContainer}>
                    {currencies.map((currency, index) => (
                        <li key={index} className={style.navListItem}>
                            {/* Button to trigger filtering by the selected currency */}
                            <button
                                className={style.currencyButtonTheme(darkLightMode)}
                                onClick={() => onCurrencyClick(currency)}
                            >
                                {/* Display currency logo */}
                                <img src={`/assets/${currency.toLowerCase()}-logo.png`} alt={`${currency} Logo`} className={style.currencyLogo} />
                                {currency}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {isMenuOpen && (
                <ul className={style.mobileMenuDropdownTheme(darkLightMode)}>
                    {currencies.map((currency, index) => (
                        <li key={index} className={style.mobileMenuDropdownItem}>
                            {/* Button to trigger filtering by the selected currency on mobile */}
                            <button
                                className={style.mobileMenuCurrencyButtonTheme(darkLightMode)}
                                onClick={() => onCurrencyClick(currency)}
                            >
                                <img src={`/assets/${currency.toLowerCase()}-logo.png`} alt={`${currency} Logo`} className={style.mobileMenuCurrencyLogo} />
                                {currency}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FilterBar;
