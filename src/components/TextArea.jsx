/**
 * TextArea.jsx
 * 
 * This file defines the TextArea component for the Crypto News application's contact form.
 * The TextArea component provides a larger text input for users to write messages or longer responses.
 * It supports dark/light mode and validation for user input.
 */

import React, { useContext } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import StylesObject from '../styles/StylesObject';

/**
 * TextArea component renders a multi-line text input.
 * @param {string} label - The label to display for the text area.
 * @param {string} name - The name attribute for the text area.
 * @param {string} value - The current value of the text area.
 * @param {function} onChange - Function to handle the change event when the text area content is modified.
 * @param {string} [error] - Validation error message to display if the input is invalid.
 */
function TextArea({ label, name, value, onChange, error }) {
    const style = StylesObject.contactPage;
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context
    const numberOfRows = "4"; // Define the number of rows for the text area

    return (
        <div className={style.inputContainerFull}>
            {/* Label for the text area */}
            <label className={style.label}>{label}:</label>
            {/* Text area input */}
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className={style.input.getInputTheme(darkLightMode)} // Apply dynamic theme based on dark/light mode
                rows={numberOfRows} // Set the number of visible rows
            />
            {/* Display validation error message if there's an error */}
            {error && <p className={style.input.errorText}>{error}</p>}
        </div>
    );
}

export default TextArea;
