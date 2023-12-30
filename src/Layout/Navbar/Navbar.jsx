import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css'
import { AuthContext } from '../../AuthProvider/Authprovider';

const Navbar = () => {
    const{user} = useContext(AuthContext);
    
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const handleDropdownToggle = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };
    return (
      <div className="navbar bg-blue-500 fixed top-0 w-full z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-500">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to={"/"}><li><a className='text-white font-bold '>HOME</a></li></Link>
          <li>
            <details>
              <summary className='text-white font-bold '>ACADEMIC</summary>
              <ul className="p-2 w-44 bg-blue-500 text-white rounded">
                <Link to={"/course"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Courses</a></li></Link>
                <Link to={"/faculties"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Faculty</a></li></Link>
                <Link to={"/activity"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Activities</a></li></Link>
                <li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Facilities</a></li>
                <Link to={"/academicrules"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Academic rules</a></li></Link>
                <li>
            <details>
              <summary className='text-white font-bold '>LOGIN</summary>
              <ul className="p-2 w-44 bg-blue-500 text-white rounded">
                <Link to={"/login"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>STUDENT</a></li></Link>
                <Link to={"/login"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Faculty</a></li></Link>
                
              </ul>
            </details>
          </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className='text-white font-bold '>ADMISSION</summary>
              <ul className="p-2 w-44 bg-blue-500 text-white rounded">
                <Link to={"/admissionprocedure"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Admission Procedure</a></li></Link>
                <Link to={"/feesstructure"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Tution and fees</a></li></Link>
                <Link to={"/waiverlist"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Scholarships and waiver</a></li></Link>
              </ul>
            </details>
          </li>
          <Link to={"/gallery"}><li><a className='text-white font-bold'>GALLERY</a></li></Link>
          <li><a className='text-white font-bold'>RESEARCH</a></li>
          <li><a className='text-white font-bold'>CAREER OPPORTUNITY</a></li>
          <li><a className='text-white font-bold'>PLACEMENTS</a></li>
          <li><a href='https://www.easternuni.edu.bd/contactDirectories' className='text-white font-bold'>CONTACT US</a></li>
         
        </ul>
      </div>
      
    </div>
    );
};

export default Navbar;