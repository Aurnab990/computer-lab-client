import React from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Tuitionfees = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className='text-center text-blue-600'>Fees Structure</h1>
            <table className='border-2 w-full border-black text-black mt-10'>
    <tr className='boder-2 border-black '>
        
</tr>
  <tr className='border-2 border-black bg-green-accent-400'>
  <th className='border-2 border-black w-28'>Programs</th>
    <th className='border-2 border-black'>Total Credit Hours</th>
    <th className='border-2 border-black'>Total Fee Per Credit</th>
    <th className='border-2 border-black'>Tuition Fees</th>
    <th className='border-2 border-black'>Total Cost</th>
    <th className='border-2 border-black w-96'>Waiver on Result SSC and HSC level
    <th className='border-t-2 border-r-2 border-black w-56'>Total GPA 10 </th>
    <th className='border-t-2 border-r-2 border-black w-56'>Total GPA <br></br>9.50-10.0</th>
    <th className='border-t-2 border-r-2 border-black w-56'>Total GPA <br></br>9.00-9.49</th>
    <th className='border-t-2 border-r-2 border-black w-56'>Total GPA <br></br>8.00-8.99</th>
    <th className='border-t-2  border-black w-56'>Total GPA <br></br>6.00-7.99</th>
    </th>
  </tr>
  <tr>
  <td className='border-2 border-black text-center'></td>
    <td className='border-2 border-black text-center'></td>
    <td className='border-2 border-black text-center'></td>
    <td className='border-2 border-black text-center'></td>
    <td className='border-2 border-black text-center'></td>
    <td className='border-2 border-black'>
    <td className='border-r-2 border-black w-60 text-center'>100%</td>
    <td className='border-r-2 border-black w-60 text-center'>35%</td>
    <td className='border-r-2 border-black w-60 text-center'>30%</td>
    <td className='border-r-2 border-black w-60 text-center'>25%</td>
    <td className=' border-black w-80 text-center'>20% </td>
    
    </td>
    
  </tr>
  <tr>
  <td className='border-2 border-black text-center'>CSE</td>
    <td className='border-2 border-black text-center'>155</td>
    <td className='border-2 border-black text-center'>2,600</td>
    <td className='border-2 border-black text-center'>4,03,000</td>
    <td className='border-2 border-black text-center'>5,45,000</td>
    <td className='border-2 border-black'>
    <td className='border-r-2 border-black w-60 text-center'>1,42,000</td>
    <td className='border-r-2 border-black w-60 text-center'>4,03,950</td>
    <td className='border-r-2 border-black w-60 text-center'>4,24,100</td>
    <td className='border-r-2 border-black w-60 text-center'>4,44,250</td>
    <td className=' border-black w-80 text-center'>4,64,400</td>
    
    </td>
    
  </tr>
  
</table>
        <div>

        <table class="w-2/3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-14">
        <thead class="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 rounded-lg text-center">
                    Payable During Admission
                </th>
                
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Admission Form
                </th>
                
                <td class=" text-black">
                TK. 500
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Admission Fee
                </th>
                
                <td class=" text-black">
                TK. 12,000
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Registration Fee
                </th>
                
                <td class="text-black">
                TK. 16,000
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Security Money (refundable)
                </th>
                
                <td class="text-black">
                    TK. 2,000
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr class=" border-t-2 border-red-500 font-semibold text-blue-500 dark:text-white">
                <th scope="row" class="px-6 py-4 text-base">Total Payable</th>
                <td class="">TK. 30,500</td>
                
            </tr>
        </tfoot>
    </table>
        
      </div>
    </div>
    <Footer></Footer>
        </div>
    );
};

export default Tuitionfees;