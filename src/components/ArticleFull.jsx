/**
 * ArticleFull.jsx
 * 
 * This file defines the ArticleFull component for the Crypto News application.
 * The ArticleFull component displays a detailed view of a selected article, including its title, image, summary, and full text.
 * It provides options to go back to the article list or open the original article in a new tab.
 */

import React, { useContext } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import StylesObject from '../styles/StylesObject';

/**
 * ArticleFull component displays the full details of a selected article.
 * @param {Object} article - The article object containing details like title, image, summary, etc.
 * @param {function} onClose - Function to handle the event when the user wants to go back to the article list.
 */
function ArticleFull({ article, onClose }) {
    const style = StylesObject.fullArticle;
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context

    /**
     * Handle the click event to open the original article in a new browser tab.
     */
    const handleClick = () => {
        window.open(article.url, '_blank'); // Opens the article's original URL in a new tab
    };

    /**
     * Removing the end of the text auto generated by the API provider.
     */
    const cleanArticleText = (text) => {
        return text.replace(/\[\d+ chars\]$/, '');    
    }

    return (
        <div className={style.outerWrapper}>
            <div className={style.articleGrid}>
                <div className={style.spacingColumn}></div>
                <div className={style.image.column}>
                    <div className={style.image.wrapper}>
                        {/* Display article image with a dynamic theme */}
                        <img className={style.image.imageTheme(darkLightMode)} src={article.image} alt={article.title}></img>
                    </div>
                </div>
                <div className={style.spacingColumn}></div>
                <div className={style.textColumn}>
                    <div className={style.titleWrapper}>
                        {/* Display article title with a dynamic theme */}
                        <h1 className={style.h1.h1wrapper(darkLightMode)}>{article.title}</h1>
                    </div>
                    {/* Display source, date, and time of the article */}
                    <h3 className={style.h3.h3wrapper(darkLightMode)}>{article.source} • {article.date} • {article.time}</h3>
                    <div className={StylesObject.general.outerWrapper}>
                        {/* Display article summary with a dynamic theme */}
                        <p className={style.paragraph.paragraphWrapper(darkLightMode)}>{article.summary}</p>
                    </div>
                    <div className={style.button.container}>
                        <div className={StylesObject.general.outerWrapper}>
                            {/* Button to go back to the article list */}
                            <button className={style.button.style} onClick={onClose}>
                                <img src={style.button.arrowPath} className={style.button.imageStyle} />
                                Back to All Articles
                            </button>
                        </div>
                        <div className={StylesObject.general.outerWrapper}>
                            {/* Button to open the original article in a new tab */}
                            <button className={style.button.style} onClick={handleClick}>
                                Original Article
                                <img src={style.button.externalPath} className={style.button.imageStyle} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style.spacingColumn}></div>
            </div>

            <div className={style.textSectionGrid}>
                <div className={style.spacingColumn}></div>
                <div className={style.articleTextColumn}>
                    {/* Display the full text of the article with a dynamic theme */}
                    <p className={style.getTextTheme(darkLightMode)}>{cleanArticleText(article.text)}</p>
                    <p className={style.paragraph.keepReading(darkLightMode)}>To keep reading please visit the <u><a href={article.url} target="_blank" rel="noopener noreferrer">original website</a></u>.</p>
                </div>
                <div className={style.spacingColumn}></div>
            </div>
        </div>
    );
}

export default ArticleFull;
