/**
 * ArticleSummary.jsx
 * 
 * This file defines the ArticleSummary component for the Crypto News application.
 * The ArticleSummary component displays a brief summary of a given article, including the title, image, and summary text.
 * It provides a clickable interface to view the full article.
 */

import React, { useContext } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import '../styles/ButtonHover.css';
import StylesObject from '../styles/StylesObject';

/**
 * ArticleSummary component displays a summary of an article.
 * @param {object} article - The article object containing details such as title, image, summary, etc.
 * @param {function} handleArticleClick - Function to handle the event when the article is clicked.
 */
function ArticleSummary({ article, handleArticleClick }) {
    const style = StylesObject.articleSummary;

    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context

    if (!article) {
        return null; // Return null if no article is provided
    }

    return (
        <div className={style.wrapper}>
            <div className={style.layout}>
                <div className={style.imageContainer}>
                    {/* Display article image with a dynamic theme, clickable to show the full article */}
                    <img 
                        className={style.getImageTheme(darkLightMode)} 
                        src={article.image} 
                        alt={article.title} 
                        onClick={handleArticleClick}
                    />
                </div>
                <div className={style.getTextSectionTheme(darkLightMode)}>
                    <div className={StylesObject.general.outerWrapper}>
                        {/* Display article title, clickable to show the full article */}
                        <h1 className={style.h1Wrapper(darkLightMode)} onClick={handleArticleClick}>
                            {article.title}
                        </h1>
                    </div>
                    {/* Display article source, date, and time */}
                    <h3 className={style.h3Wrapper(darkLightMode)}>
                        {article.source} • {article.date} • {article.time}
                    </h3>
                    <div className={StylesObject.general.outerWrapper}>
                        {/* Display article summary */}
                        <p className={style.paragraphWrapper(darkLightMode)}>
                            {article.summary}
                        </p>
                    </div>
                    <div className={StylesObject.general.outerWrapper}>
                        <div className={style.button.wrapper}>
                            {/* Button to trigger the article click handler and view the full article */}
                            <button
                                className={StylesObject.general.button}
                                onClick={handleArticleClick}
                            >
                                Read the Full Article
                                <img src={style.button.path} className={style.button.style} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleSummary;
