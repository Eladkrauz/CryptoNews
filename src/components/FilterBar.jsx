import React, { useState, useContext } from 'react';
import currencies from './Currencies.jsx';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext.jsx';

/**
 * FilterBar component displays a list of currencies for filtering news articles.
 * @param {function} onCurrencyClick - Function to handle the event when a currency is clicked.
 */
function FilterBar({ onCurrencyClick }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { darkLightMode } = useContext(DarkLightModeContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 mt-3 shadow-lg shadow-black rounded-2xl m-4">
            <div className="flex justify-between items-center h-16 w-full px-4">
                <div className="flex-grow flex justify-center lg:hidden">
                    <button
                        className="text-black font-bold hover:text-gray-100"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            color={`${darkLightMode === 'light' ? 'black' : 'white'}`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden lg:flex flex-grow justify-around items-center h-full">
                    {currencies.map((currency, index) => (
                        <li key={index} className="flex-grow flex justify-center">
                            <button
                                className="flex items-center font-bold xl:text-xl text-black hover:text-gray-100"
                                onClick={() => onCurrencyClick(currency)}
                            >
                                <img src={`/assets/${currency.toLowerCase()}-logo.png`} alt={`${currency} Logo`} className="h-5 w-5 mr-2" />
                                {currency}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {isMenuOpen && (
                <ul className="lg:hidden flex flex-col w-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500">
                    {currencies.map((currency, index) => (
                        <li key={index} className="flex justify-center p-2 border-t border-gray-200">
                            <button
                                className="flex items-center font-bold text-black hover:text-gray-100"
                                onClick={() => onCurrencyClick(currency)}
                            >
                                <img src={`/assets/${currency.toLowerCase()}-logo.png`} alt={`${currency} Logo`} className="h-5 w-5 mr-2" />
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
