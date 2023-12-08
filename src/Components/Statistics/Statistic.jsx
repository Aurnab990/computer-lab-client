import React from 'react';

const Statistic = () => {
    return (
        <div className='bg-white'>
            <div class="px-4 py-16 bg-white shadow-2xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-sky-300">8</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Faculties
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-sky-300">1200</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Students
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-sky-300">980</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Alumni
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-sky-300">245</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Research Papers
          </p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Statistic;