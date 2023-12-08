import React from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Semesterfirst from '../../Components/Semester/Semesterfirst';
import Semestersecond from '../../Components/Semester/Semestersecond';


const Courses = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar></Navbar>
            <h1 className='text-black text-xl font-bold p-7 uppercase '>First Semester Courses <span className='text-red-400'>credit hour: 18</span></h1>
            <Semesterfirst></Semesterfirst>
            <h1 className='text-black text-xl font-bold p-7 uppercase '>Second Semester Courses <span className='text-red-400'>credit hour: 18</span></h1>
            <Semestersecond></Semestersecond>

    <Footer></Footer>
        </div>
    );
};

export default Courses;