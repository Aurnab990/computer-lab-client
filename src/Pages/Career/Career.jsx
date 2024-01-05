import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Layout/Navbar/Navbar';

const Career = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>



            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h1 className='text-center text-3xl font-sm text-blue-300'>Job Opportunity</h1>

                <div>
                    <div className='mt-10'>
                        <li className='border-2 text-white bg-red-700 text-center p-4 w-96 ml-24 font-semibold text-lg'>Circular 1</li>
                        <li className='border-2 text-white bg-red-700 text-center p-4 w-96 ml-24 font-semibold text-lg'>Circular 2</li>
                        <li className='border-2 text-white bg-red-700 text-center p-4 w-96 ml-24 font-semibold text-lg'>Circular 3</li>
                        <li className='border-2 text-white bg-red-700 text-center p-4 w-96 ml-24 font-semibold text-lg'>Circular 4</li>
                        <li className='border-2 text-white bg-red-700 text-center p-4 w-96 ml-24 font-semibold text-lg'>Circular 5</li>

                    </div>
                    <div>

                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Career;