import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Layout/Navbar/Navbar';

const Facilities = () => {
    const [activeContent, setActiveContent] = useState('transport');
    const handleItemClick = (contentId) => {
        setActiveContent(contentId);
      };
    return (
        <div className='bg-white'>
            <Navbar></Navbar>

            <div className="px-4 py-16 -mt-5 lg:-mt-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <ul className='flex gap-10 justify-center bg-blue-300 text-2xl text-white mt-20 p-2'>
        <li className='  '>
          <a href='#education' onClick={() => handleItemClick('transport')}>
            Transport Facilities
          </a>
        </li>
        <li>
          <a href='#research' onClick={() => handleItemClick('hostel')}>
            Hostel Facilities
          </a>
        </li>
        <li>
          <a href='#teaching' onClick={() => handleItemClick('club')}>
            Club & Extra carriculam
          </a>
        </li>
        <li>
          <a href='#administrative' onClick={() => handleItemClick('lab')}>
            Modern Lab Facilities
          </a>
        </li>
      </ul>

      <div className='flex justify-center border-2 '>
      <div id='education' style={{ display: activeContent === 'transport' ? 'block' : 'none' }}>
        <li className='text-black text-xl mt-3'>Transport facility is available for both staff and students of Eastern University.</li>
        <img src='https://www.easternuni.edu.bd/assets/admission/TransportFacilitiesInfoAboutRoute.webp'></img>
      </div>

      <div id='education' style={{ display: activeContent === 'hostel' ? 'block' : 'none' }}>
        <li className='text-black text-xl mt-3'>The University has arrangement of a female hostel located nearby the campus. Similar hostel accommodation is available for male students also. Full fledged and comfortable hostel facilities will be available for all students in the University campus under construction in Ashulia.</li>
        <img className='w-full' src='https://www.easternuni.edu.bd/assets/Campus/hostel_2.webp'></img>
      </div>

      <div id='education' style={{ display: activeContent === 'club' ? 'block' : 'none' }}>
        <li className='text-black text-xl mt-3'>This is club</li>
      </div>

      <div id='education' style={{ display: activeContent === 'lab' ? 'block' : 'none' }}>
        <li className='text-blue-500 font-semibold text-xl mt-3'>Importance of Labs in the Faculty of Engineering and Technology at Eastern University (EU) </li>
        <p className='text-black'>The Laboratories of the Faculty of Engineering and Technology at Eastern University (EU) are designed with modern equipment and instruments to foster distinction in teaching, learning and research. EU laboratories play a central role in supporting faculty members and students to develop practical experiences for higher education or for careers in the industry. The university is committed to developing and maintaining a state-of-the-art lab. EU has created one of the best lab facilities in the country for undergraduate students of Computer Science and Engineering (CSE) and Electrical & Electronic Engineering (EEE). All the laboratories of the EU are well spacious and comply with safety where good laboratory practice is strictly maintained. The laboratory information of the Faculty of Engineering and Technology shared by two departments-CSE and EEE, is described in the following section.</p>
        <li className='text-blue-500 font-semibold text-xl mt-3'>Software Engineering Lab</li>
        <li className='text-blue-500 font-semibold text-xl mt-3'>Operating System Lab</li>
        <li className='text-blue-500 font-semibold text-xl mt-3'>Database Management System Lab</li>
        <li className='text-blue-500 font-semibold text-xl mt-3'>Computer Network Lab</li>
        <li className='text-blue-500 font-semibold text-xl mt-3'>Computer Practice Lab</li>
      </div>
      </div>
      
                


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Facilities;