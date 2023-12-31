import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/Authprovider';

const StudentSignin = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handlSignin=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const studentid = form.sid.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(sname,sid,email,password);
        if (studentid.length !== 9) {
            alert("Warning: Invalid student ID.");
            // You can display an error message to the user if needed
            return;
        }
        
        createUser(email,password,name,studentid)
        .then(result =>{
            const user = result.user;
            alert("Account Created, Wait a Sec");
            navigate("/login")
            
        })
        .catch(err => console.log(err));


    }
    return (
        <div>
              <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-white" style={{ backgroundImage: 'url("https://www.easternuni.edu.bd/assets/slider/Pc/Library(1200x450).webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full p-6 m-auto bg-white bg-opacity-80  rounded-md shadow-xl lg:max-w-xl">
                <img className='w-full' src='https://webportal.easternuni.edu.bd/images/BannerX.jpg'></img>
                <form onSubmit={handlSignin} className="mt-6">
                <div className="mb-2">
                        <label
                            for="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Student Name
                        </label>
                        <input
                        required
                            type="text"
                            name="name"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                <div className="mb-2">
                        <label
                            for="sid"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Student ID
                        </label>
                        <input
                        required
                            type="text"
                            name="sid"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                        required
                           
                            type="text"
                            name="email"
                            placeholder='Only valid Email or Your account will be delete'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                        required
                            type="password"
                            name="password"
                            placeholder="password length at least 6 char"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Create
                        </button>
                    </div>
                </form>
                

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already an account?{" "}
                    <Link to={"/login"}>

                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Login
                    </a>
                    
                    </Link>
                </p>
            </div>
        </div>
        </div>
    );
};

export default StudentSignin;