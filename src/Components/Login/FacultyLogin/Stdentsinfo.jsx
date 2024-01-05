import React, { useEffect, useState } from 'react';
import FacultySidebar from './FacultySidebar';

const Stdentsinfo = () => {
    const[students, setStudents] = useState(['']);
    
    useEffect(()=>{
        fetch('https://department-cse.onrender.com/students')
        .then(res => res.json())
        .then(data=>setStudents(data))
    },[]);
    const handleDelete = id =>{
      const proceed = window.confirm("Are you sure to Delete?");
      if(proceed){
          console.log("Deleting user id:", id);
          const url = `https://department-cse.onrender.com/students/${id}`;
          fetch(url, {
              method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              const remainingItems = students.filter(users => users._id !== id);
              setStudents(remainingItems);
          })
      }
  }
    return (
        <div className="drawer lg:drawer-open  bg-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10 w-full">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">MENU</label>
          <h1 className='text-2xl text-black'>Your Total Students: {students.length}</h1>
          
          {
            students.map(student =>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap w-full border rounded-xl shadow-xl mt-3 bg-yellow-300'>
            <div className='flex'>
                <img className='w-14 h-14 rounded-xl' src='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'></img>
                <div>
                <p className='text-black ml-5 font-medium'>{student.name}-{student.studentId}</p>
                <p className='ml-5'>{student.semester} </p>
            </div>
            </div>
            
            <div className='text-white'>
                <p>{student.courses}</p>

            </div>
            <div className='flex justify-end gap-3'>
                <button onClick={() => handleDelete(student._id)} className='btn btn-error'>DELETE</button>
                
            </div>
          </div>
                
                )
          }


        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <FacultySidebar></FacultySidebar>
        
        </div>
      </div>
    );
};

export default Stdentsinfo;