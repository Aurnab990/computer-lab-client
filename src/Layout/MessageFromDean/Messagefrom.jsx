import React from 'react';

const Messagefrom = () => {
    return (
        <div>
            <div className="px-4 py-16 -mt-44 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-orange-600">
      <div className="grid gap-8 row-gap-5 md:grid-cols-2">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
              <div className="flex items-center justify-center w-20 h-20 rounded-full  lg:w-56 lg:h-56">
                <img className='w-full' src='https://www.easternuni.edu.bd/assets/Admins%2FOffice_New%2FChairperson.jpg'></img>
                
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  Message From Hounerable DEAN of E&T
                </h6>
                <p className="mb-2 text-sm text-gray-900">
                We have highly qualified, efficient and friendly faculty members who enable our students to gain the skills they need to shape their future.
                </p>
              </div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Know more
              </a>
            </div>
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
              <div className="flex items-center justify-center w-20 h-20 rounded-full lg:w-56 lg:h-56">
                <img src='https://www.easternuni.edu.bd/assets/Admins%2FOffice_New%2FMilonSir.jpg'></img>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  Message From Hounerable Chairperson 
                </h6>
                <p className="mb-2 text-sm text-gray-900">
                We welcome you on behalf of the Department of Computer Science and Engineering (CSE) at Eastern University. Our department makes every effort to improve the educational quality.
                </p>
              </div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Know more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Messagefrom;