/**
 * useArticleCarousel.js
 * 
 * This file defines a custom React hook, `useArticleCarousel`, which manages the state and behavior for a carousel of articles.
 * It fetches articles based on selected currencies, handles automatic sliding of the carousel, and manages errors related to the API.
 */

import { useState, useEffect, useRef } from 'react';
import { fetchArticlesByCurrencies } from '../utils/newsService';

/**
 * useArticleCarousel custom hook manages the article carousel.
 * It fetches articles based on the provided currencies, controls automatic sliding, and handles API errors.
 * @param {array} currenciesToShow - List of currencies for which articles should be fetched.
 * @returns {object} - An object containing the articles, current article index, API error status, and functions to start/stop automatic sliding.
 */
export function useArticleCarousel(currenciesToShow) {
    const [currentArticleIndex, setCurrentArticleIndex] = useState(0); // State for the current article index
    const [articles, setArticles] = useState([]); // State for the list of articles
    const [apiError, setApiError] = useState(false); // State for handling API errors
    const intervalRef = useRef(null); // Ref to store the interval ID for automatic sliding

    useEffect(() => {
        /**
         * Fetch articles based on the selected currencies.
         * If no articles are found, set the API error state to true.
         */
        const getArticles = async () => {
            // Simulate an API error for testing (commented out):
            // setApiError(true);
            // return;
            if (currenciesToShow && currenciesToShow.length > 0) {
                const articlesData = await fetchArticlesByCurrencies(currenciesToShow);
                if (articlesData.length === 0) {
                    setApiError(true); // Set error state if no articles are found
                } else {
                    setApiError(false); // Reset error state if articles are fetched successfully
                    setArticles(articlesData); // Update the articles state with fetched data
                }
            }
        };
        getArticles(); // Fetch articles when currenciesToShow changes
    }, [currenciesToShow]);

    /**
     * Start automatic sliding of the article carousel.
     * Advances to the next article every 10 seconds.
     */
    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
        }, 10000); // Change slide every 10 seconds
    };

    /**
     * Stop automatic sliding of the article carousel by clearing the interval.
     */
    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current); // Clear the interval to stop sliding
        }
    };

    useEffect(() => {
        /**
         * Start automatic sliding if there are articles available.
         * Cleanup by stopping the auto-slide when the component is unmounted or articles change.
         */
        if (articles.length > 0) {
            startAutoSlide();
        }
        return () => stopAutoSlide(); // Cleanup on component unmount
    }, [articles.length]);

    // Return the carousel state and control functions to the component using this hook
    return { articles, currentArticleIndex, setCurrentArticleIndex, apiError, startAutoSlide, stopAutoSlide };
}
