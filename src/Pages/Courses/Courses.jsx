import React from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Semesterfirst from '../../Components/Semester/Semesterfirst';
import Semestersecond from '../../Components/Semester/Semestersecond';
import '../Courses/Courses.css'


const Courses = () => {
    return (
        <div className='bg-white'>
        <Navbar></Navbar>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  
         <h1 className='text-blue-500 text-2xl font-semibold text-center'> Course Distribution</h1>

         

<div class="relative overflow-x-auto lg:ml-80">
    <table class="w-2/3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 rounded-s-lg">
                    Courses
                </th>
                
                <th scope="col" class="px-6  rounded-e-lg">
                    Credit Hours
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Mathematics + Statistics
                </th>
                
                <td class="px-12 py-2 text-black">
                    18
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Basic Science
                </th>
                
                <td class="px-12 py-4 text-black">
                    11
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Humanities
                </th>
                
                <td class="px-12 py-4 text-black">
                    17
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Basic + Major Engeneering
                </th>
                
                <td class="px-12 py-4 text-black">
                    104
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="font-semibold text-blue-500 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-12 py-3">150</td>
                
            </tr>
        </tfoot>
    </table>

    

</div>
<table className='border-2 w-full border-black text-black mt-10'>
    <tr className='boder-2 border-black '>
        <th>1<sup>st</sup> Semester</th>
    </tr>
  <tr className='border-2 border-black'>
  <th className='border-2 border-black w-28'>Course Code</th>
    <th className='border-2 border-black'>Course Title</th>
    <th className='border-2 border-black w-96'>Hours/week
    <th className='border-2 border-black w-56'>Theory</th>
    <th className='border-2 border-black w-56'>Lab</th>
    </th>
    <th className='border-2 border-black'>Credits</th>
    <th className='border-2 border-black'>Prerequisite</th>
  </tr>
  <tr>
  <td className='border-2 border-black'>CSE 109</td>
    <td className='border-2 border-black text-center'>Computer Fundamentals</td>
    <td className='border-2 border-black'>
    <td className='border-2 border-black w-80 text-center'>3</td>
    <td className='border-2 border-black w-80 text-center'>0 </td>
    
    </td>
    
    <td className='border-2 border-black text-center'>3.0</td>
  </tr>
  <tr>
  <td className='border-2 border-black'>CSE 110</td>
    <td className='border-2 border-black text-center'>Computer Fundamentals Laboratory</td>
    <td className='border-2 border-black'>
    <td className='border-2 border-black w-80 text-center'>0</td>
    <td className='border-2 border-black w-80 text-center'>3</td>
    
    </td>
    
    <td className='border-2 border-black text-center'>1.0</td>
  </tr>

  <tr>
  <td className='border-2 border-black'>ENG 103</td>
    <td className='border-2 border-black text-center'>Learning and Speaking</td>
    <td className='border-2 border-black'>
    <td className='border-2 border-black w-80 text-center'>3</td>
    <td className='border-2 border-black w-80 text-center'>0</td>
    
    </td>
    
    <td className='border-2 border-black text-center'>3.0</td>
  </tr>

  <tr>
  <td className='border-2 border-black'>MAT 101</td>
    <td className='border-2 border-black text-center'>Calculas I</td>
    <td className='border-2 border-black'>
    <td className='border-2 border-black w-80 text-center'>3</td>
    <td className='border-2 border-black w-80 text-center'>0</td>
    
    </td>
    
    <td className='border-2 border-black text-center'>3.0</td>
  </tr>

  <tr>
  <td className='border-2 border-black'>PHY 101</td>
    <td className='border-2 border-black text-center'>Physics I</td>
    <td className='border-2 border-black'>
    <td className='border-2 border-black w-80 text-center'>3</td>
    <td className='border-2 border-black w-80 text-center'>0</td>
    
    </td>
    
    <td className='border-2 border-black text-center'>3.0</td>
  </tr>

  <tr>
  <td className='border-2 border-black'>PHY 102</td>
    <td className='border-2 border-black text-center'>Physics I Laboratory</td>
    <td className='border-2 border-black'>
    <td className='border-2 border-black w-80 text-center'>0</td>
    <td className='border-2 border-black w-80 text-center'>3</td>
    
    </td>
    
    <td className='border-2 border-black text-center'>1.0</td>
  </tr>
</table>

<table className='border-2 w-full border-black text-black mt-10'>
    <tr className='boder-2 border-black '>
        <th>2<sup>nd</sup> Semester</th>
    </tr>
  <tr className='border-2 border-black'>
  <th className='border-2 border-black w-28'>Course Code</th>
    <th className='border-2 border-black'>Course Title</th>
    <th className='border-2 border-black w-96'>Hours/week
    <th className='border-2 border-black w-56'>Theory</th>
    <th className='border-2 border-black w-56'>Lab</th>
    </th>
    <th className='border-2 border-black'>Credits</th>
    <th className='border-2 border-black'>Prerequisite</th>
  </tr>
  <tr>
  <td className='border-2 border-black'>CSE 103</td>
    <td className='border-2 border-black text-center'>Structure Programming</td>
    <td className='border-2 border-black'>
    <td className='border-2 border-black w-80 text-center'>3</td>
    <td className='border-2 border-black w-80 text-center'>0 </td>
    
    </td>
    
    <td className='border-2 border-black text-center'>3.0</td>
  </tr>
  <tr>
  <td className='border-2 border-black'>CSE 104</td>
    <td className='border-2 border-black text-center'>Structure Programming Laboratory</td>
    <td className='border-2 border-black'>
    <td className='border-2 border-black w-80 text-center'>0</td>
    <td className='border-2 border-black w-80 text-center'>3</td>
    
    </td>
    
    <td className='border-2 border-black text-center'>1.0</td>
  </tr>

  <tr>
  <td className='border-2 border-black'>ENG 107</td>
    <td className='border-2 border-black text-center'>Reading and Grammer</td>
    <td className='border-2 border-black'>
    <td className='border-2 border-black w-80 text-center'>3</td>
    <td className='border-2 border-black w-80 text-center'>0</td>
    
    </td>
    
    <td className='border-2 border-black text-center'>3.0</td>
  </tr>

  <tr>
  <td className='border-2 border-black'>MAT 103</td>
    <td className='border-2 border-black text-center'>Calculas II</td>
    <td className='border-2 border-black'>
    <td className='border-2 border-black w-80 text-center'>3</td>
    <td className='border-2 border-black w-80 text-center'>0</td>
    
    </td>
    
    <td className='border-2 border-black text-center'>3.0</td>
  </tr>

  <tr>
  <td className='border-2 border-black'>PHY 103</td>
    <td className='border-2 border-black text-center'>Physics II</td>
    <td className='border-2 border-black'>
    <td className='border-2 border-black w-80 text-center'>3</td>
    <td className='border-2 border-black w-80 text-center'>0</td>
    
    </td>
    
    <td className='border-2 border-black text-center'>3.0</td>
  </tr>

  
</table>

    <div>
        <h1 className='text-center mt-24 text-xl text-red-500'>Note: Further Course will Provide by advisor.</h1>
   
  </div>
</div>
<Footer></Footer>
    </div>
    );
};

export default Courses;