import React from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Research = () => {
    return (
        <div className='bg-white'>
      <Navbar></Navbar>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className='text-blue-500 text-2xl text-center mb-5'>Research Groups</h1>
      <div>
        <div className='border-2 p-5'>
            <h1 className='text-black text-2xl'>Graphics, Vision and Digital Signal Processing Research Group</h1>
            <li className='text-blue-500 font-semibold'>Professor Dr. Md. Mahfuzur Rahman</li>
        </div>
        <div className='border-2 p-5'>
            <h1 className='text-black text-2xl'>Network, Cyber Security and Digital Forensics Research Group</h1>
            <li className='text-blue-500 font-semibold'>Professor Dr. Md. Mahfuzur Rahman</li>
            <li className='text-blue-500 font-semibold'>Muhammad Mahfuz Hasan</li>
            <li className='text-blue-500 font-semibold'>Md. Mahir Ashhab</li>
            <li className='text-blue-500 font-semibold'>Nawshin Tabassum Tanny</li>
        </div>
        <div className='border-2 p-5'>
            <h1 className='text-black text-2xl'>AI, ML and HCI Research Group</h1>
            <li className='text-blue-500 font-semibold'>Mousumi Bala</li>
            <li className='text-blue-500 font-semibold'>Mohimenul Karim</li>
            <li className='text-blue-500 font-semibold'>Sefat-E-Rahman</li>
            <li className='text-blue-500 font-semibold'>Tabeen Tasneem</li>
            <li className='text-blue-500 font-semibold'>Tazeen Tasneem</li>
        </div>
        <div className='border-2 p-5'>
            <h1 className='text-black text-2xl'>Information Systems, IoT and Data Analytics Research Group</h1>
            <li className='text-blue-500 font-semibold'>Professor Dr. Md. Mahfuzur Rahman</li>
            <li className='text-blue-500 font-semibold'>Paramita Basak Upama</li>
            <li className='text-blue-500 font-semibold'>Md. Rashid Abid</li>
            <li className='text-blue-500 font-semibold'>Tasniah Mohiuddin</li>
        </div>
        <div className='border-2 p-5'>
            <h1 className='text-black text-2xl'>Advanced Intelligent Multidisciplinary Research Group</h1>
            <li className='text-blue-500 font-semibold'>Md. Towfiqur Rahman</li>
            <li className='text-blue-500 font-semibold'>Mohammad Rifat Arefin</li>
            <li className='text-blue-500 font-semibold'>Sabrina Haue</li>
            
        </div>
      </div>
      
      

  
</div>
<Footer></Footer>
  </div>
    );
};

export default Research;