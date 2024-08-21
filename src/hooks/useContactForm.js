/**
 * useContactForm.js
 * 
 * This file defines a custom React hook, `useContactForm`, which manages the state and validation for the contact form in the Crypto News application.
 * It handles form input changes, validation, and error handling for required fields.
 */

import { useState } from 'react';

/**
 * useContactForm custom hook manages the form state and validation.
 * @param {object} initialState - The initial state for the form fields.
 * @returns {object} - An object containing the form data, validation errors, change handler, validation function, and a function to set the form data.
 */
export function useContactForm(initialState) {
    const [formData, setFormData] = useState(initialState); // State for form data
    const [errors, setErrors] = useState({}); // State for storing validation errors

    /**
     * Handle input changes in the form.
     * This function updates the formData state when a user types into an input field or interacts with checkboxes.
     * @param {object} e - The event triggered by the input field change.
     */
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value // Handle checkboxes differently from text inputs
        });
    };

    /**
     * Validate the form data to ensure that all required fields are filled and meet the validation criteria.
     * Checks for valid names, email addresses, phone numbers, and required selections.
     * @returns {boolean} - Returns true if the form is valid, otherwise false.
     */
    const validate = () => {
        let validationErrors = {};
        const nameRegex = /^[A-Za-z\s\-]+$/; // Regex to validate names with letters, spaces, and hyphens only

        // Validate first name
        if (!formData.firstName) {
            validationErrors.firstName = 'First Name is required';
        } else if (!nameRegex.test(formData.firstName)) {
            validationErrors.firstName = 'First Name is invalid. Only letters, spaces, and hyphens are allowed.';
        }

        // Validate last name
        if (!formData.lastName) {
            validationErrors.lastName = 'Last Name is required';
        } else if (!nameRegex.test(formData.lastName)) {
            validationErrors.lastName = 'Last Name is invalid. Only letters, spaces, and hyphens are allowed.';
        }

        // Validate email
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Email address is invalid'; // Regex to validate email format
        }

        // Validate phone number
        if (!formData.phone) {
            validationErrors.phone = 'Phone number is required';
        } else if (!/^\d+$/.test(formData.phone)) {
            validationErrors.phone = 'Phone number is invalid. Only digits are allowed.'; // Only digits allowed in phone numbers
        }

        // Validate other required fields
        if (!formData.contactMethod) validationErrors.contactMethod = 'Preferred contact method is required';
        if (!formData.country) validationErrors.country = 'Country is required';
        if (!formData.message) validationErrors.message = 'Message is required';

        // Set validation errors in the state
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0; // Return true if there are no errors
    };

    // Return the form data, validation errors, change handler, validation function, and setFormData function
    return { formData, errors, handleChange, validate, setFormData };
}
