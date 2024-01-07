import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/Authprovider';
import { Link, useNavigate } from 'react-router-dom';

const Adminsidebar = () => {
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
            <ul className="menu p-4 w-70   rounded-xl bg-base-200 text-base-content text-lg font-semibold">
                        {/* Sidebar content here */}
                        <Link to={"/facultydashboard"}><li><a>PROFILE</a></li></Link>
                        <Link to={"/teacherpanel"}><li className='uppercase'><a>teachers</a></li></Link>
                        <Link to={"/addteacher"}><li className='uppercase'><a>Add Teacher</a></li></Link>
                        <Link to={"/addnotice"}><li className='uppercase'><a>Add Notice</a></li></Link>
                        <Link to={"/allnotices"}><li className='uppercase'><a>All Notice</a></li></Link>
                        <Link to={"/events"}><li className='uppercase'><a>Create Events</a></li></Link>
                        <Link to={"/success"}><li className='uppercase'><a>student success</a></li></Link>
                        
                        <p></p>
                        <button className='mr-24 mt-4 lg:mt-60 bg-red-800 text-white rounded-xl' onClick={handleLogout}>LOGOUT</button>
                    </ul> 
        </div>
    );
};

export default Adminsidebar;