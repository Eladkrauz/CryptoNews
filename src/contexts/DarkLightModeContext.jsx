/**
 * This file defines the DarkLightModeContext and DarkLightModeProvider for the Crypto News application.
 * The DarkLightModeContext provides the current mode (dark or light) and a function to toggle between modes.
 * The DarkLightModeProvider component wraps the application and provides the context value to its children.
 */

import React, { createContext, useState } from 'react';

// Create a context for dark/light mode
export const DarkLightModeContext = createContext();

/**
 * DarkLightModeProvider component provides the dark/light mode context to its children.
 * @param {object} children - The child components to which the context value will be provided.
 */
export const DarkLightModeProvider = ({ children }) => {
    const [darkLightMode, setDarkLightMode] = useState('dark'); // State to manage the current mode

    // Function to toggle between dark and light modes
    const toggleMode = () => {
        setDarkLightMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <DarkLightModeContext.Provider value={{ darkLightMode, toggleMode }}>
            {children}
        </DarkLightModeContext.Provider>
    );
};
