import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import Footer from '../../Components/Footer/Footer';

const Facultyheader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);


  const scrollSpring = useSpring({
    transform: isVisible ? 'translateY(0)' : 'translateY(100px)', // Adjust the translateY value as needed
    from: { transform: 'translateY(100px)' },
    config: { tension: 180, friction: 150 },
  });

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    config: { tension: 180, friction: 140 },
  });

  return (
    <div
      ref={ref}
      className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full bg-white"
    >
      <div className="max-w-xl mx-auto lg:max-w-screen-xl flex flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2">
        <div className="px-4 py-16 mx-auto -mt-36 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h1 className='text-center mb-3 text-blue-500 text-2xl'>NOTICE FROM DEPT.</h1>
      
      <div className="max-w-sm space-y-3 sm:mx-auto lg:max-w-lg bg-white border-2 shadow-xl p-2 rounded-xl">
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          
          <span className="text-blue-500">
          Notice for Course Advising of the Spring 2024
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          
          <span className="text-blue-500">Conflict Examination Schedule of Final, Summer 2023</span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
         
          <span className="text-blue-500">Conflict Final Examination of Summer 2023 for CSE.</span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          
          <span className="text-blue-500">
          Revised Course offering for CSE Spring 2024
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          
          <span className="text-blue-500">
          Publication of rescheduled exam date of EEE ( Batch - 22381)
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          
          <span className="text-blue-500">
          CSE Course Offering Spring 2024 Part-1
          </span>
        </div>
      </div>
    </div>
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <animated.div style={fadeIn}>
            <div className="-mt-14">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Missions
                </p>
              </div>
              <li className='text-black text-lg'><span className='font-semibold'>Learning and Skill Development:</span> Provide opportunities for members to enhance their technical skills through workshops.</li>
              <li className='text-black text-lg'><span className='font-semibold'>Innovation and Creativity:</span> Encourage and support members in developing innovative projects, applications</li>
              <li className='text-black text-lg'><span className='font-semibold'>Networking and Collaboration:</span> Facilitate connections among members to promote collaboration on projects, knowledge sharing</li>
              <li className='text-black text-lg'><span className='font-semibold'>Community Outreach:</span> Engage with the wider community to promote technology literacy and awareness. Organize.</li>
            </div>
            
          </animated.div>
        </div>
      </div>
      
    </div>
  );
};

export default Facultyheader;
