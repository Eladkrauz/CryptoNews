import React, { useState, useEffect, useContext, useRef } from 'react';
import ArticleSummary from './ArticleSummary';
import '../styles/ArticleContainer.css';
import '../styles/ButtonHover.css';
import { fetchArticlesByCurrencies } from '../utils/newsService';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';

/**
 * ArticleContainer component displays a carousel of articles with automatic sliding.
 * @param {function} onArticleClick - Function to handle the event when an article is clicked.
 * @param {array} currenciesToShow - List of currencies to fetch articles for.
 */
function ArticleContainer({ onArticleClick, currenciesToShow }) {
    const [currentArticleIndex, setCurrentArticleIndex] = useState(0); // State for the current article index
    const [articles, setArticles] = useState([]); // State for the list of articles
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context
    const intervalRef = useRef(null); // Ref to store the interval ID for automatic sliding
    const [apiError, setApiError] = useState(false);

    // Fetch articles based on the selected currencies
    useEffect(() => {
        const getArticles = async () => {
            if (currenciesToShow && currenciesToShow.length > 0) {
                console.log(currenciesToShow);
                const articlesData = await fetchArticlesByCurrencies(currenciesToShow);
                if (articlesData.length == 0) {
                    setApiError(true);
                }
                else {
                    setApiError(false);
                    setArticles(articlesData);
                }
            }
        };

        getArticles();
    }, [currenciesToShow]);

    // Start automatic sliding when articles are loaded
    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide(); // Cleanup the interval on component unmount
    }, [articles.length]);

    // Start automatic sliding of articles
    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
        }, 10000); // Change slide every 10 seconds
    };

    // Stop automatic sliding of articles
    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    // Show the next article in the carousel
    const nextArticle = () => {
        setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
    };

    // Show the previous article in the carousel
    const prevArticle = () => {
        setCurrentArticleIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
    };

    // Render dots for the carousel navigation
    const renderDots = () => {
        return articles.map((_, index) => (
            <span
                key={index}
                className={`inline-block w-2 h-2 mx-1 rounded-full ${darkLightMode === 'light'
                    ? (index === currentArticleIndex ? 'bg-gray-900' : 'bg-gray-500')
                    : (index === currentArticleIndex ? 'bg-gray-500' : 'bg-white')
                    }`}
            ></span>
        ));
    };

    // Handle click on an article summary to show the full article
    const handleSummaryClick = () => {
        onArticleClick(articles[currentArticleIndex]);
    };

    return (
            <div>
            {apiError ? (
                <div className={`flex justify-center ${darkLightMode === 'light' ? 'text-black' : 'text-gray-200'}`}>
                    <div className={`error-msg text-center w-10/12 md:w-11/12 m-4 lg:w-11/12 xl:w-3/4 rounded-lg shadow-lg p-6 mb-8 ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200'
                    }`}>
                        <div className="flex justify-center my-4">
                            {darkLightMode === 'light' ? (
                                <img src="../assets/error-light-mode.png" alt="Dark Mode" className="w-20 h-20" />
                                ) : (
                                <img src="../assets/error-dark-mode.png" alt="Light Mode" className="w-20 h-20" />
                                )}
                        </div>
                        <p className="mt-10 text-3xl font-bold text-center">We are been unable to show updated news at the moment.</p>
                        <p className="mb-10 text-3xl font-bold text-center">Please try to refresh or try again later.</p>
                        <div className="flex justify-center my-4">
                            <button
                                className="flexitems-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black text-xl shadow-gray-800 hover:shadow-black shadow-lg font-bold px-4 py-2 rounded-3xl mt-4 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500"
                                onClick={() => window.location.reload()}
                                >
                                <img src="/assets/refresh.png" className="ml-1 h-12 w-12" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className="article-container m-4 p-4 overflow-hidden"
                    onMouseEnter={stopAutoSlide} // Stop sliding on mouse enter
                    onMouseLeave={startAutoSlide} // Resume sliding on mouse leave
                >
                    <div className="flex justify-between items-center">
                        <button onClick={prevArticle} className="focus:outline-none">
                            <span
                                className={darkLightMode === 'light' ? "button-img-left-arrow" : "button-img-left-arrow-dark-mode"}
                                alt="Prev">
                            </span>
                        </button>
                        <div className="article-summary-container flex justify-center items-center w-full overflow-hidden">
                            <div className="article-summary-wrapper flex mb-4" style={{ transform: `translateX(-${currentArticleIndex * 100}%)` }}>
                                {articles.map((article, index) => (
                                    <div key={index} className="article-summary-item flex justify-center items-center w-full">
                                        <ArticleSummary article={article} handleArticleClick={handleSummaryClick} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button onClick={nextArticle} className="focus:outline-none">
                            <span
                                className={darkLightMode === 'light' ? "button-img-right-arrow" : "button-img-right-arrow-dark-mode"}
                                alt="Next">
                            </span>
                        </button>
                    </div>
                    <div className="dots-container flex justify-center mt-4">
                        {renderDots()}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ArticleContainer;
