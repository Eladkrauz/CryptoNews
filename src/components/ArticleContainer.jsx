/**
 * ArticleContainer.jsx
 * 
 * This file defines the ArticleContainer component for the Crypto News application.
 * The ArticleContainer component displays a carousel of articles with automatic sliding, handling user interactions such as clicking on articles and navigating through the carousel.
 */

import React, { useState, useEffect, useContext, useRef } from 'react';
import ArticleSummary from './ArticleSummary';
import '../styles/ArticleContainer.css';
import '../styles/ButtonHover.css';
import { useArticleCarousel } from '../hooks/useArticleCarousel';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import StylesObject from '../styles/StylesObject';

/**
 * ArticleContainer component displays a carousel of articles with automatic sliding.
 * @param {function} onArticleClick - Function to handle the event when an article is clicked.
 * @param {array} currenciesToShow - List of currencies to fetch articles for.
 */
function ArticleContainer({ onArticleClick, currenciesToShow }) {
    const style = StylesObject.articleContainer;

    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context
    const {
        articles, // Array of articles fetched for the selected currencies
        currentArticleIndex, // Index of the currently displayed article in the carousel
        setCurrentArticleIndex, // Function to update the current article index
        apiError, // Boolean indicating if there was an error fetching articles
        startAutoSlide, // Function to start the automatic sliding of the carousel
        stopAutoSlide // Function to stop the automatic sliding of the carousel
    } = useArticleCarousel(currenciesToShow);

    /**
     * Show the next article in the carousel.
     * Cycles through the articles by incrementing the current index.
     */
    const nextArticle = () => {
        setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
    };

    /**
     * Show the previous article in the carousel.
     * Cycles through the articles by decrementing the current index.
     */
    const prevArticle = () => {
        setCurrentArticleIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
    };

    /**
     * Render dots for the carousel navigation.
     * Each dot represents an article in the carousel, and the current article is highlighted.
     * @returns {JSX.Element} Array of span elements representing dots.
     */
    const renderDots = () => {
        return articles.map((_, index) => (
            <span
                key={index}
                className={`${style.dot} ${(index === currentArticleIndex
                ? style.dotTheme[darkLightMode].selected // Selected dot style
                : style.dotTheme[darkLightMode].notSelected // Non-selected dot style
                )}`}
            ></span>
        ));
    };

    /**
     * Handle the click event on an article summary to show the full article.
     * Passes the currently displayed article to the onArticleClick handler.
     */
    const handleSummaryClick = () => {
        onArticleClick(articles[currentArticleIndex]);
    };

    return (
        <div>
            {apiError ? (
                <div className={StylesObject.general.getOuterWrapper(darkLightMode)}>
                    <div className={style.getErrorContainerTheme(darkLightMode)}>
                        <div className={style.errorDiv}>
                            {/* Display error image when there's an issue fetching articles */}
                            <img src={style.errorImage[darkLightMode]} alt="Error" className={style.errorImage.size} />
                        </div>
                        {/* Display error messages when there's an issue fetching articles */}
                        <p className={style.errorParagraph}>We are unable to show updated news at the moment.</p>
                        <p className={style.errorParagraph}>Please try to refresh or try again later.</p>
                        <div className={style.errorDiv}>
                            {/* Button to reload the page and attempt fetching articles again */}
                            <button className={StylesObject.general.button} onClick={() => window.location.reload()}>
                                <img src={style.errorButton.path} className={style.errorButton.style} />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className={style.container}
                    onMouseEnter={stopAutoSlide} // Stop sliding on mouse enter
                    onMouseLeave={startAutoSlide} // Resume sliding on mouse leave
                >
                    <div className={style.centeredDiv}>
                        {/* Button to show the previous article */}
                        <button onClick={prevArticle} className={style.controlButton}>
                            <span className={style.arrow.left[darkLightMode]} alt="Prev"></span>
                        </button>
                        <div className={style.summaryContainer}>
                            <div className={style.summaryWrapper} style={{ transform: `translateX(-${currentArticleIndex * 100}%)` }}>
                                {/* Display each article summary in the carousel */}
                                {articles.map((article, index) => (
                                    <div key={index} className={style.summaryItem}>
                                        <ArticleSummary article={article} handleArticleClick={handleSummaryClick} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Button to show the next article */}
                        <button onClick={nextArticle} className={style.controlButton}>
                            <span className={style.arrow.right[darkLightMode]} alt="Next"></span>
                        </button>
                    </div>
                    {/* Display navigation dots for the carousel */}
                    <div className={style.dotsContainer}>
                        {renderDots()}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ArticleContainer;
