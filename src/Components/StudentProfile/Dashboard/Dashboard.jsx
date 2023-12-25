import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { AuthContext } from '../../../AuthProvider/Authprovider';
import { database } from '../../../firebase.init';
import { collection, getDoc, getDocs } from 'firebase/firestore';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [students, setStudents] = useState([]);
    const [matchingStudent, setMatchingStudent] = useState(null);
  
    useEffect(() => {
      // Fetch student data from MongoDB
      fetch('http://localhost:5000/students')
        .then((res) => res.json())
        .then((data) => setStudents(data))
        .catch((error) => console.error('Error fetching student data:', error));
    }, []);

    useEffect(() => {
        const getMatchingStudent = () => {
          console.log('Students:', students.map(student => student.email));
          console.log('User Email:', user?.email);
      
          // Assuming MongoDB data has an 'email' field
          const matchingStudent = students.find(
            (student) => student.email && student.email.trim().toLowerCase() === user?.email.trim().toLowerCase()
          );
      
          console.log('Matching Student:', matchingStudent);
      
          if (matchingStudent) {
            setMatchingStudent(matchingStudent);
            console.log("Matched");
          } else {
            setMatchingStudent(null);
          }
        };
      
        getMatchingStudent();
      }, [students, user]);
  
    
  

    
    return (
        <div className="drawer lg:drawer-open bg-white ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">MENU</label>
    
    <div class="bg-gray-100 ">

   
            
            {
               matchingStudent ?
               <div class="border-1 shadow-lg shadow-gray-700 rounded-lg">

        
        <div class="flex rounded-t-lg bg-top-color sm:px-2 w-full">
            <div class="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
                <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"/>
            </div>

            <div class="w-2/3 sm:text-center pl-5 mt-10 text-start">
                <p class="font-poppins font-bold text-black text-heading sm:text-4xl text-2xl"> {matchingStudent.name}
                    
                </p>
                
            </div>

        </div>

        
        <div class="p-5">

            <div class="flex flex-col sm:flex-row sm:mt-10">

                <div class="flex flex-col sm:w-1/3">
                    
                    <div class="py-3 sm:order-none order-3">
                        <h2 class="text-lg font-poppins font-bold text-top-color">My Contact</h2>
                        <div class="border-2 w-20 border-top-color my-3"></div>

                        <div>
                            <div class="flex items-center my-1">
                                <a class="w-6 text-gray-700 hover:text-orange-600"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4">
                                        <path fill="currentColor"
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                        </path>
                                    </svg>
                                </a>
                                <div class="ml-2 truncate">{user?.email}</div>
                            </div>
                            <div class="flex items-center my-1">
                                <a class="w-6 text-gray-700 hover:text-orange-600"
                                    aria-label="Visit TrendyMinds YouTube" href="" target="_blank"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-4">
                                        <path fill="currentColor"
                                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                        </path>
                                    </svg>
                                </a>
                                <div></div>
                            </div>
                            <div class="flex items-center my-1">
                                <a class="w-6 text-gray-700 hover:text-orange-600"
                                    aria-label="Visit TrendyMinds Facebook" href="" target="_blank"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-4">
                                        <path fill="currentColor"
                                            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                        </path>
                                    </svg>
                                </a>
                                <div></div>
                            </div>
                            <div class="flex items-center my-1">
                                <a class="w-6 text-gray-700 hover:text-orange-600"
                                    aria-label="Visit TrendyMinds Twitter" href="" target="_blank"><svg class="h-4"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                        </path>
                                    </svg>
                                </a>
                                <div>amitpachange21</div>
                            </div>

                        </div>
                    </div>
                    
                    
                    
                    

                </div>


                <div class="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">

                    
                    <div class="py-3">
                        <h2 class="text-lg font-poppins font-bold text-top-color text-black">About Me</h2>
                        <div class="border-2 w-20 border-top-color my-3 text-black w-4/5">
                        <p>Name/ID: {user?.displayName}</p>
                        </div>
                        
                    </div>

                   
                    <div class="py-3">
                        <h2 class="text-lg font-poppins font-bold text-top-color text-black">Semester</h2>
                        <div class="border-2 w-20 border-top-color my-3"></div>

                        <div class="flex flex-col">

                            <div class="flex flex-col">
                                <p class="text-lg  text-gray-700"> {matchingStudent.semester}</p>
                                
                            </div>

                        </div>

                    </div>

                    
                    <div class="py-3">
                        <h2 class="text-lg font-poppins font-bold text-top-color text-black">Advisor</h2>
                        <div class="border-2 w-20 border-top-color my-3"></div>
                           
                        <div
    class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face"/>
    <div class="text-center space-y-2 sm:text-left">
        <p className='text-black text-2xl font-semibold'>{matchingStudent.advisorname}</p>
        

        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
    </div>
</div>

                    </div>
                    <div class="py-3">
                        <h2 class="text-lg font-poppins font-bold text-top-color text-black">Courses</h2>
                        <div class="border-2 w-full border-top-color my-3">

                            <li>
                            {matchingStudent.courses}
                            </li>
                        </div>

                        

                    </div>

                </div>
            </div>

        </div>

    </div>
               
               :
               <p>No Students Found</p>
                    
                    
            }
            
            
    

</div>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <Sidebar></Sidebar>
  
  </div>
</div>
    );
};

export default Dashboard;