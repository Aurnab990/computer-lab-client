import React from 'react';


const Carosel = () => {
    return (
        <div className=''>
            <section class="bg-center bg-no-repeat bg-[url('https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/82261639_1001608386887620_4665192635101609984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeE9y7lLWiiaDV9Jkql97P_NA_tvzXf1xTED-2_Nd_XFMZ5FS6F5BaGoiYixzYsqeIFdsny4TAIRa3QRzAIePx4o&_nc_ohc=-SOLcN0AtQgAX_9YHEf&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAiIXtUJzvbhZjckZS6RxCS8EI24VXjwbIKeP-GdfOdSw&oe=65B4D1B2')] bg-gray-700 bg-blend-multiply w-full h-full"
            style={{ backgroundAttachment: 'fixed' }}
            >
    <div class="px-4 w-full text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-7xl">Welcome To <span className='text-7xl'><span className='text-blue-500'>E</span><span className='text-yellow-400'>U</span></span></h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Welcome To Eastern University Computer Science and Engineering Department. Most energetic with more curiousness we welcomed you with depth of our heart. Let's explore our Life with programming.</p>
        <div class="flex flex-col center space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section>

            




        </div>
    );
};

export default Carosel;