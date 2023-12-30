import React, { useEffect, useState } from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

const Faculties = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(()=>{
        fetch('https://department-cse.onrender.com/teacherinfo')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])
    return (
        <div className='bg-white'>
            <Navbar></Navbar>

            

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className='flex justify-center item-center mb-5 mt-2 gap-5'>
            <button className="block text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Teachers Research Paper</button>
            <button className="block text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Teacher's Information</button>
            <button className="block text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Updated CV</button>
            </div>
      
        <div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {
            teachers.map(teacher => 
                
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={teacher.img}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                {teacher.name}
              </p>
              <p className="mb-4 text-xs text-gray-100">{teacher.title}</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
                {teacher.email}
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Link to={`/teacherdetails/${teacher._id}`}><button className='btn btn-success'>KNOW MORE</button></Link>
              </div>
            </div>
          </div>
                )
          }
        </div>
      </div>
    </div>
    <Footer></Footer>
        </div>
    );
};

export default Faculties;