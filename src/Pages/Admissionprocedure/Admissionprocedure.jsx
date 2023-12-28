import React, { useState } from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import Modal from './Modal/Modal';
import Paymentsystem from './Paymentsystem';
import Requirements from './Requirements';
import Eligibility from './Eligibility';

const Admissionprocedure = () => {
    const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  const handleButtonClick = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };
    return (
        <div className='bg-white'>
            <Navbar></Navbar>

            

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className='text-center text-3xl font-sm text-blue-300'>Admission Overview</h1>

      <div className='flex justify-center gap-5 mt-2'>

        


      <button
        onClick={() => handleButtonClick('Admission ELigibility', <Eligibility></Eligibility>)}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Admission Eligibility
      </button>




      <button
        onClick={() => handleButtonClick('Admission Requirements', <Requirements></Requirements>)}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Admission Requirements
      </button>




<button
        onClick={() => handleButtonClick('Payment System', <Paymentsystem></Paymentsystem>)}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Payment System
      </button>

      



<Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />

      </div>
      <div className='mt-5'>
      <h1 className='text-blue-500 '>ADMISSION SCHEDULE FOR SPRING 2024</h1>
      <p className='text-black'><span className='font-semibold'>Admission Last Date:</span> Admission is now open for Spring 2024 semester. Please call to know the last date of Admission.</p>
      <p className='text-black'>Class Start (Tentative Date) : 4th February 2024</p>
      <p className='text-black'>Orientation (Tentative Date) : 3rd February 2024</p>

      <div className='mt-10'>
      <h1 className='text-blue-500 '>Intake/Semester</h1>
      <p className='text-black'>There are two (02) intakes/ Semester at Eastern University. Each semester duration is six (06) months.</p>
      <p className='text-black'>Spring (January – June)</p>
      <p className='text-black'>Summer (July – December)</p>
      </div>

      <div className='mt-10'>
      <h1 className='text-blue-500 '>Direct Admission</h1>
      <li className='text-black'>Step 1: Collect Application Form from the Admission Office by paying BDT 500/-</li>
      <li className='text-black'>Step 2: Submit the Application Form duly filled in with all academic transcript and certificates and three (03) passport size color photographs.</li>
      <li className='text-black'>Step 3: Deposit admission fees to the accounts section.</li>
      <li className='text-black'>For online: <a className='text-red-500' href='https://www.easternuni.edu.bd/OnlineAdmission'>Click Here</a></li>
      </div>
      </div>

      
        <div>
        
      </div>
    </div>
    <Footer></Footer>
        </div>
    );
};

export default Admissionprocedure;