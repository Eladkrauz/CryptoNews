/**
 * SelectInput.jsx
 * 
 * This file defines the SelectInput component for the Crypto News application's contact form.
 * The SelectInput component provides a dropdown selection input for choosing a country, with support for dark/light mode and validation.
 */

import React, { useContext } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import countries from './Countries';
import StylesObject from '../styles/StylesObject';

/**
 * SelectInput component renders a dropdown for selecting a country.
 * @param {string} label - The label to display for the select input.
 * @param {string} name - The name attribute for the select input.
 * @param {string} value - The currently selected value of the dropdown.
 * @param {function} onChange - Function to handle the change event when a new option is selected.
 * @param {string} [error] - Validation error message to display if the input is invalid.
 */
function SelectInput({ label, name, value, onChange, error }) {
    const style = StylesObject.contactPage;
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context

    return (
        <div className={style.inputContainerHalf}>
            {/* Label for the select input */}
            <label className={style.label}>{label}:</label>
            {/* Dropdown select input */}
            <select
                name={name}
                value={value}
                onChange={onChange}
                className={style.input.getInputTheme(darkLightMode)} // Apply dynamic theme based on dark/light mode
            >
                <option value="" disabled>Choose...</option>
                {/* Render each country as an option in the dropdown */}
                {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>
            {/* Display validation error message if there's an error */}
            {error && <p className={style.input.errorText}>{error}</p>}
        </div>
    );
}

export default SelectInput;
