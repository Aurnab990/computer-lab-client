import React, { useState } from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

const Placements = () => {
  const[success, setSuccess] = useState(['']);
  fetch('https://department-cse.onrender.com/success')
  .then(res => res.json())
  .then(data => setSuccess(data))
    return (
      <div className='bg-white'>
      <Navbar></Navbar>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className='text-center text-blue-300 text-3xl'>Student Success</h1>

      <div className="">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 -mt-10">
       
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
          
            {
              success.map(student=>
                <div className="p-5 bg-blue-800 overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              
                <p className="mb-2 font-medium text-red-500">Name: {student.name}</p>
                <p className="mb-2 font-medium text-yellow-400">ID: {student.id}</p>
               
                <p className="mb-2 font-medium text-yellow-400">Now: {student.position}</p>
              <p className="mb-2 font-medium text-yellow-400">At: {student.company}</p>
  
                
  
            
              </div>
                
                )
            }
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          
         
        </div>
      </div>
    </div>
      

  
</div>
<Footer></Footer>
  </div>
    );
};

export default Placements;