/**
 * RadioInput.jsx
 * 
 * This file defines the RadioInput component for the Crypto News application's contact form.
 * The RadioInput component renders a group of radio buttons allowing the user to select one option.
 * It also includes validation error handling if the selection is invalid.
 */

import React from 'react';
import StylesObject from '../styles/StylesObject';

/**
 * RadioInput component provides a group of radio buttons for user input.
 * @param {string} label - The label to display for the radio button group.
 * @param {string} name - The name attribute for the radio buttons.
 * @param {string} value - The currently selected value.
 * @param {function} onChange - Function to handle the change event when a radio button is selected.
 * @param {array} options - Array of option objects, each containing a label and value for the radio buttons.
 * @param {string} [error] - Validation error message to display if the input is invalid.
 */
function RadioInput({ label, name, value, onChange, options, error }) {
    const style = StylesObject.contactPage;

    return (
        <div className={style.inputContainerHalf}>
            {/* Label for the group of radio buttons */}
            <label className={style.label}>{label}:</label>
            <div className={style.radioContainer}>
                {/* Render each radio button based on the options array */}
                {options.map(option => (
                    <label key={option.value} className={style.radioLabel}>
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value} // Check if this option is the selected one
                            onChange={onChange} // Handle change when a radio button is selected
                            className="mr-1"
                        />
                        {option.label}
                    </label>
                ))}
            </div>
            {/* Display validation error message if there's an error */}
            {error && <p className={style.input.errorText}>{error}</p>}
        </div>
    );
}

export default RadioInput;
