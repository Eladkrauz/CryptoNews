/**
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
        // Update the title based on the current location and state
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
            setTitle(location.pathname);
        }
    }, [location]);

    // Function to navigate to the home page
    const showHomePage = () => {
        navigate("/");
    };

    // Function to navigate to the about page
    const showAboutPage = () => {
        navigate("/about");
    };

    // Function to navigate to the contact page
    const showContactPage = () => {
        navigate("/contact");
    };

    // Function to navigate to the full article page with the article data
    const showFullArticle = (article) => {
        navigate("/article", { state: { article } });
    };

    return (
        <div className={`app min-h-screen m-0 ${darkLightMode === 'light'
            ? 'bg-gradient-to-b from-gray-400 via-white to-gray-400'
            : 'bg-gradient-to-b from-gray-700 via-black to-gray-700'
            }`}>
            <MenuBar onPageClick={{ showHomePage, showAboutPage, showContactPage }} title={title} />
            <FilterBar onCurrencyClick={(currency) => navigate("/", { state: { currency } })} />
            <Routes>
                <Route path="/" element={<ArticleContainer onArticleClick={showFullArticle} currenciesToShow={location.state?.currency || allCurrencies} />} />
                <Route path="/article" element={<ArticleFull article={location.state?.article} onClose={showHomePage} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactForm />} />
            </Routes>
        </div>
    );
}

export default App;
