/**
 * newsService.js
 * 
 * This file defines functions to fetch and format articles from the GNews API based on selected cryptocurrencies.
 * It uses axios to make HTTP requests and processes the response data to fit the application's requirements.
 */

import axios from 'axios';

// API key for GNews API and the base URL for fetching news articles
const API_KEY = '3b150819d68a67038223904730364328';
const BASE_URL = 'https://gnews.io/api/v4/search';

/**
 * Formats articles received from the GNews API to the required structure.
 * @param {array} articles - Array of articles from the GNews API.
 * @param {string} currency - The currency associated with the articles.
 * @returns {array} - Formatted articles with fields like title, summary, date, time, and source.
 */
const formatArticles = (articles, currency) => {
    return articles.map((article) => ({
        title: article.title, // The article's title
        summary: article.description, // Short summary/description of the article
        text: article.content || article.description, // Full text or fallback to description if content is unavailable
        image: article.image, // Image associated with the article
        date: new Date(article.publishedAt).toLocaleDateString(), // Formatted publication date
        time: new Date(article.publishedAt).toLocaleTimeString(), // Formatted publication time
        currency: currency, // Associated cryptocurrency
        source: article.source.name, // Source name
        url: article.url // URL of the article
    }));
};

/**
 * Formats the currencies array into a query string for the GNews API.
 * @param {array|string} currencies - Array of currencies or a single currency.
 * @returns {string} - Formatted query string to search for articles related to cryptocurrencies.
 */
const formatCurrencies = (currencies) => {
    const currenciesQuery = currencies instanceof Array ? currencies.join(' OR ') : currencies; // Join currencies with "OR"
    return `(${currenciesQuery}) AND (crypto OR cryptocurrencies)`; // Query string to find articles on crypto-related terms
};

/**
 * Fetches articles from the GNews API based on selected currencies.
 * @param {array} currencies - Array of selected currencies.
 * @returns {array} - Array of formatted articles after fetching from the GNews API.
 */
export const fetchArticlesByCurrencies = async (currencies) => {
    if (!currencies || currencies.length === 0) {
        return []; // Return an empty array if no currencies are selected
    }
    const query = formatCurrencies(currencies); // Format the currencies into a query string
    try {
        // Make a GET request to fetch articles from GNews API
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                q: query, // The search query based on currencies
                apikey: API_KEY, // API key for authentication
                lang: 'en', // Language for the articles
                max: 10 // Maximum number of articles to fetch
            },
        });
        return formatArticles(response.data.articles, currencies); // Format the fetched articles
    } catch (error) {
        console.error(`Error fetching articles:`, error); // Log any errors encountered
        return []; // Return an empty array in case of error
    }
};
