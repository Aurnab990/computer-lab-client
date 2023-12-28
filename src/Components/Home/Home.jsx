import React from 'react';

import Carosel from '../../Layout/Carosel/Carosel';
import Facultyheader from '../../Layout/FacultyHeader/Facultyheader';
import Dignitaries from '../../Layout/FacultyHeader/Dignitaries';
import Navbar from '../../Layout/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Statistic from '../Statistics/Statistic';
import Headercontact from '../HeaderContact/Headercontact';
import Admission from '../Admission/Admission';

const Home = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>
            <Carosel className=""></Carosel>
            <Admission></Admission>
            <Facultyheader className="bg-white"></Facultyheader>
            <h1 className='text-black text-center text-2xl font-bold bg-white'>BY THE NUMBERS</h1>
            <Statistic></Statistic>
            <Headercontact></Headercontact>
            <h1 className='text-black text-center text-2xl font-bold bg-white mt-12'>DIGNITARIES</h1>
            <Dignitaries></Dignitaries>

            <Footer></Footer>
            
        </div>
    );
};

export default Home;