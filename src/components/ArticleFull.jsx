import React, { useContext } from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';

function ArticleFull({ article, onClose, cameFrom }) {
    const { darkLightMode } = useContext(DarkLightModeContext);

    const handleClick = () => {
        window.open(article.url, '_blank');
    };

    return (
        <div className="p-4 sm:p-8">
            <div className="article-full grid grid-cols-1 xl:grid-cols-12">
                <div className="col-span-1 xl:col-span-1"></div>
                <div className="col-span-1 xl:col-span-4 order-1 xl:order-none">
                    <div className="flex justify-center xl:flex-none xl:justify-start">
                        <img
                            className={`w-2/3 lg:w-1/2 xl:w-full border-2 shadow-lg ${darkLightMode === 'light' ? 'border-black shadow-black' : 'border-white shadow-gray-500'}`}
                            src={article.image}
                            alt={article.title}>
                        </img>
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-1"></div>
                <div className="col-span-1 xl:col-span-5 order-2 xl:order-none">
                    <div className="flex justify-center mt-4">
                        <h1 className={`text-center w-10/12 xl:w-full text-4xl lg:text-5xl xl:text-6xl mt-2 font-bold ${darkLightMode === 'light' ? 'text-black' : 'text-white'}`}>{article.title}</h1>
                    </div>
                    <h1 className={`text-center text-xl lg:text-2xl mt-4 text-gray-800 ${darkLightMode === 'light' ? 'text-gray-600' : 'text-white'}`}>{article.source} • {article.date} • {article.time}</h1>
                    <div className="flex justify-center">
                        <h1 className={`text-justify w-10/12 xl:w-full text-xl lg:text-2xl mt-4 ${darkLightMode === 'light' ? 'text-black' : 'text-white'}`}>{article.summary}</h1>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-center mt-4">
                        <div className="flex justify-center">
                            <button
                                className="flex justify-center items-center text-xl md:text-2xl w-3/4 sm:w-1/2 xl:w-11/12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black shadow-gray-800 hover:shadow-black shadow-lg font-bold p-4 rounded mt-4 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500"
                                onClick={onClose}
                            >
                                <img src="/assets/left-arrow.png" className="mr-1 h-6 w-6" />
                                Back to All Articles
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="flex justify-center items-center text-xl md:text-2xl w-3/4 sm:w-1/2 xl:w-11/12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black shadow-gray-800 hover:shadow-black shadow-lg font-bold p-4 rounded mt-4 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500"
                                onClick={handleClick}
                            >
                                Original Article
                                <img src="/assets/goToExternalPage.png" className="ml-1 h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-1"></div>
            </div>

            <div className="mt-2 p-4 grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-8">
                <div className="col-span-1 xl:col-span-1"></div>
                <div className="col-span-1 xl:col-span-10">
                    <p className={`text-xl lg:text-2xl text-justify ${darkLightMode === 'light' ? 'text-black' : 'text-white'}`}>{article.text}</p>
                </div>
                <div className="col-span-1 xl:col-span-1"></div>
            </div>
        </div>
    );
}

export default ArticleFull;
