import React from 'react';
import { Link } from 'react-router-dom';

const Headercontact = () => {
    return (
        <div className="relative">
      <img
        src="https://addons-media.operacdn.com/media/CACHE/images/themes/85/40585/1.0-rev1/images/1df3457f-34f1-429a-9a30-33c6befb37e3/9fd9bdccce53305ea2f00b7bee80b2d6.jpg"

        className="absolute inset-0 object-cover w-full h-full"
        style={{ backgroundAttachment: 'fixed' }}
        alt=""
        
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Call For Support <br className="hidden md:block" />
                <p className='text-sm font-sm mt-2'>Stuck with something, you need help? Then..</p>
              </h2>
              
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-4/12">
              <div className=" rounded p-7 sm:p-10">
                <h3 className="mb-4 border rounded-2xl text-xl text-white font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  <Link>Contact with us</Link>
                </h3>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Headercontact;