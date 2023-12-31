import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "https://www.easternuni.edu.bd/assets/slider/Pc/crest_giving_ceremony_7th_convocation.webp",
    },
    {
      image: "https://www.easternuni.edu.bd/assets/slider/Pc/physics_olympiad_2023_EEE.webp",
    },
    {
      image: "https://www.easternuni.edu.bd/assets/slider/Pc/FacultyOfBusinessSliderImage-6.JPG",
    },
    {
      image: "https://www.easternuni.edu.bd/assets/slider/Pc/FacultyOfBusinessSliderImage-1.JPG",
    },
    {
      image: "https://www.easternuni.edu.bd/assets/slider/Pc/FacultyOfBusinessSliderImage-3.JPG",
    }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Run effect only once on mount

  const translateValue = -currentIndex * 100 + '%';

  return (
    <div className="relative">
      <div className="carousel w-full h-2/3 relative" style={{ overflow: 'hidden' }}>
        <div
          className="carousel-item-container relative"
          style={{
            display: 'flex',
            width: `${slides.length * 100}%`,
            transform: `translateX(${translateValue})`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="carousel-item relative w-full"
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full" />
            </div>
          ))}
        </div>
        {/* Single Fixed Text Container */}
        <div className="absolute top-0 bg-black bg-opacity-40 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white">
          <h1 className='text-5xl  text-white'>
            Welcome To <span className='text-blue-500'>E</span><span className='text-orange-600'>U</span> CSE Family
          </h1>
          <p className='text-center p-2 ml-64 mr-64 items-center justify-center'>We welcome you on behalf of the Department of Computer Science and Engineering (CSE) at Eastern University. Our department makes every effort to improve the educational quality according to the needs of today's students and employers.</p> 
          <button className='border-2 hover:bg-white p-3 rounded-xl hover:text-black'>Learn More...</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
