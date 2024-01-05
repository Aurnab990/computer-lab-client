import React, { useEffect, useState } from 'react';
import Adminsidebar from '../Adminsidebar';

const Teacherpanel = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('https://department-cse.onrender.com/teacherinfo')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, []);

    const handleDelete = id =>{
        const proceed = window.confirm("Are you sure to Delete?");
        if(proceed){
            console.log("Deleting user id:", id);
            const url = `https://department-cse.onrender.com/teacherinfo/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainingItems = teachers.filter(users => users._id !== id);
                setTeachers(remainingItems);
            })
        }
    }

    return (
        <div className="drawer lg:drawer-open  bg-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10 w-full">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">MENU</label>
          
<h1 className='text-center text-black text-xl font-semibold mb-10'>Teacher's Panel</h1>
{
            teachers.map(teacher =>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap w-full border rounded-xl shadow-xl mt-3 bg-yellow-300'>
            <div className='flex'>
                <img className='w-14 h-14 rounded-xl' src={teacher.img}></img>
                <div>
                <p className='text-black ml-5 font-medium'>{teacher.name}</p>
                <p className='ml-5'>{teacher.title} </p>
            </div>
            </div>
            
            <div className='flex justify-end -mr-72 gap-3'>
                <button onClick={() => handleDelete(teacher._id)} className='btn btn-error'>DELETE</button>
                
            </div>
          </div>
                
                )
          }


        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <Adminsidebar></Adminsidebar>
        
        </div>
      </div>
    );
};

export default Teacherpanel;