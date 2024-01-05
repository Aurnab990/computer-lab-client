import React, { useEffect, useState } from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useLoaderData } from 'react-router-dom';

const Facultyinfo = () => {
    const [activeContent, setActiveContent] = useState('education');
    const[paper, setPaper] = useState([""]);
    const{name,img,email,title,eduaction,position,experience} = useLoaderData();
    // console.log(eduaction);

  const handleItemClick = (contentId) => {
    setActiveContent(contentId);
  };

  useEffect(()=>{
    fetch('https://department-cse.onrender.com/research')
    .then(res => res.json())
    .then(data => setPaper(data))
  },[]);

  const filteredPapers = paper.filter((papers) => papers.email === email);

    

    return (
        <div className='bg-white'>
            <Navbar></Navbar>



            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className='flex gap-10 justify-center '>

                    <div className='mt-24'>
                        <h1 className='text-blue-500 text-2xl'>{name}</h1>
                        <h2 className='text-xl text-black '>{title}</h2>
                        <h2 className='text-xl text-black '>09602666651, 09602666652, Ext: 110</h2>
                        <h2 className='text-xl text-black '>{email}</h2>
                    </div>
                    <div>
                        <img src={img}></img>
                    </div>
                </div>

                <div>
                <div>
      <ul className='flex gap-10 justify-center bg-blue-300 text-2xl text-white mt-20 p-2'>
        <li className='  '>
          <a href='#education' onClick={() => handleItemClick('education')}>
            Education
          </a>
        </li>
        <li>
          <a href='#research' onClick={() => handleItemClick('research')}>
            Research Paper
          </a>
        </li>
        <li>
          <a href='#teaching' onClick={() => handleItemClick('teaching')}>
            Teaching Experience
          </a>
        </li>
        <li>
          <a href='#administrative' onClick={() => handleItemClick('administrative')}>
            Administrative Position
          </a>
        </li>
        <li>
          <a href='#cv' onClick={() => handleItemClick('cv')}>
            Detailed CV
          </a>
        </li>
      </ul>

      <div className='flex justify-center border-2 '>
      <div id='education' style={{ display: activeContent === 'education' ? 'block' : 'none' }}>
        <li className='text-black text-xl mt-3'>{eduaction}</li>
      </div>

      <div id='research' style={{ display: activeContent === 'research' ? 'block' : 'none' }}>
        {/* Research Interest content goes here */}
        {filteredPapers.map((papers) => (
          <li className='text-black' key={papers.id}>
            {papers.paper}
          </li>
        ))}
      </div>

      <div id='teaching' style={{ display: activeContent === 'teaching' ? 'block' : 'none' }}>
        {/* Teaching Experience content goes here */}
        <li className='text-black text-xl mt-3'>{experience}</li>
      </div>

      <div id='administrative' style={{ display: activeContent === 'administrative' ? 'block' : 'none' }}>
        {/* Administrative Position content goes here */}
        <li className='text-black text-xl mt-3'>{position}</li>
      </div>

      <div id='cv' style={{ display: activeContent === 'cv' ? 'block' : 'none' }}>
        {/* Detailed CV content goes here */}
        <p>Detailed CV content goes here.</p>
      </div>

      </div>
    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Facultyinfo;