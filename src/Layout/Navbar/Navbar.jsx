import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css'
import { AuthContext } from '../../AuthProvider/Authprovider';
import img from '.././../assets/img2.png'

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div style={{ borderBottom: '6px solid #FFA500' }} className="navbar bg-blue-900 border-b-3 border-orange-500 fixed top-0 w-full z-50 ">
      <div className="navbar-start">
        <img className='w-28 h-12' src="https://globaluniversity.edu.bd/wp-content/uploads/2018/09/CSE.png"></img>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 bg-opacity-50 rounded-box w-52">
            <Link to={"/"}><li><a className='text-white font-bold '>HOME</a></li></Link>
            <li>
              <details>
                <summary className='text-white font-bold '>ACADEMIC</summary>
                <ul className="p-2 w-44 bg-blue-500 text-white rounded">
                  <Link to={"/course"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Courses</a></li></Link>
                  <Link to={"/faculties"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Faculty</a></li></Link>
                  <Link to={"/activity"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Activities</a></li></Link>
                  <Link to={"/facilities"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Facilities</a></li></Link>
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
                <ul className="p-2 w-44 bg-blue-900 text-white rounded">
                  <Link to={"/admissionprocedure"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Admission Procedure</a></li></Link>
                  <Link to={"/feesstructure"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Tution and fees</a></li></Link>
                  <Link to={"/waiverlist"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Scholarships and waiver</a></li></Link>
                </ul>
              </details>
            </li>
            <Link to={"/gallery"}><li><a className='text-white font-bold'>GALLERY</a></li></Link>
            <Link to={"/research"}><li><a className='text-white font-bold'>RESEARCH</a></li></Link>
            <Link to={"/career"}><li><a className='text-white font-bold'>CAREER OPPORTUNITY</a></li></Link>
            <Link to={"/placements"}><li><a className='text-white font-bold'>STUDENT SUCCESS</a></li></Link>
            <li><a href='https://www.easternuni.edu.bd/contactDirectories' className='text-white font-bold'>CONTACT US</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to={"/"}><li><a className='text-white font-bold '>HOME</a></li></Link>
          <li>
            <details>
              <summary className='text-white font-bold '>ACADEMIC</summary>
              <ul className="p-2 w-44 bg-blue-900 text-white rounded">
                <Link to={"/course"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Courses</a></li></Link>
                <Link to={"/faculties"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Faculty</a></li></Link>
                <Link to={"/activity"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Activities</a></li></Link>
                <Link to={"/facilities"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Facilities</a></li></Link>
                <Link to={"/academicrules"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Academic rules</a></li></Link>
                <li>
                  <details>
                    <summary className='text-white font-bold '>LOGIN</summary>
                    <ul className="p-2 w-44 bg-blue-600 text-white rounded">
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
              <ul className="p-2 w-44 bg-blue-900 text-white rounded">
                <Link to={"/admissionprocedure"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Admission Procedure</a></li></Link>
                <Link to={"/feesstructure"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Tution and fees</a></li></Link>
                <Link to={"/waiverlist"}><li><a className='hover:bg-white hover:text-orange-500 font-bold uppercase'>Scholarships and waiver</a></li></Link>
              </ul>
            </details>
          </li>
          <Link to={"/gallery"}><li><a className='text-white font-bold'>GALLERY</a></li></Link>
          <Link to={"/research"}><li><a className='text-white font-bold'>RESEARCH</a></li></Link>
          <Link to={"/career"}><li><a className='text-white font-bold'>CAREER OPPORTUNITY</a></li></Link>
          <Link to={"/placements"}><li><a className='text-white font-bold'>STUDENT SUCCESS</a></li></Link>
          <li><a href='https://www.easternuni.edu.bd/contactDirectories' className='text-white font-bold'>CONTACT US</a></li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;