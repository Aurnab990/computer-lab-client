import React, { useContext, useEffect, useState } from 'react';
import FacultySidebar from './FacultySidebar';
import { AuthContext } from '../../../AuthProvider/Authprovider';

const Facultydashboard = () => {
  const { user } = useContext(AuthContext);
  const [teacherdata, setTeacherdata] = useState([]);
  const [teacherinfo, setTeacherinfo] = useState([]);
  const [specificData, setSpecificData] = useState(null); // Assuming you have a state variable for specific data

  useEffect(() => {
    fetch('Data.json')
      .then(res => res.json())
      .then(data => setTeacherdata(data));
  }, []);

  useEffect(() => {
    fetch('https://department-cse.onrender.com/teachers')
      .then(res => res.json())
      .then(data => setTeacherinfo(data));
  }, []);

  useEffect(() => {
    // Check if both datasets are available
    if (teacherdata.length > 0 && teacherinfo.length > 0) {
      // Find matching emails
      const matchingEmail = teacherdata.find(data => {
        return teacherinfo.some(info => info.temail === data.email);
      });

      // If a matching email is found, set the specific data
      if (matchingEmail) {
        // Set your specific data using matchingEmail
        // For demonstration purposes, assuming there is a state variable named specificData
        setSpecificData(matchingEmail);
      }
    }
  }, [teacherdata, teacherinfo]);





return (
  <div className="drawer lg:drawer-open  bg-white">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col p-10 w-full">
      {/* Page content here */}
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      <h1 className='text-3xl justify-center text-center mb-5 font-semibold text-black'>Welcome<span className='text-yellow-400 font-bold'> {user?.email}</span> </h1>


      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          {
            specificData && (
              <img src={specificData.img} className="max-w-sm rounded-xl shadow-2xl" />
            )
          }
          {
            teacherinfo.map(teacherinfo =>
              <div>
            <h1 className="text-2xl text-yellow-500 font-semibold">{teacherinfo.firstname} {teacherinfo.lastname}</h1>
            <h1 className="text-2xl text-black font-semibold">{teacherinfo.position}, dept. of {teacherinfo.department}</h1>
            <h1 className='text-black'><span className='font-semibold'>Research Interest:</span> {teacherinfo.researchIn}</h1>
            
          </div>
              )
          }
        </div>
      </div>



    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <FacultySidebar></FacultySidebar>

    </div>
  </div>
);
};

export default Facultydashboard;