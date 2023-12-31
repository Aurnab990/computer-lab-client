import React, { useContext } from 'react';
import FacultySidebar from './FacultySidebar';
import { AuthContext } from '../../../AuthProvider/Authprovider';

const Updatepaper = () => {
    const{user} = useContext(AuthContext);
    const handlePaper = (e) =>{
        e.preventDefault();
        const paper = e.target.paper.value;
        const email = e.target.email.value;
        const user = { paper,email };

        fetch('https://department-cse.onrender.com/research', {
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
              alert("Paper Added", data);
              
          })
    }

    return (
        <div className="drawer lg:drawer-open  bg-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10 w-full">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">MENU</label>
          
<h1 className='text-center text-black text-xl font-semibold mb-10'>Update Research Paper </h1>
        <form onSubmit={handlePaper}>
            <input name='email' type='email' value={user?.email} className='bg-white mb-5 text-black w-full border-2 border-black'></input>
        <textarea className="textarea textarea-secondary bg-white mb-5 text-black w-full" name='paper' placeholder="type here"></textarea>
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

export default Updatepaper;