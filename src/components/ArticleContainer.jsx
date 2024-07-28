/**
 * This file defines the ArticleContainer component for the Crypto News application.
 * The ArticleContainer component displays a carousel of article summaries and handles automatic sliding of articles.
 * It uses the dark/light mode context to style the component accordingly and fetches articles based on selected currencies.
 */

import React, { useState, useEffect, useContext, useRef } from 'react';
import ArticleSummary from './ArticleSummary';
import '../styles/ArticleContainer.css';
import '../styles/ButtonHover.css';
import { fetchArticlesByCurrencies } from '../utils/newsService';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import fakeArticles from './FakeArticles';

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

    // Fetch articles based on the selected currencies
    useEffect(() => {
        const getArticles = async () => {
            if (currenciesToShow && currenciesToShow.length > 0) {
                console.log(currenciesToShow);
                const articlesData = await fetchArticlesByCurrencies(currenciesToShow);
                setArticles(articlesData);

                // Using fake articles for testing purposes
                // setArticles(fakeArticles);
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
        <div
            className="article-container m-10 p-4"
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
                <div
                    className={`article-summary-container flex justify-center items-center`}
                >
                    <div className="article-summary-wrapper mb-4" style={{ transform: `translateX(-${currentArticleIndex * 100}%)` }}>
                        {articles.map((article, index) => (
                            <div key={index} className="article-summary-item">
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
    );
}

export default ArticleContainer;
