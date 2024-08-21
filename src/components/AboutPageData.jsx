/**
 * AboutPageData.jsx
 * 
 * This file contains the data used in the AboutPage component of the Crypto News application.
 * The data includes information about the team members, core values, a description of the platform, vision, and future development plans.
 */

const AboutPageData = {
    /**
     * Array of team members with their details: name, image, description, and LinkedIn profile link.
     * Each member object includes:
     * - name: The full name of the team member.
     * - image: Path to the team member's image.
     * - description: The role or job title of the team member.
     * - linkedin: The LinkedIn profile URL for the team member.
     */
    teamMembers: [
        { name: 'Elad Krauz', image: '/assets/EladKrauz.JPEG', description: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in/elad-krauz/' },
        { name: 'Lee Potashnik', image: '/assets/LeePotashnik.jpg', description: 'Project Manager', linkedin: 'https://www.linkedin.com/in/lee-potashnik-19bb86267/' },
        { name: 'Uri Ziv', image: '/assets/UriZiv.jpg', description: 'Verification Manager', linkedin: 'https://www.linkedin.com/in/uri-ziv-88052726a/' },
        { name: 'Tal Turgeman', image: '/assets/TalTurgeman.jpg', description: 'UI and Tailwind Developer', linkedin: 'https://www.linkedin.com/in/tal-turjeman-44983a309/' },
        { name: 'Ofir Berkovitch', image: '/assets/OfirBerkovitch.jpg', description: 'Content Manager', linkedin: 'https://www.linkedin.com/in/ofir-berkovitsh-78b804252/' }
    ],

    /**
     * Array of titles for the core values of the platform.
     * These are used as headings for each core value in the AboutPage component.
     */
    coreValuesTitles: [
        "Integrity",
        "Excellence",
        "Innovation",
        "Community"
    ],

    /**
     * Array of descriptions for the core values of the platform.
     * Each description provides a brief explanation of the respective core value from coreValuesTitles.
     */
    coreValues: [
        "We are committed to providing truthful and unbiased information",
        "We strive for excellence in everything we do",
        "We embrace innovation to stay ahead of industry trends",
        "We value our community and encourage collaboration and knowledge sharing"
    ],

    /**
     * Detailed description about the Crypto News platform.
     * This section outlines the mission, goals, and scope of the platform, giving users a comprehensive understanding of the services offered.
     */
    aboutCryptoNews: "Crypto News is a comprehensive platform providing up-to-date news and information about the cryptocurrency market. Our mission is to keep you informed with the latest trends, updates, and insights in the world of digital currencies. We cover a wide range of topics including market analysis, price predictions, regulatory developments, and blockchain technology advancements. Whether you are a seasoned trader or a curious newcomer, Crypto News is your go-to source for reliable and timely crypto information. Our dedicated team of experts works around the clock to ensure you never miss an important update. Stay ahead of the curve with Crypto News, where knowledge meets the future of finance.",

    /**
     * Vision statement for Crypto News, outlining the long-term goals and aspirations of the platform.
     * This describes the platform's aim to become a leading source of cryptocurrency news and analysis.
     */
    ourVision: "At Crypto News, our vision is to become the leading source of cryptocurrency news and analysis, empowering individuals and businesses to make informed decisions in the ever-evolving digital currency landscape. Our mission is to deliver accurate, timely, and insightful information that fosters understanding and drives innovation in the world of cryptocurrencies.",

    /**
     * Description of future development plans for the Crypto News platform.
     * This section informs users about upcoming features and improvements to enhance the user experience.
     */
    futureDevelopment: "We are continuously working to enhance the user experience on our platform. Future features include personalized news feeds, advanced market analytics tools, and an interactive community forum where users can share insights and strategies. Stay tuned for more updates as we strive to provide the best crypto news experience."
}

export default AboutPageData;
