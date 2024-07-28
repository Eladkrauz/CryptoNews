/**
 * This file defines the FilterBar component for the Crypto News application.
 * The FilterBar component displays a list of currencies that users can click to filter news articles.
 * Each currency is displayed with its name and logo.
 */

import React from 'react';
import currencies from './Currencies.jsx';

/**
 * FilterBar component displays a list of currencies for filtering news articles.
 * @param {function} onCurrencyClick - Function to handle the event when a currency is clicked.
 */
function FilterBar({ onCurrencyClick }) {
    return (
        <div className="flex justify-between items-center h-16 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 mt-3 shadow-lg shadow-black rounded-2xl m-4">
            <ul className="flex flex-grow justify-around items-center h-full">
                {currencies.map((currency, index) => (
                    <li key={index} className="flex-grow flex justify-center">
                        <button
                            className="flex items-center font-bold text-black hover:text-gray-100"
                            onClick={() => onCurrencyClick(currency)}
                        >
                            <img src={`/src/assets/${currency.toLowerCase()}-logo.png`} alt={`${currency} Logo`} className="h-5 w-5 mr-2" />
                            {currency}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterBar;
