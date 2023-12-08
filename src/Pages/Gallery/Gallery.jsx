import React, { useEffect, useState } from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('Photo.json')
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  const handleCategoryClick = (category) => {
    // Check if the clicked category is the same as the currently selected one
    // If yes, reset the category to an empty string
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? '' : category
    );
  };

  const filteredPhotos = photos.filter((photo) =>
    selectedCategory ? photo.title === selectedCategory : true
  );

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap bg-gray-200">
        <button
          type="button"
          onClick={() => handleCategoryClick('contest')}
          className={`... text-black hover:text-white border border-white bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-white dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'contest' && 'focus:bg-green-400 text-white'
          }`}
        >
          CONTEST
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick('cultural')}
          className={`... text-black hover:text-white border border-white bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-black dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'cultural' && 'focus:bg-green-400 text-white'
          }`}
        >
          CULTURAL PROGRAM
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick('cultural')}
          className={`... text-black hover:text-white border border-white bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-black dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'cultural' && 'focus:bg-green-400 text-white'
          }`}
        >
          SPORTS
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick('cultural')}
          className={`... text-black hover:text-white border border-white bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-black dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'cultural' && 'focus:bg-green-400 text-white'
          }`}
        >
          PRIZE GIVING CEREMONY
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick('cultural')}
          className={`... text-black hover:text-white border border-white bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-black dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'cultural' && 'focus:bg-green-400 text-white'
          }`}
        >
          ORIENTATION PROGRAM
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick('cultural')}
          className={`... text-black hover:text-white border border-white bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-black dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'cultural' && 'focus:bg-green-400 text-white'
          }`}
        >
          SESSIONS
        </button>
        <br></br> 
        <button
          type="button"
          onClick={() => handleCategoryClick('cultural')}
          className={`... text-black hover:text-white border border-white bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-black dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'cultural' && 'focus:bg-green-400 text-white'
          }`}
        >
          CODING CLASSES
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-gray-200">
        {filteredPhotos.map((photo) => (
          <div key={photo.id}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={photo.img}
              alt=""
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
