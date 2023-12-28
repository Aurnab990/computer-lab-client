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
    <div className='bg-white'>
            <Navbar></Navbar>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      
      
        <div>
        
      <div className="flex items-center justify-center py-4 md:py-8  flex-wrap bg-white">
        <button
          type="button"
          onClick={() => handleCategoryClick('contest')}
          className={`... text-black hover:text-white border-2 border-gray-200 bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-black font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-white dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'contest' && 'focus:bg-green-400 text-white'
          }`}
        >
          CONTEST
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick('cultural')}
          className={`... text-black hover:text-white border-2 border-gray-200 bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-black font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-black dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'cultural' && 'focus:bg-green-400 text-white'
          }`}
        >
          CULTURAL PROGRAM
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick('sport')}
          className={`... text-black hover:text-white border border-gray-200 bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-black font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-black dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'sport' && 'focus:bg-green-400 text-white'
          }`}
        >
          SPORTS
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick('prize')}
          className={`... text-black hover:text-white border-2 border-gray-200 bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-black font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-black dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'prize' && 'focus:bg-green-400 text-white'
          }`}
        >
          PRIZE GIVING CEREMONY
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick('orientation')}
          className={`... text-black hover:text-white border-2 border-gray-200 bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-black font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-black dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'orientation' && 'focus:bg-green-400 text-white'
          }`}
        >
          ORIENTATION PROGRAM
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick('session')}
          className={`... text-black hover:text-white border-2 border-gray-200 bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-black dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'session' && 'focus:bg-green-400 text-white'
          }`}
        >
          SESSIONS
        </button>
        <br></br> 
        <button
          type="button"
          onClick={() => handleCategoryClick('classes')}
          className={`... text-black hover:text-white border-2 border-gray-200 bg-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:hover:text-black dark:hover:bg-green-500 dark:bg-gray-900 dark:focus:ring-green-800 ${
            selectedCategory === 'classes' && 'focus:bg-green-400 text-white'
          }`}
        >
          CODING CLASSES
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white">
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
      


      </div>
    </div>
    <Footer></Footer>
        </div>
  );
};

export default Gallery;
