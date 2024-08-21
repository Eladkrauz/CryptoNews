/**
 * StylesObject.jsx
 * 
 * This file contains the centralized styles and themes for the Crypto News application.
 * Styles are defined as objects and can dynamically adjust based on the current dark or light mode setting.
 * Each section corresponds to different components and layouts used throughout the application.
 */

const StylesObject = {
    general: {
        // General styles used across the app
        outerWrapper: "flex justify-center",
        getOuterWrapper(darkLightMode) {
            return darkLightMode === 'light'
                ? `${this.outerWrapper} text-black`
                : `${this.outerWrapper} text-gray-200`;
        },
        button: "flex items-center bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 text-black text-xl shadow-gray-800 hover:shadow-black shadow-lg font-bold px-4 py-2 rounded mt-4 hover:from-yellow-700 hover:via-yellow-500 hover:to-yellow-700",
    },

    menuBar: {
        // MenuBar component styles
        outerWrapperBase: "flex flex-col items-center p-2 shadow-md w-full",
        outerWrapperTheme(darkLightMode) {
            return darkLightMode === 'light'
            ? `${this.outerWrapperBase} bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black`
            : `${this.outerWrapperBase} bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700`;
        },
        headerWrapper: 'flex justify-between items-center w-full px-4',
        logo: {
            wrapper: 'flex items-center',
            path:"../assets/crypto-news-logo.png",
            style: 'clickable h-20 w-20 lg:w-32 lg:h-32 mr-2',
        },
        titleTextBase: 'text-2xl md:text-3xl lg:text-4xl font-bold font-serif',
        titleTextTheme(darkLightMode) {
            return darkLightMode === 'light'
            ? `${this.titleTextBase} text-black`
            : `${this.titleTextBase} text-white`;
        },

        // Mobile menu styles for MenuBar
        mobileMenu: {
            wrapperBase: "md:hidden w-full",
            wrapperTheme(darkLightMode) {
                return darkLightMode === 'light'
                ? `${this.wrapperBase} bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black`
                : `${this.wrapperBase} bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-white`;
            },
            layout: 'flex flex-col items-center space-y-4',
            item: 'font-bold text-xl hover:text-yellow-700 focus:outline-none',
            modeToggle: {
                style: 'font-bold text-black hover:text-yellow-700 focus:outline-none',
                imageStyle: 'w-6 h-6',
                path: {
                    dark: "../assets/light-mode.png",
                    light: "../assets/dark-mode.png"
                }
            },
            buttonWrapper: 'flex md:hidden',
            buttonStyle: 'text-black font-bold hover:text-yellow-700 focus:outline-none',
            hamburgerIcon: 'h-8 w-8',
        },
        
        // Regular menu styles for MenuBar
        regMenu: {
            wrapper: 'hidden md:flex space-x-8',
            listBase: 'flex space-x-8 md:space-x-4 lg:space-x-8 font-bold',
            listTheme(darkLightMode) {
                return darkLightMode === 'light'
                ? `${this.listBase} text-black`
                : `${this.listBase} text-white`
            },
            item: 'text-xl md:text-2xl lg:texl-3xl font-bold hover:text-yellow-700 focus:outline-none',
            modeToggleWrapper: 'hover:text-yellow-700 focus:outline-none pr-6',
            modeToggleIcon: {
                light: "button-img-dark-mode",
                dark: "button-img-light-mode"
            },
        }
    },

    filterBar: {
        // FilterBar component styles
        outerContainer: "flex flex-col items-center mt-3 shadow-lg shadow-black rounded-2xl m-4",
        outerContainerTheme(darkLightMode) {
            return darkLightMode === 'light'
            ? `${this.outerContainer} bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500`
            : `${this.outerContainer} bg-gradient-to-r from-yellow-600 via-yellow-800 to-yellow-600`
        },
        headerContainer: "flex justify-between items-center h-16 w-full px-4",
        mobileMenuButtonContainer: "flex justify-center w-full items-center lg:hidden",
        mobileMenuButton: "text-black flex justify-between items-center w-full font-bold hover:text-gray-100",
        mobileMenuButtonText: "text-xl",
        mobileMenuButtonTextTheme(darkLightMode) {
            return darkLightMode === 'light' 
            ? `${this.mobileMenuButtonText} text-black`
            : `${this.mobileMenuButtonText} text-white`;
        },
        mobileMenuIcon: "h-8 w-8",

        // Desktop navigation for FilterBar
        navMenuContainer: "hidden lg:flex flex-grow justify-around items-center h-full",
        navListItem: "flex-grow flex justify-center",
        currencyButton: "flex items-center font-bold xl:text-xl",
        currencyButtonTheme(darkLightMode) {
            return darkLightMode === 'light'
            ? `${this.currencyButton} text-black hover:text-gray-100`
            : `${this.currencyButton} text-white hover:text-black`;
        },
        currencyLogo: "h-5 w-5 mr-2",

        // Mobile menu dropdown styles
        mobileMenuDropdown: "lg:hidden flex flex-col w-full",
        mobileMenuDropdownTheme(darkLightMode) {
            return darkLightMode === 'light'
            ? `${this.mobileMenuDropdown} bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500`
            : `${this.mobileMenuDropdown} bg-gradient-to-r from-yellow-600 via-yellow-800 to-yellow-600`
        },

        mobileMenuDropdownItem: "flex justify-center p-2 border-t border-gray-200",
        mobileMenuCurrencyButton: "flex items-center font-bold text-black hover:text-gray-100",
        mobileMenuCurrencyButtonTheme(darkLightMode) {
            return darkLightMode === 'light'
            ? `${this.mobileMenuCurrencyButton} text-black hover:text-gray-100`
            : `${this.mobileMenuCurrencyButton} text-white hover:text-black`;
        },

        mobileMenuCurrencyLogo: "h-5 w-5 mr-2",
    },

    aboutPage: {
        // AboutPage component styles
        flexDiv: "flex flex-col items-center",
        flexDivOuter: "flex flex-col items-center p-4 sm:p-8",
        aboutDiv: "w-full max-w-5xl",

        // Section styling for AboutPage
        section: "rounded-lg shadow-lg p-4 sm:p-6 mb-8 hover:shadow-gray-500",
        getSectionTheme(darkLightMode) {
            return darkLightMode === 'light' 
                ? `${this.section} bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black`
                : `${this.section} bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200`;
        },

        heading: "text-2xl sm:text-4xl font-bold mb-4 text-center",
        paragraph: "text-lg sm:text-2xl text-justify",

        // Team Members section styling
        teamGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
        teamMember: {
            name: "text-xl sm:text-2xl font-bold text-center",
            description: "text-xl sm:text-2xl text-center",
            image: "rounded-full w-32 h-32 mb-4 border-gray-700 border-2 shadow-xl shadow-gray-700",
            getImageTheme(darkLightMode) {
                return darkLightMode === 'light'
                    ? `${this.image} hover:shadow-gray-900`
                    : `${this.image} hover:shadow-gray-400`;
            }
        },

        // Core Values section styling
        coreValuesGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
        coreValue: {
            heading: "text-lg sm:text-2xl font-bold mb-2 text-center",
            description: "text-lg sm:text-2xl text-center"
        }
    },

    contactPage: {
        // ContactForm component styles
        contactFormContainer: "contact-us text-center w-11/12 md:w-11/12 m-4 lg:w-11/12 xl:w-3/4 rounded-lg shadow-lg p-6 mb-8",
        getContactFormContainer(darkLightMode) {
            return darkLightMode === 'light'
                ? `${this.contactFormContainer} bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black`
                : `${this.contactFormContainer} bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200`;
        },

        // Success message styling
        successContainer: "flex justify-center my-6",
        successTitle: "text-5xl font-bold mb-4",
        successMessage: "text-2xl",
        getSuccessImage(darkLightMode) {
            return darkLightMode === 'light'
            ? "../assets/confirm-light-mode.png"
            : "../assets/confirm-dark-mode.png";
        },

        // Input fields layout and styling
        formLayout: "form-layout text-xl justify-between items-center grid grid-cols-12 gap-4 mt-5",
        inputContainerHalf: "col-span-12 md:col-span-6",
        inputContainerFull: "col-span-12",

        label: "font-bold block text-2xl",
        paragraph: "text-2xl lg:text-3xl",
        headingLarge: "text-5xl lg:text-6xl font-bold mb-4",
        getSeperator(darkLightMode) {
            return darkLightMode === 'light'
            ? 'border-t-2 my-4 border-gray-700'
            : 'border-t-2 my-4 border-gray-200';
        },
        image: "w-20 h-20",

        input: {
            base: "mt-1 p-3 w-full border",
            getInputTheme(darkLightMode) {
                return darkLightMode === 'light'
                    ? `${this.base} border-gray-300 rounded hover:bg-gray-100 focus:bg-gray-100`
                    : `${this.base} border-gray-300 rounded bg-gray-900 hover:bg-gray-800 focus:bg-gray-800`;
            },
            errorText: "text-red-500 text-sm"
        },

        radioContainer: "flex mt-2 justify-center space-x-12",
        radioLabel: "mr-4 text-2xl",

        submitButton: "my-2 p-3 text-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black shadow-gray-800 hover:shadow-black shadow-lg font-bold rounded hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500 w-full sm:w-auto md:w-full lg:w-auto"
    },

    articleContainer: {
        // ArticleContainer component styles for error and success messages
        errorContainer: "error-msg text-center w-10/12 md:w-11/12 m-4 lg:w-11/12 xl:w-3/4 rounded-lg shadow-lg p-6 mb-8",
        getErrorContainerTheme(darkLightMode) {
            return darkLightMode === 'light'
            ? `${this.errorContainer} bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-black text-black`
            : `${this.errorContainer} bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-gray-700 text-gray-200`;
        },
        errorDiv: "flex justify-center my-4",
        errorImage: {
            light: "../assets/error-light-mode.png",
            dark: "../assets/error-dark-mode.png",
            size: "w-20 h-20"
        },
        errorParagraph: "mt-10 text-3xl font-bold text-center",
        errorButton: {
            path: "/assets/refresh.png",
            style: "ml-1 h-12 w-12"
        },

        // Success messages for the ArticleContainer
        container: "article-container m-4 p-4 overflow-hidden",
        controlButton: "focus:outline-none",
        centeredDiv: "flex justify-between items-center",

        arrow: {
            left: {
                light: "button-img-left-arrow",
                dark: "button-img-left-arrow-dark-mode"
            },
            right: {
                light: "button-img-right-arrow",
                dark: "button-img-right-arrow-dark-mode"
            }
        },

        summaryContainer: "article-summary-container flex justify-center items-center w-full overflow-hidden",
        summaryWrapper: "article-summary-wrapper flex mb-4",
        summaryItem: "article-summary-item flex justify-center items-center w-full",

        // Carousel dots for the ArticleContainer
        dotsContainer: "dots-container flex justify-center mt-4",
        dot: "inline-block w-2 h-2 mx-1 rounded-full",
        dotTheme: {
            light: {
                selected: "bg-gray-900",
                notSelected: "bg-gray-500"
            },
            dark: {
                selected: "bg-gray-500",
                notSelected: "bg-white"
            }
        }
    },

    articleSummary: {
        // ArticleSummary component styles
        wrapper: "article-summary m-4 flex flex-col items-center justify-center xl:flex-row xl:items-center xl:justify-center 2xl:w-10/12 mx-auto",
        layout: "flex flex-col items-center justify-center xl:flex-row xl:w-full xl:justify-center",

        imageContainer: "w-full flex justify-center xl:w-1/2 p-4",
        imageBase: "w-11/12 sm:w-3/4 md:w-2/3 xl:max-w-md 2xl:max-w-lg border-2 shadow-lg hover:shadow-gray-700",
        getImageTheme(darkLightMode) { 
            return darkLightMode === 'light'
            ? `${this.imageBase} border-black shadow-black`
            : `${this.imageBase} border-white shadow-gray-500`;
        },

        textSection: "mt-4 xl:mt-0 xl:ml-6 2xl:ml-8 w-11/12 lg:w-5/6 xl:w-1/2 text-center xl:text-left",
        getTextSectionTheme(darkLightMode) {
            return darkLightMode === 'light'
            ? `${this.textSection} text-black`
            : `${this.textSection} text-white`;
        },

        h1base: "font-bold text-center w-5/6 text-2xl lg:text-4xl mt-2 mb-4 border-2 p-2 xl:p-3 2xl:p-4 hover:shadow-gray-700",
        h1Wrapper(darkLightMode) {
            return darkLightMode === 'light'
            ? `${this.h1base} text-black shadow-black shadow-xl border-black`
            : `${this.h1base} text-white shadow-gray-500 shadow-lg border-white`;
        },

        h3base: "text-center text-lg lg:text-2xl xl:text-xl 2xl:text-2xl my-4",
        h3Wrapper(darkLightMode) {
            return darkLightMode === 'light'
            ? `${this.h3base} text-gray-500`
            : `${this.h3base} text-gray-400`;
        },

        paragraphBase: "text-lg lg:text-2xl xl:text-xl 2xl:text-2xl text-justify lg:w-11/12",
        paragraphWrapper(darkLightMode) {
            return darkLightMode === 'light'
            ? `${this.paragraphBase} text-gray-800`
            : `${this.paragraphBase} text-gray-200`

        },

        button: {
            wrapper: "flex justify-center xl:justify-start",
            path: "/assets/click-mouse.png",
            style: "ml-1 h-6 w-6"
        }
    },

    fullArticle: {
        // FullArticle component styles
        outerWrapper: "p-4 sm:p-8",
        articleGrid: "article-full grid grid-cols-1 xl:grid-cols-12",
        spacingColumn: "col-span-1 xl:col-span-1",
        textSectionGrid: "mt-2 p-4 grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-8",

        image: {
            column: "col-span-1 xl:col-span-4 order-1 xl:order-none",
            wrapper: "flex justify-center xl:flex-none xl:justify-start",
            base: "w-2/3 lg:w-1/2 xl:w-full border-2 shadow-lg",
            imageTheme(darkLightMode) {
                return darkLightMode === 'light'
                ? `${this.base} border-black shadow-black`
                : `${this.base} border-white shadow-gray-500`;
            }
        },

        textColumn: "col-span-1 xl:col-span-5 order-2 xl:order-none",
        articleTextColumn: "col-span-1 xl:col-span-10",
        textBase: "text-xl lg:text-2xl text-justify",
        getTextTheme(darkLightMode) {
            return darkLightMode === 'light'
            ? `${this.textBase} text-black`
            : `${this.textBase} text-white`;
        },

        titleWrapper: "flex justify-center mt-4",
        h1: {
            h1base: "text-center w-10/12 xl:w-full text-4xl lg:text-5xl xl:text-6xl mt-2 font-bold",
            h1wrapper(darkLightMode) {
                return darkLightMode === 'light'
                ? `${this.h1base} text-black`
                : `${this.h1base} text-white`;
            }
        },

        h3: {
            h3base: "text-center text-xl lg:text-2xl mt-4 text-gray-800",
            h3wrapper(darkLightMode) {
                return darkLightMode === 'light'
                ? `${this.h3base} text-gray-600`
                : `${this.h3base} text-white`;
            }
        },

        paragraph: {
            paragraphBase: "text-justify w-10/12 xl:w-full text-xl lg:text-2xl mt-4",
            paragraphWrapper(darkLightMode) {
                return darkLightMode === 'light'
                ? `${this.paragraphBase} text-black`
                : `${this.paragraphBase} text-white`;
            }
        },

        button: {
            container: "flex flex-col xl:flex-row justify-center mt-4",
            style: "flex justify-center items-center text-xl md:text-2xl w-3/4 sm:w-1/2 xl:w-11/12 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 text-black shadow-gray-800 hover:shadow-black shadow-lg font-bold p-4 rounded mt-4 hover:from-yellow-700 hover:via-yellow-500 hover:to-yellow-700",
            arrowPath: "/assets/left-arrow.png",
            externalPath: "/assets/goToExternalPage.png",
            imageStyle: "mr-1 h-6 w-6"

        }

    }
};

export default StylesObject;
