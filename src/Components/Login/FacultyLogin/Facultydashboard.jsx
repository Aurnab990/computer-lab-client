import React, { useContext, useEffect, useState } from 'react';
import FacultySidebar from './FacultySidebar';
import { AuthContext } from '../../../AuthProvider/Authprovider';
import { Link } from 'react-router-dom';

const Facultydashboard = () => {
  const { user } = useContext(AuthContext);
  const [teacherinfo, setTeacherinfo] = useState([]);
  const [specificData, setSpecificData] = useState(null);

  useEffect(() => {
    // Fetch teacher info
    fetch('https://department-cse.onrender.com/teacherinfo')
      .then(res => res.json())
      .then(data => setTeacherinfo(data))
      .catch(error => console.error('Error fetching teacher info:', error));
  }, []);

  useEffect(() => {
    // Find matching email in teacherinfo
    const matchingTeacher = teacherinfo.find(info => info.email === user?.email);

    // If a matching email is found, set the specific data
    if (matchingTeacher) {
      setSpecificData(matchingTeacher);
      // console.log(specificData);
    }
  }, [teacherinfo, user]);

  return (
    <div className="drawer lg:drawer-open bg-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-10 w-full">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">MENU</label>

        <h1 className='text-3xl justify-center text-center mb-5 font-semibold text-black'>
          Welcome<span className='text-yellow-400 font-bold'> {user?.email}</span>
        </h1>

        <div className="  ">
          <div className="">
            {
              specificData ? (
                <div className='flex gap-8 mt-3 p-2'>
                  
                  {/* Display other specificData properties as needed */}
                  <div className=''>
                    <img src={specificData.img}></img>
                  </div>
                  <div>
                    <li className='text-xl border-2 p-3'>Name: {specificData.name}</li>
                    <li className='text-xl border-2 p-3'> {specificData.title}</li>
                    <li className='text-xl border-2 p-3'> {specificData.eduaction}</li>
                    <li className='text-sm border-2 p-3'>Experience: {specificData.experience}</li>
                    <Link to={`/update/${specificData._id}`}><button className="btn btn-success mt-3">UPDATE</button></Link>
                  </div>
                  
                </div>
              ) : (
                <p>No matching data found</p>
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
