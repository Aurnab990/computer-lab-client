import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/Authprovider';

const Sidebar = () => {
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
      };
    return (
        
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-lg font-semibold">
                        {/* Sidebar content here */}
                        <Link to={"/dashboard"}><li><a>STUDENT PROFILE</a></li></Link>
                        <Link to={"/updateprofile"}><li><a>ADD PROFILE</a></li></Link>
                        
                        <Link to={"/notification"}><li><a>DEPARTMENT NOTICE</a></li></Link>
                        
                        <button className='mr-24 mt-4 lg:mt-96 bg-red-800 text-white rounded-xl' onClick={handleLogout}>LOGOUT</button>
                    </ul>
                    
    );
};

export default Sidebar;