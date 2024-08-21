/**
 * AboutPage.jsx
 * 
 * This file defines the AboutPage component for the Crypto News application.
 * The AboutPage component displays detailed information about the platform, the team, core values, vision, and future development.
 * It also integrates the dark/light mode context and applies appropriate styles based on the current theme.
 */

import React, { useContext } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';
import StylesObject from '../styles/StylesObject';
import data from './AboutPageData';

/**
 * AboutPage component displays detailed information about the Crypto News platform, the team, and future plans.
 */
function AboutPage() {
    const style = StylesObject.aboutPage; // Access the styles object for AboutPage
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context

    return (
        <div className={style.flexDivOuter}>
            <div className={style.aboutDiv}>
                
                {/* Section: About Crypto News */}
                <div className={style.getSectionTheme(darkLightMode)}>
                    {/* Heading for the "About Crypto News" section */}
                    <h2 className={style.heading}>ABOUT CRYPTO NEWS</h2>
                    {/* Paragraph that displays information about Crypto News */}
                    <p className={style.paragraph}>
                        {data.aboutCryptoNews}
                    </p>
                </div>

                {/* Section: About the Team */}
                <div className={style.getSectionTheme(darkLightMode)}>
                    {/* Heading for the "About the Team" section */}
                    <h2 className={style.heading}>ABOUT THE TEAM</h2>
                    {/* Grid displaying team members with their images, names, and descriptions */}
                    <div className={style.teamGrid}>
                        {data.teamMembers.map((member) => (
                            <div key={member.linkedin} className={style.flexDiv}>
                                {/* Link to the team member's LinkedIn profile */}
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    {/* Team member image with dynamic theme applied */}
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className={style.teamMember.getImageTheme(darkLightMode)} 
                                    />
                                </a>
                                {/* Team member name */}
                                <p className={style.teamMember.name}>{member.name}</p>
                                {/* Team member description */}
                                <p className={style.teamMember.description}>{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section: Our Vision */}
                <div className={style.getSectionTheme(darkLightMode)}>
                    {/* Heading for the "Our Vision" section */}
                    <h2 className={style.heading}>OUR VISION</h2>
                    {/* Paragraph that displays the vision of the platform */}
                    <p className={style.paragraph}>
                        {data.ourVision}
                    </p>
                </div>

                {/* Section: Core Values */}
                <div className={style.getSectionTheme(darkLightMode)}>
                    {/* Heading for the "Our Values" section */}
                    <h2 className={style.heading}>OUR VALUES</h2>
                    {/* Grid displaying core values with their titles and descriptions */}
                    <div className={style.coreValuesGrid}>
                        {data.coreValues.map((value, index) => (
                            <div key={data.coreValuesTitles[index]} className={style.flexDiv}>
                                {/* Core value title */}
                                <h2 className={style.coreValue.heading}>{data.coreValuesTitles[index]}</h2>
                                {/* Core value description */}
                                <p className={style.coreValue.description}>
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section: Future Development */}
                <div className={style.getSectionTheme(darkLightMode)}>
                    {/* Heading for the "Future Development" section */}
                    <h2 className={style.heading}>FUTURE DEVELOPMENT</h2>
                    {/* Paragraph that displays information about future plans for the platform */}
                    <p className={style.paragraph}>
                        {data.futureDevelopment}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
