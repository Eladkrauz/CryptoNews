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
        <div className="article-summary m-4 flex flex-col items-center justify-center xl:flex-row xl:items-center xl:justify-center 2xl:w-10/12 mx-auto">
            <div className="flex flex-col items-center justify-center xl:flex-row xl:w-full xl:justify-center">
                <div className="w-full flex justify-center xl:w-1/2 p-4">
                    <img 
                        className={`w-full xl:max-w-md 2xl:max-w-lg border-2 shadow-lg hover:shadow-gray-700 ${darkLightMode === 'light' ? 'border-black shadow-black' : 'border-white shadow-gray-500'
                        }`} 
                        src={article.image} 
                        alt={article.title} 
                        onClick={handleArticleClick}
                    />
                </div>
                <div className={`mt-4 xl:mt-0 xl:ml-6 2xl:ml-8 xl:w-1/2 ${darkLightMode === 'light' ? 'text-black' : 'text-white'
                    } text-center xl:text-left`}>
                    <h1 
                        className={`font-bold text-2xl xl:text-3xl 2xl:text-4xl mt-2 mb-4 border-2 p-2 xl:p-3 2xl:p-4 hover:shadow-gray-700 ${darkLightMode === 'light' ? 'text-black shadow-black shadow-xl border-black' : 'text-white shadow-gray-500 shadow-lg border-white'
                        }`} 
                        onClick={handleArticleClick}
                    >
                        {article.title}
                    </h1>
                    <h3 
                        className={`text-lg xl:text-xl 2xl:text-2xl mb-2 ${darkLightMode === 'light' ? 'text-gray-500' : 'text-gray-400'
                        }`}
                    >
                        {article.source} • {article.date} • {article.time}
                    </h3>
                    <p 
                        className={`text-lg xl:text-xl 2xl:text-2xl ${darkLightMode === 'light' ? 'text-gray-800' : 'text-gray-200'
                        }`}
                    >
                        {article.summary}
                    </p>
                    <div className="flex justify-center xl:justify-start">
                        <button
                            className="flex items-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black shadow-gray-800 hover:shadow-black shadow-lg font-bold px-4 py-2 rounded mt-4 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500"
                            onClick={handleArticleClick}
                        >
                            Read the Full Article
                            <img src="/assets/click-mouse.png" className="ml-1 h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleSummary;
