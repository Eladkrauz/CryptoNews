/**
 * This file defines the ContactForm component for the Crypto News application.
 * The ContactForm component provides a form for users to contact the team with their details and messages.
 * It includes validation for the input fields and uses emailjs to send the form data as an email.
 * The component uses the dark/light mode context to apply appropriate styles.
 */

import React, { useContext, useState } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import countries from './Countries';
import emailjs from 'emailjs-com';

/**
 * ContactForm component provides a contact form for users to send messages.
 */
function ContactForm() {
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        contactMethod: '',
        country: '',
        message: ''
    }); // State for the form data
    const [errors, setErrors] = useState({}); // State for form validation errors
    const [emailSent, setEmailSent] = useState(false); // State to track if the email has been sent

    // Handle change in form inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Validate the form inputs
    const validate = () => {
        let errors = {};
        const nameRegex = /^[A-Za-z\s\-]+$/;

        if (!formData.firstName) {
            errors.firstName = 'First Name is required';
        } else if (!nameRegex.test(formData.firstName)) {
            errors.firstName = 'First Name is invalid. Only letters, spaces, and hyphens are allowed.';
        }

        if (!formData.lastName) {
            errors.lastName = 'Last Name is required';
        } else if (!nameRegex.test(formData.lastName)) {
            errors.lastName = 'Last Name is invalid. Only letters, spaces, and hyphens are allowed.';
        }

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }

        if (!formData.phone) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d+$/.test(formData.phone)) {
            errors.phone = 'Phone number is invalid. Only digits are allowed.';
        }

        if (!formData.contactMethod) errors.contactMethod = 'Preferred contact method is required';
        if (!formData.country) errors.country = 'Country is required';
        if (!formData.message) errors.message = 'Message is required';

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const templateParams = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                contactMethod: formData.contactMethod,
                country: formData.country,
                message: formData.message
            };

            emailjs.send('service_skdqwvt', 'template_58scwmi', templateParams, 'aegYV7g2GSP80nATB')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    console.log('Email sent successfully to' + formData.email);
                    setEmailSent(true);
                }, (error) => {
                    console.error('Email sending failed', error);
                });
        }
    };

    return (
        <div className={`flex justify-center ${darkLightMode === 'light' ? 'text-black' : 'text-gray-200'}`}>
            <div className={`contact-us text-center w-3/4 m-4 rounded-lg shadow-lg p-6 mb-8 ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200'
                    }`}>
                {emailSent ? (
                    <div>
                        <h1 className='text-5xl font-bold mb-4'>Thank You!</h1>
                        <p className='text-2xl'>Your request has been sent successfully.</p>
                    </div>
                ) : (
                    <>
                        <div>
                            <h1 className='text-5xl font-bold mb-4'>CONTACT US</h1>
                            <p className='text-2xl'>Let's get this conversation started!</p>
                            <p className='text-2xl'>Tell us a bit about yourself, and we will get in touch as soon as we can.</p>
                            <p className='text-2xl'>Feel free to write about improvements, future features, and any other issue!</p>
                            <hr className={`border-t-2 my-4 ${darkLightMode === 'light' ? 'border-gray-700' : 'border-gray-200'}`} />
                        </div>
                        <form onSubmit={handleSubmit} className='form-layout text-xl justify-between items-center grid grid-cols-12 gap-4 mt-5'>
                            <div className="col-span-12 sm:col-span-6">
                                <label className='font-bold block'>First Name:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`first-name-input mt-1 p-3 w-full border
                                    ${darkLightMode === 'light' ? 'border-gray-300 rounded' : 'border-gray-300 rounded bg-gray-900'}`}
                                />
                                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                            </div>

                            <div className="col-span-12 sm:col-span-6">
                                <label className='font-bold block'>Last Name:</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`last-name-input  mt-1 p-3 w-full border
                                    ${darkLightMode === 'light' ? 'border-gray-300 rounded' : 'border-gray-300 rounded bg-gray-900'}`}
                                />
                                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                            </div>

                            <div className="col-span-12 sm:col-span-6">
                                <label className='font-bold block'>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`email-input  mt-1 p-3 w-full border
                                    ${darkLightMode === 'light' ? 'border-gray-300 rounded' : 'border-gray-300 rounded bg-gray-900'}`}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            <div className="col-span-12 sm:col-span-6">
                                <label className='font-bold block'>Phone:</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`phone-input  mt-1 p-3 w-full border
                                    ${darkLightMode === 'light' ? 'border-gray-300 rounded' : 'border-gray-300 rounded bg-gray-900'}`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>

                            <div className="col-span-12 sm:col-span-6">
                                <label className='font-bold block'>Country:</label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className={`form-select mt-1 p-3 w-full border
                                    ${darkLightMode === 'light' ? 'border-gray-300 rounded' : 'border-gray-300 rounded bg-gray-900'}`}>
                                    <option value="" disabled>Choose...</option>
                                    {countries.map(country => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                                {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                            </div>

                            <div className="col-span-12 sm:col-span-6">
                                <label className='font-bold block'>Preferred Contact Method:</label>
                                <div className="flex mt-2 justify-center space-x-12">
                                    <label className="mr-4"><input type="radio" name="contactMethod" value="email" checked={formData.contactMethod === 'email'} onChange={handleChange} className="mr-1" /> Email</label>
                                    <label className="mr-4"><input type="radio" name="contactMethod" value="phone" checked={formData.contactMethod === 'phone'} onChange={handleChange} className="mr-1" /> Phone</label>
                                    <label className="mr-4"><input type="radio" name="contactMethod" value="both" checked={formData.contactMethod === 'both'} onChange={handleChange} className="mr-1" /> Both</label>
                                </div>
                                {errors.contactMethod && <p className="text-red-500 text-sm">{errors.contactMethod}</p>}
                            </div>

                            <div className="col-span-12">
                                <label className='font-bold block'>Message:</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`message-input resize-none mt-1 p-3 w-full border
                                    ${darkLightMode === 'light' ? 'border-gray-300 rounded' : 'border-gray-300 rounded bg-gray-900'}`}
                                    rows="4"
                                />
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>

                            <div className="col-span-12">
                                <button
                                    type="submit"
                                    className="my-2 p-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black shadow-gray-800 hover:shadow-black shadow-lg font-bold rounded hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500 w-full sm:w-auto 3d-submit-button">Submit</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default ContactForm;
