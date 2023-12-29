import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "https://www.easternuni.edu.bd/assets/slider/Pc/crest_giving_ceremony_7th_convocation.webp",
      text: "Slide 1 Text"
    },
    {
      image: "https://www.easternuni.edu.bd/assets/slider/Pc/physics_olympiad_2023_EEE.webp",
      text: "Slide 2 Text"
    },
    {
      image: "https://www.easternuni.edu.bd/assets/slider/Pc/FacultyOfBusinessSliderImage-6.JPG",
      text: "Slide 3 Text"
    },
    {
      image: "https://www.easternuni.edu.bd/assets/slider/Pc/FacultyOfBusinessSliderImage-1.JPG",
      text: "Slide 4 Text"
    },
    {
      image: "https://www.easternuni.edu.bd/assets/slider/Pc/FacultyOfBusinessSliderImage-3.JPG",
      text: "Slide 5 Text fjfkf fgkfgk gkfgjj"
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
    <div className="">
      <div className="carousel w-full h-2/3" style={{ overflow: 'hidden' }}>
        <div
          className="carousel-item-container"
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
              style={{ flex: '0 0 100%' }}
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full" />
              <div className="carousel-text">
                <p className='mt-44 text-black'>{slide.text}</p>
                <p>Newwwwwwwww</p>
                <p>Newwwwwwwww</p>
                <p>Newwwwwwwww</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
