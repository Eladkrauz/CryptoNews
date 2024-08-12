/**
  * This file defines the AboutPage component for the Crypto News application.
 * The AboutPage component provides information about the platform, the team, vision, core values, and future development plans.
 * It utilizes the dark/light mode context to style the page accordingly.
 */

import React, { useContext } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';

// Array containing team member information including name, image, and description
const teamMembers = [
    { name: 'Elad Krauz', image: '/assets/EladKrauz.JPEG', description: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in/elad-krauz/' },
    { name: 'Lee Potashnik', image: '/assets/LeePotashnik.jpg', description: 'Project Manager', linkedin: 'https://www.linkedin.com/in/lee-potashnik-19bb86267/' },
    { name: 'Uri Ziv', image: '/assets/UriZiv.jpg', description: 'Verification Manager', linkedin: 'https://www.linkedin.com/in/uri-ziv-88052726a/' },
    { name: 'Tal Turgeman', image: '/assets/TalTurgeman.jpg', description: 'UI and Tailwind Developer', linkedin: 'https://www.linkedin.com/in/tal-turjeman-44983a309/' },
    { name: 'Ofir Berkovitch', image: '/assets/OfirBerkovitch.jpg', description: 'Content Manager', linkedin: 'https://www.linkedin.com/in/ofir-berkovitsh-78b804252/' }
];

// Text content for various sections of the About page
const aboutCryptoNews = "Crypto News is a comprehensive platform providing up-to-date news and information about the cryptocurrency market. Our mission is to keep you informed with the latest trends, updates, and insights in the world of digital currencies. We cover a wide range of topics including market analysis, price predictions, regulatory developments, and blockchain technology advancements. Whether you are a seasoned trader or a curious newcomer, Crypto News is your go-to source for reliable and timely crypto information. Our dedicated team of experts works around the clock to ensure you never miss an important update. Stay ahead of the curve with Crypto News, where knowledge meets the future of finance.";

const ourVision = "At Crypto News, our vision is to become the leading source of cryptocurrency news and analysis, empowering individuals and businesses to make informed decisions in the ever-evolving digital currency landscape. Our mission is to deliver accurate, timely, and insightful information that fosters understanding and drives innovation in the world of cryptocurrencies.";

const coreValues = {
    integrity: "We are committed to providing truthful and unbiased information",
    excellence: "We strive for excellence in everything we do",
    innovation: "We embrace innovation to stay ahead of industry trends",
    community: "We value our community and encourage collaboration and knowledge sharing"
};

const futureDevelopment = "We are continuously working to enhance the user experience on our platform. Future features include personalized news feeds, advanced market analytics tools, and an interactive community forum where users can share insights and strategies. Stay tuned for more updates as we strive to provide the best crypto news experience.";

/**
 * AboutPage component displays detailed information about the Crypto News platform, the team, and future plans.
 */
const AboutPage = () => {
    const { darkLightMode } = useContext(DarkLightModeContext); // Access the dark/light mode context

    return (
        <div className="flex flex-col items-center p-4 sm:p-8">
            <div className="w-full max-w-5xl">
                {/* Section: About Crypto News */}
                <div className={`rounded-lg shadow-lg p-4 sm:p-6 mb-8 hover:shadow-gray-500 ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200'
                    }`}>
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">ABOUT CRYPTO NEWS</h2>
                    <p className="text-lg sm:text-2xl text-justify">
                        {aboutCryptoNews}
                    </p>
                </div>

                {/* Section: About the Team */}
                <div className={`rounded-lg shadow-lg p-4 sm:p-6 mb-8 hover:shadow-gray-500 ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200'
                    }`}>
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">ABOUT THE TEAM</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className={`rounded-full w-32 h-32 mb-4 border-gray-700 border-2 shadow-xl shadow-gray-700 ${darkLightMode === 'light' ? 'hover:shadow-gray-900' : 'hover:shadow-gray-400' }`} 
                                    />
                                </a>
                                <p className="text-xl sm:text-2xl font-bold text-center">{member.name}</p>
                                <p className="text-xl sm:text-2xl text-center">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section: Our Vision */}
                <div className={`rounded-lg shadow-lg p-4 sm:p-6 mb-8 hover:shadow-gray-500 ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200'
                    }`}>
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">OUR VISION</h2>
                    <p className="text-lg sm:text-2xl text-justify">
                        {ourVision}
                    </p>
                </div>

                {/* Section: Core Values */}
                <div className={`rounded-lg shadow-lg p-4 sm:p-6 mb-8 hover:shadow-gray-500 ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200'
                    }`}>
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">OUR VALUES</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="flex flex-col items-center">
                            <h2 className="text-lg sm:text-2xl font-bold mb-2 text-center">Integrity</h2>
                            <p className="text-lg sm:text-2xl text-center">
                                {coreValues.integrity}
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-lg sm:text-2xl font-bold mb-2 text-center">Innovation</h2>
                            <p className="text-lg sm:text-2xl text-center">
                                {coreValues.innovation}
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-lg sm:text-2xl font-bold mb-2 text-center">Excellence</h2>
                            <p className="text-lg sm:text-2xl text-center">
                                {coreValues.excellence}
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-lg sm:text-2xl font-bold mb-2 text-center">Community</h2>
                            <p className="text-lg sm:text-2xl text-center">
                                {coreValues.community}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section: Future Development */}
                <div className={`rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-gray-500 ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200'
                    }`}>
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">FUTURE DEVELOPMENT</h2>
                    <p className="text-lg sm:text-2xl text-justify">
                        {futureDevelopment}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;