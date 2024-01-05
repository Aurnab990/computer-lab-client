import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Allnotice = () => {
    const[notices,setNotices] = useState(['']);
    useEffect(()=>{
        fetch('https://department-cse.onrender.com/notice')
        .then(res=>res.json())
        .then(data=>setNotices(data))
    },[])
    return (
        <div className='bg-white'>
        <Navbar></Navbar>
  
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1 className='text-center text-blue-300 text-3xl'>Notice Board</h1>
  
        <div className="">
            {
                notices.map(notice=>
                    <div className='border-2 p-5'>
                        <li className='text-blue-500 font-semibold text-xl'>{notice.title}</li>
                        <p className='text-lg ml-6 text-black'>{notice.notice}</p>
                    </div>
                    )
            }
        
      </div>
        
  
    
  </div>
  <Footer></Footer>
    </div>
    );
};

export default Allnotice;