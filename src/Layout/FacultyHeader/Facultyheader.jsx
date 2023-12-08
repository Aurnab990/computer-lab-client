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
          <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30}>
            <animated.img
              src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/351473537_1788070115013365_4540322838816792822_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=RhPFywCNW5kAX-5kGCN&_nc_ht=scontent.fdac151-1.fna&oh=00_AfD3y-S6NYb3d8M4GF5X8LQX2FieCw8_uW8jRuKXVFqJVg&oe=6574281A"
              className="object-cover w-full h-64 rounded shadow-2xl lg:h-auto lg:max-w-screen-md"
              alt=""
              style={{ ...scrollSpring, ...fadeIn }}
            />
          </Tilt>
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <animated.div style={fadeIn}>
            <div className="-mt-14">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  About Us
                </p>
              </div>
              <li className='text-black text-lg'><span className='font-semibold'>Learning and Skill Development:</span> Provide opportunities for members to enhance their technical skills through workshops, seminars, and hands-on projects</li>
              <li className='text-black text-lg'><span className='font-semibold'>Innovation and Creativity:</span> Encourage and support members in developing innovative projects, applications, and solutions that contribute to the advancement of technology.</li>
              <li className='text-black text-lg'><span className='font-semibold'>Networking and Collaboration:</span> Facilitate connections among members to promote collaboration on projects, knowledge sharing, and the exchange of ideas. Organize networking events, hackathons</li>
              <li className='text-black text-lg'><span className='font-semibold'>Community Outreach:</span> Engage with the wider community to promote technology literacy and awareness. Organize outreach programs, coding camps, and workshops for local schools or community</li>
            </div>
            
          </animated.div>
        </div>
      </div>
      
    </div>
  );
};

export default Facultyheader;
