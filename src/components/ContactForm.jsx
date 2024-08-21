/**
 * ContactForm.jsx
 * 
 * This file defines the ContactForm component for the Crypto News application.
 * The ContactForm component allows users to send messages by filling out a form.
 * It integrates with emailJS for sending emails and utilizes form validation through a custom hook.
 */

import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import emailjs from 'emailjs-com';
import StylesObject from '../styles/StylesObject';
import { useContactForm } from '../hooks/useContactForm';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import RadioInput from './RadioInput';
import TextArea from './TextArea';

/**
 * ContactForm component provides a contact form for users to send messages.
 */
function ContactForm() {
    const style = StylesObject.contactPage;
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context

    const location = useLocation(); // Hook to get the current location
    const initialFormState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        contactMethod: '',
        country: '',
        message: ''
    };
    const [emailSent, setEmailSent] = useState(false); // State to track if the email has been sent

    // Use custom hook for form state and validation
    const { formData, errors, handleChange, validate, setFormData } = useContactForm(initialFormState);

    useEffect(() => {
        /**
         * Reset the email sent status when the user navigates to the contact page.
         */
        if (location.pathname === '/contact') {
            setEmailSent(false);
        }
    }, [location]);

    /**
     * Handle form submission.
     * Validates the form and sends the email using emailJS if validation passes.
     * Resets the form after a successful email submission.
     * @param {Event} e - The form submit event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (validate()) {
            const templateParams = { ...formData }; // Prepare the template parameters for emailJS

            emailjs.send('service_skdqwvt', 'template_58scwmi', templateParams, 'aegYV7g2GSP80nATB')
                .then(() => {
                    setEmailSent(true); // Set email sent status to true on success
                    setFormData(initialFormState); // Reset form fields
                }, (error) => {
                    console.error('Email sending failed', error); // Log an error if the email fails to send
                });
        }
    };

    return (
        <div className={`${StylesObject.general.getOuterWrapper(darkLightMode)}`}>
            <div className={`${style.getContactFormContainer(darkLightMode)}`}>
                {emailSent ? (
                    <div>
                        <div className={style.successContainer}>
                            {/* Success message displayed when email is sent */}
                            <img src={style.getSuccessImage(darkLightMode)} alt='emailSent' className={style.image} />
                        </div>
                        <h1 className={style.successTitle}>Thank You!</h1>
                        <p className={style.successMessage}>Your request has been sent successfully.</p>
                    </div>
                ) : (
                    <>
                        <div>
                            <h1 className={style.headingLarge}>CONTACT US</h1>
                            {/* Contact form description */}
                            <p className={style.paragraph}>Let's get this conversation started!</p>
                            <p className={style.paragraph}>Tell us a bit about yourself, and we will get in touch as soon as we can.</p>
                            <p className={style.paragraph}>Feel free to write about improvements, future features, and any other issue!</p>
                            <hr className={style.getSeperator(darkLightMode)} />
                        </div>
                        {/* Contact form */}
                        <form onSubmit={handleSubmit} className={style.formLayout}>
                            <TextInput
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                error={errors.firstName}
                            />
                            <TextInput
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                error={errors.lastName}
                            />
                            <TextInput
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <TextInput
                                label="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                error={errors.phone}
                            />
                            <SelectInput
                                label="Country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                error={errors.country}
                            />
                            <RadioInput
                                label="Preferred Contact Method"
                                name="contactMethod"
                                value={formData.contactMethod}
                                onChange={handleChange}
                                options={[
                                    { label: 'Email', value: 'email' },
                                    { label: 'Phone', value: 'phone' },
                                    { label: 'Both', value: 'both' }
                                ]}
                                error={errors.contactMethod}
                            />
                            <TextArea
                                label="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                error={errors.message}
                            />
                            <div className={style.inputContainerFull}>
                                {/* Submit button for the form */}
                                <button type="submit" className={style.submitButton}>Submit</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default ContactForm;
