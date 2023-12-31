import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TEInput, TERipple } from "tw-elements-react";
import { AuthContext } from '../../../AuthProvider/Authprovider';

const Studentlogin = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then(result =>{
            const user = result.user;
            if(user.email==="tazeen.cse@easternuni.edu.bd"){
                navigate("/facultydashboard");
            }
            // console.log(user);
            else{
                navigate("/dashboard");
            }
        })
        .then(err => console.log(err));


    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-white" style={{ backgroundImage: 'url("https://www.easternuni.edu.bd/assets/slider/Pc/Library(1200x450).webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
            <div className="w-full p-6 m-auto bg-white bg-opacity-80 rounded-md shadow-xl lg:max-w-xl">
                <img src='https://webportal.easternuni.edu.bd/images/BannerX.jpg'>
                </img>
                <form onSubmit={handleLogin} className="mt-6  rounded-md p-4">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                        required
                            type="email"
                            name='email'
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
                            name='password'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>
                

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to={"/signin"}>
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Create an Account
                    </a>
                    </Link>
                </p>
            
        </div>
        </div>
    );
};

export default Studentlogin;