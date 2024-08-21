/**
 * TextInput.jsx
 * 
 * This file defines the TextInput component for the Crypto News application's contact form.
 * The TextInput component provides a single-line input field for text input, supporting dark/light mode and validation for user input.
 */

import React, { useContext } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import StylesObject from '../styles/StylesObject';

/**
 * TextInput component renders a single-line text input.
 * @param {string} label - The label to display for the text input.
 * @param {string} name - The name attribute for the text input.
 * @param {string} value - The current value of the text input.
 * @param {function} onChange - Function to handle the change event when the text input content is modified.
 * @param {string} [error] - Validation error message to display if the input is invalid.
 */
function TextInput({ label, name, value, onChange, error }) {
    const style = StylesObject.contactPage;
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context

    return (
        <div className={style.inputContainerHalf}>
            {/* Label for the text input */}
            <label className={style.label}>{label}:</label>
            {/* Single-line text input */}
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                className={style.input.getInputTheme(darkLightMode)} // Apply dynamic theme based on dark/light mode
            />
            {/* Display validation error message if there's an error */}
            {error && <p className={style.input.errorText}>{error}</p>}
        </div>
    );
}

export default TextInput;
