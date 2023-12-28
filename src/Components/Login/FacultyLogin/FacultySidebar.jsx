import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/Authprovider';

const FacultySidebar = () => {
    const{logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await logout();
          // Additional logic after successful logout, e.g., redirect to login page
          navigate("/");

        } catch (error) {
          console.error('Error during logout:', error);
        }
    }
    return (
        <div>
           <ul className="menu p-4 w-80 min-h-full lg:h-full mt-2 rounded-xl bg-base-200 text-base-content text-lg font-semibold">
                        {/* Sidebar content here */}
                        <Link to={"/facultydashboard"}><li><a>PROFILE</a></li></Link>
                        <Link to={"/studentinfo"}><li><a>STUDENTS</a></li></Link>
                        <Link to={"/noticeboard"}><li><a>NOTICE BOARD</a></li></Link>
                        <Link to={""}><li><a>DEPARTMENT NOTICE</a></li></Link>
                        <Link to={"/teacherinfo"}><li><a>UPDATE INFORMATION</a></li></Link>
                        
                        <p></p>
                        <button className='mr-24 mt-4 lg:mt-80 bg-red-800 text-white rounded-xl' onClick={handleLogout}>LOGOUT</button>
                    </ul> 
        </div>
    );
};

export default FacultySidebar;