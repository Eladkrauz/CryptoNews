/**
 * This file defines the ArticleFull component for the Crypto News application.
 * The ArticleFull component displays the detailed view of a single article including the title, image, summary, and full text.
 * It also includes buttons to navigate back to the list of articles and to open the original article source.
 * The component uses the dark/light mode context to apply appropriate styles.
 */

import React, { useContext } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';

/**
 * ArticleFull component displays the detailed view of a single article.
 * @param {object} article - The article object containing details such as title, image, summary, etc.
 * @param {function} onClose - Function to handle the event when the "Back to All Articles" button is clicked.
 * @param {string} [cameFrom] - Optional prop indicating where the user navigated from.
 */
function ArticleFull({ article, onClose, cameFrom }) {
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context

    // Handle click event to open the article's original source page in a new tab
    const handleClick = () => {
        window.open(article.url, '_blank'); // article.url is the article's original source page
    };

    return (
        <div>
            <div className="article-full m-12 justify-between grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className="col-span-4">
                    <img
                        className={`w-full border-2 shadow-lg ${darkLightMode === 'light' ? 'border-black shadow-black' : 'border-white shadow-gray-500'}`}
                        src={article.image}
                        alt={article.title}>
                    </img>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-5">
                    <h1 className={`text-6xl mt-2 font-bold ${darkLightMode === 'light'
                        ? 'text-black' : 'text-white'}`}>{article.title}</h1>
                    <h1 className={`text-xl mt-4 text-gray-800 ${darkLightMode === 'light'
                        ? 'text-gray-600' : 'text-white'
                        }`}>{article.source} • {article.date} • {article.time}</h1>
                    <h1 className={`text-2xl mt-4 ${darkLightMode === 'light'
                        ? 'text-black' : 'text-white'}`}>{article.summary}</h1>
                    <div className="flex justify-between">
                        <button
                            className="flex justify-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black shadow-gray-800 hover:shadow-black shadow-lg font-bold p-4 rounded mt-4 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500"
                            onClick={onClose}
                        >
                            <img src="./src/assets/left-arrow.png" className="mr-1 h-6 w-6" />
                            Back to All Articles
                        </button>
                        <button
                            className="flex justify-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black shadow-gray-800 hover:shadow-black shadow-lg font-bold p-4 rounded mt-4 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500"
                            onClick={handleClick}
                        >
                            Go To The Original Article
                            <img src="./src/assets/goToExternalPage.png" className="ml-1 h-6 w-6" />
                        </button>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>

            <div className="m-4 mt-8 p-4 grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className="col-span-10">
                    <p className={`text-xl text-justify ${darkLightMode === 'light'
                        ? 'text-black' : 'text-white'}`}>{article.text}</p>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
    );
}

export default ArticleFull;
