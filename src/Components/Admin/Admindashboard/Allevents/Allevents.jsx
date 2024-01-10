import React, { useEffect, useState } from 'react';
import Adminsidebar from '../Adminsidebar';

const Allevents = () => {
    const[events, setEvents] = useState(['']);
    useEffect(()=>{
        fetch('https://department-cse.onrender.com/events')
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[]);

    const handleDelete = id =>{
        const proceed = window.confirm("Are you sure to Delete?");
        if(proceed){
            // console.log("Deleting user id:", id);
            const url = `https://department-cse.onrender.com/events/${id}`;
            // const url = `http://localhost:5000/notice/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainingItems = events.filter(users => users._id !== id);
                setEvents(remainingItems);
            })
        }
    }
    return (
        <div className="drawer lg:drawer-open  bg-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10 w-full">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">MENU</label>
          
<h1 className='text-center text-black text-xl font-semibold mb-10'>Event Panel</h1>
{
            events.map(event =>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap w-full border rounded-xl shadow-xl mt-3 bg-yellow-300'>
            <div className='flex'>
                
                <div>
                <p className='text-black ml-5 font-bold'>{event.name}</p>
                <p className='text-black ml-5'>{event.date}</p>
                <p className='text-black ml-5'>{event.venue}</p>
                <p className='text-black ml-5'>{event.prize}</p>
                
            </div>
            </div>
            
            <div className='flex justify-end items-center -mr-72 gap-3'>
                <button onClick={() => handleDelete(event._id)} className='btn btn-error'>DELETE</button>
                
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

export default Allevents;