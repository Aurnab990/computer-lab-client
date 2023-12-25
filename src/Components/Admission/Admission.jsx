import React from 'react';
import '../Admission/Admission.css';
import { Link } from 'react-router-dom';

const Admission = () => {
  return (
    <div className="overflow-hidden bg-orange-600 mt-10">
      <div className="marquee">
        <p className="inline-block whitespace-nowrap text-3xl text-white font-medium ">
          Addmission is ongoing in CSE spring 2024. Grave your best waiver now.    <Link to={"https://www.easternuni.edu.bd/AdmissionContact"}><span className='text-blue-600'>    Contact us.</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Admission;
