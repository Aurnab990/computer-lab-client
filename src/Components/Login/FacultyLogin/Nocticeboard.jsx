import React from 'react';
import FacultySidebar from './FacultySidebar';

const Nocticeboard = () => {


    const handleNotice = (e) =>{
        e.preventDefault();
        const notice = e.target.notice.value;
        const user = { notice };

        fetch('http://localhost:5000/notice', {
          method: 'POST', // or 'PUT'
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
      })
          .then(res => res.json())
          .then(data => {
              /*const newBook = [user, data];
              setUsers(newBook); */
              //console.log("Sucess", data);
              alert("Notice Added", data);
              
          })
    }

    return (
        <div className="drawer lg:drawer-open  bg-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10 w-full">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">MENU</label>
          
<h1 className='text-center text-black text-xl font-semibold mb-10'>Generate a Notice for students</h1>
        <form onSubmit={handleNotice}>
        <textarea className="textarea textarea-secondary bg-white mb-5 text-black w-full" name='notice' placeholder="notice"></textarea>
            <button type='submit' className='btn btn-success w-1/3 text-white'>SUBMIT</button>
        </form>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <FacultySidebar></FacultySidebar>
        
        </div>
      </div>
    );
};

export default Nocticeboard;


