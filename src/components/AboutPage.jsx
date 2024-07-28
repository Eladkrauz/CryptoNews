/**
  * This file defines the AboutPage component for the Crypto News application.
 * The AboutPage component provides information about the platform, the team, vision, core values, and future development plans.
 * It utilizes the dark/light mode context to style the page accordingly.
 */

import React, { useContext } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';

// Array containing team member information including name, image, and description
const teamMembers = [
    { name: 'Elad Krauz', image: '/assets/EladKrauz.JPEG', description: 'Frontend Developer' },
    { name: 'Lee Potashnik', image: '/assets/LeePotashnik.jpg', description: 'Project Manager' },
    { name: 'Uri Ziv', image: '/assets/UriZiv.jpg', description: 'Backend Developer' },
    { name: 'Tal Turgeman', image: '/assets/TalTurgeman.jpg', description: 'UI and Tailwind Developer' },
    { name: 'Ofir Berkovitch', image: '/assets/OfirBerkovitch.jpg', description: 'Content Manager' }
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
                <div className={`rounded-lg shadow-lg p-4 sm:p-6 mb-8 ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200'
                    }`}>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">ABOUT CRYPTO NEWS</h2>
                    <p className="text-base sm:text-lg text-justify">
                        {aboutCryptoNews}
                    </p>
                </div>

                {/* Section: About the Team */}
                <div className={`rounded-lg shadow-lg p-4 sm:p-6 mb-8 ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200'
                    }`}>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">ABOUT THE TEAM</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={member.image} alt={member.name} className="rounded-full w-24 h-24 sm:w-32 sm:h-32 mb-4 border-gray-700 border-2 shadow-xl shadow-gray-700" />
                                <p className="text-base sm:text-lg font-bold">{member.name}</p>
                                <p className="text-base sm:text-lg">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section: Our Vision */}
                <div className={`rounded-lg shadow-lg p-4 sm:p-6 mb-8 ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200'
                    }`}>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">OUR VISION</h2>
                    <p className="text-base sm:text-lg text-justify">
                        {ourVision}
                    </p>
                </div>

                {/* Section: Core Values */}
                <div className={`rounded-lg shadow-lg p-4 sm:p-6 mb-8 ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200'
                    }`}>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">OUR VALUES</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="flex flex-col items-center">
                            <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">Integrity</h2>
                            <p className="text-base sm:text-lg text-center">
                                {coreValues.integrity}
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">Innovation</h2>
                            <p className="text-base sm:text-lg text-center">
                                {coreValues.innovation}
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">Excellence</h2>
                            <p className="text-base sm:text-lg text-center">
                                {coreValues.excellence}
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">Community</h2>
                            <p className="text-base sm:text-lg text-center">
                                {coreValues.community}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section: Future Development */}
                <div className={`rounded-lg shadow-lg p-4 sm:p-6 ${darkLightMode === 'light'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black'
                    : 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200'
                    }`}>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">FUTURE DEVELOPMENT</h2>
                    <p className="text-base sm:text-lg text-justify">
                        {futureDevelopment}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;