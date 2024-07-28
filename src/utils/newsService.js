/**
 * This file defines functions to fetch and format articles from the GNews API based on selected cryptocurrencies.
 * It uses axios to make HTTP requests and processes the response data to fit the application's requirements.
 */

import axios from 'axios';

const API_KEY = '3b150819d68a67038223904730364328';
const BASE_URL = 'https://gnews.io/api/v4/search';

/**
 * Formats articles received from the GNews API to the required structure.
 * @param {array} articles - Array of articles from the GNews API.
 * @param {string} currency - The currency associated with the articles.
 * @returns {array} - Formatted articles.
 */
const formatArticles = (articles, currency) => {
    return articles.map((article) => ({
        title: article.title,
        summary: article.description,
        text: article.content || article.description,
        image: article.image,
        date: new Date(article.publishedAt).toLocaleDateString(),
        time: new Date(article.publishedAt).toLocaleTimeString(),
        currency: currency,
        source: article.source.name,
        url: article.url
    }));
};

/**
 * Formats the currencies array into a query string for the GNews API.
 * @param {array|string} currencies - Array of currencies or a single currency.
 * @returns {string} - Formatted query string.
 */
const formatCurrencies = (currencies) => {
    const currenciesQuery = currencies instanceof Array ? currencies.join(' OR ') : currencies;
    return `(${currenciesQuery}) AND (crypto OR cryptocurrencies)`;
};

/**
 * Fetches articles from the GNews API based on selected currencies.
 * @param {array} currencies - Array of selected currencies.
 * @returns {array} - Array of formatted articles.
 */
export const fetchArticlesByCurrencies = async (currencies) => {
    if (!currencies || currencies.length === 0) {
        return [];
    }
    const query = formatCurrencies(currencies);
    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                q: query,
                apikey: API_KEY,
                lang: 'en',
                max: 100
            },
        });
        return formatArticles(response.data.articles, currencies);
    } catch (error) {
        console.error(`Error fetching articles:`, error);
        return [];
    }
};
