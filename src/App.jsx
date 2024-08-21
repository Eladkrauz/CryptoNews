/**
 * App.jsx
 * 
 * This file defines the main App component for the Crypto News application.
 * The App component sets up the overall structure of the application, including routing and dynamic title updates based on the current location.
 * It also provides navigation functions for various pages and integrates the dark/light mode context.
 */

import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import ArticleFull from './components/ArticleFull';
import MenuBar from './components/MenuBar';
import FilterBar from './components/FilterBar';
import ArticleContainer from './components/ArticleContainer';
import AboutPage from './components/AboutPage';
import ContactForm from './components/ContactForm';
import './index.css';
import allCurrencies from './components/Currencies';
import { DarkLightModeContext } from './contexts/DarkLightModeContext';

function App() {
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context
    const [title, setTitle] = useState('Crypto - News'); // State for the page title
    const location = useLocation(); // Hook to access the current location
    const navigate = useNavigate(); // Hook to programmatically navigate between routes

    useEffect(() => {
        /**
         * Updates the title based on the current location.
         * For the homepage ("/"), if a currency is selected, the title will show that currency's news.
         * For other pages (about, contact, article), the title defaults to "Crypto - News".
         */
        if (location.pathname === "/") {
            if (location.state?.currency) {
                setTitle(`${location.state.currency} News`);
            } else {
                setTitle("Crypto - News");
            }
        } else if (location.pathname.startsWith("/about")) {
            setTitle("Crypto - News");
        } else if (location.pathname.startsWith("/contact")) {
            setTitle("Crypto - News");
        } else if (location.pathname.startsWith("/article")) {
            setTitle("Crypto - News");
        } else {
            setTitle(location.pathname); // Sets the title to the current route if not one of the predefined routes
        }
    }, [location]);

    /**
     * Navigates to the home page.
     * Used when the user clicks on the "Home" link in the navigation menu.
     */
    const showHomePage = () => {
        navigate("/");
    };

    /**
     * Navigates to the about page.
     * Used when the user clicks on the "About" link in the navigation menu.
     */
    const showAboutPage = () => {
        navigate("/about");
    };

    /**
     * Navigates to the contact page.
     * Used when the user clicks on the "Contact Us" link in the navigation menu.
     */
    const showContactPage = () => {
        navigate("/contact");
    };

    /**
     * Navigates to the full article page.
     * Takes the article data as an argument and passes it via route state.
     * @param {Object} article - The article object to be passed to the full article page.
     */
    const showFullArticle = (article) => {
        navigate("/article", { state: { article } });
    };

    return (
        <div className={`app min-h-screen m-0 w-full overflow-auto ${darkLightMode === 'light'
            ? 'bg-gradient-to-b from-gray-400 via-white to-gray-400' // Light mode gradient background
            : 'bg-gradient-to-b from-gray-700 via-black to-gray-700' // Dark mode gradient background
            }`}>
            {/* MenuBar component for the navigation bar with dynamic title and page navigation handlers */}
            <MenuBar onPageClick={{ showHomePage, showAboutPage, showContactPage }} title={title} />

            {/* FilterBar component for selecting currencies, navigates to the home page with selected currency */}
            <FilterBar onCurrencyClick={(currency) => navigate("/", { state: { currency } })} />

            {/* Routes for various pages like the home page, article page, about page, and contact page */}
            <Routes>
                {/* Home route displaying articles based on selected currency */}
                <Route path="/" element={<ArticleContainer onArticleClick={showFullArticle} currenciesToShow={location.state?.currency || allCurrencies} />} />

                {/* Article route displaying full article content */}
                <Route path="/article" element={<ArticleFull article={location.state?.article} onClose={showHomePage} />} />

                {/* About route displaying the about page */}
                <Route path="/about" element={<AboutPage />} />

                {/* Contact route displaying the contact form */}
                <Route path="/contact" element={<ContactForm />} />
            </Routes>
        </div>
    );
}

export default App;
