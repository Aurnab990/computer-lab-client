import React, { useContext, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { AuthContext } from '../../../../AuthProvider/Authprovider';
import { database } from '../../../../firebase.init';
import { addDoc,collection } from 'firebase/firestore';

const Updateprofile = () => {
    const{user} = useContext(AuthContext);
    
    // const[semester, setSemester] = useState('');
    // const[advisor, setAdvisor] = useState('');
    // const[sname, setSname] = useState('');
    // const[courses, setCourses] = useState('');
    // const[email, setEmail] = useState('');
    // const value = collection(database,"Student Info");

    // const handleInfo=async()=>{
    //     await addDoc(value, {semester:semester, advisor: advisor, sname: sname, courses: courses, email:email});
    //     alert("Successfully Added")
    // }

    const handleAddstudents = (event) => {
        
      event.preventDefault();
      const name = event.target.sname.value;
      const semester = event.target.semester.value;
      const email = event.target.email.value;
      const advisorname = event.target.advisorname.value;
      const courses = event.target.courses.value;
      const studentId = event.target.sid.value;
      const advisoremail = event.target.advisoremail.value;
      const user = { name, semester,email,advisorname,courses,studentId,advisoremail };
      //console.log(user);
      

      fetch('https://department-cse.onrender.com/students', {
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
              alert("Your data Added", data);
              
          })
        }



    return (
        <div className="drawer lg:drawer-open  bg-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10 w-full">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          
<h1 className='text-3xl justify-center text-center mb-5 font-semibold text-black'>Add Your Information</h1>
<div className=' mt-10 justify-center b '>
    <form onSubmit={handleAddstudents}>
    Name: <input className='w-1/3 p-2 rounded-xl ml-28 bg-white border-2 text-black' name='sname' required></input>
    <br></br>
    <br></br>
    Student ID: <input className='w-1/3 p-2 rounded-xl ml-20 bg-white border-2 text-black' name='sid' required></input>
    <br></br>
    <br></br>
    Your Semester: <input className='w-1/3 p-2 rounded-xl ml-14 bg-white border-2 text-black' name='semester' required></input>
    <br></br>
    Advisor Name: <input className='mt-5 w-1/3 p-2 rounded-xl ml-14 bg-white border-2 text-black' name='advisorname' required></input>
    <br></br>
    Advisor Email: <input className='mt-5 w-1/3 p-2 rounded-xl ml-14 bg-white border-2 text-black' name='advisoremail' placeholder='perfect email needed' required></input>
    <br></br>
    Your Email: <input className='mt-5 w-1/3 p-2 rounded-xl ml-20 bg-white border-2 text-black' name='email' value={user?.email} required ></input>
    <br></br>
    
    Courses Name: <input className='mt-5 w-1/3 p-2 rounded-xl ml-14 bg-white border-2 text-black' name='courses' required></input>
    <br></br>
    <br></br>
    <button type="submit"  className='btn btn-primary ml-28 w-1/4 items-center justify-center'>SUBMIT</button>
    </form>
</div>

        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <Sidebar></Sidebar>
        
        </div>
      </div>
    );
};

export default Updateprofile;