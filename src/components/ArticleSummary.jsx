/**
 * This file defines the ArticleSummary component for the Crypto News application.
 * The ArticleSummary component displays a brief overview of an article, including the title, image, source, date, time, and summary.
 * It uses the dark/light mode context to style the component accordingly.
 */

import React, { useContext } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import '../styles/ButtonHover.css';

/**
 * ArticleSummary component displays a summary of an article.
 * @param {object} article - The article object containing details such as title, image, summary, etc.
 * @param {function} handleArticleClick - Function to handle the event when the article is clicked.
 */
function ArticleSummary({ article, handleArticleClick }) {
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context

    if (!article) {
        return null; // Return null if no article is provided
    }

    return (
        <div className="article-summary m-4 justify-between grid grid-cols-12">
            <div className="col-span-1"></div>
            <div className="col-span-4">
                <img 
                    className={`clickable w-5/6 border-2 shadow-lg hover:shadow-gray-700 ${darkLightMode === 'light' ? 'border-black shadow-black' : 'border-white shadow-gray-500'
                    }`} 
                    src={article.image} 
                    alt={article.title} 
                    onClick={handleArticleClick}
                />
            </div>
            <div className={`col-span-6 ${darkLightMode === 'light' ? 'text-black' : 'text-white'
                }`}>
                <h1 
                    className={`clickable font-bold text-4xl mt-2 mb-8 border-2 p-4 hover:shadow-gray-700 ${darkLightMode === 'light' ? 'text-black shadow-black shadow-xl border-black' : 'text-white shadow-gray-500 shadow-lg border-white'
                    }`} 
                    onClick={handleArticleClick}
                >
                    {article.title}
                </h1>
                <h3 className={`text-xl mb-4 ${darkLightMode === 'light' ? 'text-gray-500' : 'text-gray-400'
                    }`}>{article.source} • {article.date} • {article.time}</h3>
                <p className={`text-2xl text-justify ${darkLightMode === 'light' ? 'text-gray-800' : 'text-gray-200'
                    }`}>{article.summary}</p>
                <div className="flex justify-center">
                    <button
                        className="flex justify-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black shadow-gray-800 hover:shadow-black shadow-lg font-bold px-4 py-2 rounded mt-4 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500"
                        onClick={handleArticleClick}
                    >
                        Read the Full Article
                        <img src="./src/assets/click-mouse.png" className="ml-1 h-6 w-6" />
                    </button>
                </div>
            </div>
            <div className="col-span-1"></div>
        </div>
    );
}

export default ArticleSummary;
