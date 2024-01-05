import React, { useEffect, useState } from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import '../Activity/Activity.css'

const Activity = () => {
  const [events, setEvents] = useState(['']);
  useEffect(() => {
    fetch('https://department-cse.onrender.com/events')
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])
  return (
    <div className='bg-gray-200'>
      <Navbar></Navbar>
      <h1 className='text-center font-bold text-2xl text-black'>ACTIVITIES</h1>
      <p className='text-center text-black mb-7'>Department of Computer Science and Engineering <span id='eu' className='bg-gray-700 text-white p-1 rounded-xl'>EU</span></p>
      <div className="flex w-full bg-gray-200">

        <div className="grid h-full flex-grow card bg-gray-200 px-4 rounded-box place-items-center w-2/3 mb-10">



          <div class="grid gap-4 bg-white border-2 rounded shadow-2xl">
            <div>
              <img class="h-auto max-w-full" src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/375328520_822593776224872_5141684872996764557_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHEYRJ7_UMptrsDoMMd_lSDpqGLWkxo3n6moYtaTGjefoRgqxz-dLJTgZoMuGrWg_oYtKEOQ_up3e9tWSpbbNLs&_nc_ohc=LvXS8lLOC6gAX_owk-g&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCLIuA93B6jJVxOPARZwH0I4yBoL-LeiluxLm4fqRUFsA&oe=6577E0F9" alt="" />
            </div>
            <h1 className='text-black font-bold text-2xl px-6'>WORKSHOPS</h1>
            <p className='text-black  px-6 -mt-4'>Carried out by CSE Dept, Eastern University</p>
            <li className='text-black font-semibold text-lg  px-8'>Workshops on Basics of a programming language, CNN and Prize Giving Ceremony.</li>
            <div class="grid grid-cols-3 gap-2">
              <div>
                <img class="h-auto max-w-full " src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/405338929_869300918220824_3087367736615388824_n.jpg?stp=c52.0.206.206a_dst-jpg_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeE-OQYyP8r3aHN93SOEyq3jgvQT0F7CVV6C9BPQXsJVXs9sNEGyeEnKHto_cdhVtryAzgbE2O7WXOuaU5YJW0WM&_nc_ohc=SW4dWFllq08AX9BV2rO&_nc_oc=AQm0gDct65CDrANM0canulythacy0NNe4Czwb448sKOnmLaMG2M9vd6E12dW4ZEEDKA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfB-6vl_bId3Rhrk8w8saR0hdiAwyz-Yd3mIGqqTy2uD8Q&oe=6576EAFA" alt="" />
              </div>

              <div>
                <img class="h-auto max-w-full " src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/405290376_869300264887556_2523620972370885713_n.jpg?stp=c52.0.206.206a_dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeHH8hRaxOiOg8CmzNohIhuxdXu-DmEXJhx1e74OYRcmHNMs4sY1cLt2jrUHbhw-or3cCs1r2IaU3udJpZ5IhHUo&_nc_ohc=XZAUWts-6XkAX8x1rfK&_nc_ht=scontent.fdac151-1.fna&oh=00_AfA-geLWOd8DGAn8_df_EtN_ZZTBkeqYgQVbqt2nzpDICg&oe=65778F4E" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full " src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/374974568_822594299558153_8115224542175536659_n.jpg?stp=c80.0.206.206a_dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeFqi6xoGtgZ9IKOJgqyc1KNfnV25XZZydd-dXbldlnJ12SUyOaJKJilvYjd_z_Qcz4Rdc28p0lPb-6GKD3fn3At&_nc_ohc=0MomVbvtq4EAX_0bFoJ&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBksG17E1SORgEXBFgtwxT5zkjh_hxRanqt5bwoKXzk5Q&oe=6577ABA1" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full " src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/372685320_820273073123609_3103284271541491195_n.jpg?stp=c35.0.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeGVaRoemOi6krc2VCLlOMDqp0lPksFpRImnSU-SwWlEiXMNckqTK3QdXRxCdbR70xX2vZpdoDbGUA5ZK-2XbW2i&_nc_ohc=qSqb0pzaP00AX8C1VAL&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCxkUENiizwEl35Zp_HllINLoPsyqGiFqhp-qlLzz62_w&oe=6577FB10" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full " src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/350109706_1328273831235921_1807148307089559440_n.jpg?stp=c52.0.206.206a_dst-jpg_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeEbRyjgsDJPoo8J9-K4mv57_uUp-QMB3un-5Sn5AwHe6Tw8_EfTThzqKU20Qjt-YH-uMJcKtNxd7KdIYBkkVVGq&_nc_ohc=P0ux4gi7rjEAX_n7rEC&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCER3clTNpm2BUZhDXLgGVClx4sg9D0aoAQUK_Nkawuaw&oe=657783E7" alt="" />
              </div>
            </div>
            <div className='text-black px-10'>
              <li className='py-2'>Web Development: Introduction to JavaScript for interactivity.</li>
              <li className='py-2'>Data Analysis and Visualization:Introduction to data analysis with tools like Pandas.</li>
              <li className='py-2'>Machine Learning and AI:Hands-on experience with a machine learning library like TensorFlow or Scikit-Learn.</li>
              <li className='py-2'>Cybersecurity Basics: Basic principles of securing personal and organizational data.</li>
              <li className='py-2'>Database Management: Introduction to databases (SQL or NoSQL). Querying databases using SQL.</li>
              <li className='py-2'>Network Fundamentals: Understanding protocols (TCP/IP, HTTP, etc.).</li>
              <li className='py-2'>Linux Basics: Introduction to the Linux operating system.</li>
            </div>



            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8 lg:py-20">
              <div className="MB-8 ">
                <div className="p-5 duration-300 transform bg-white border-2 rounded shadow-2xl hover:-translate-y-2">
                  <h6 className="mb-2 font-bold leading-5 text-2xl text-black">CONFERENCES</h6>
                  <li className='px-2'></li>
                  <button className="btn btn-outline text-black">NEXT..</button>
                </div>


              </div>

            </div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8 lg:py-20 -mt-32">
              <div className=" mb-8 ">
                <div className="p-5 duration-300 transform bg-white border-2 rounded shadow-2xl hover:-translate-y-2">
                  <h6 className="mb-2 font-bold leading-5 text-2xl text-black">GUEST LECTURERS</h6>
                  <li className='px-4 text-black font-semibold'>A Career guideline by EUCC. Where guest lecturer are the most prestigious from top companies</li>
                  <li className='px-4 text-black font-semibold'>You can learn a total Career path from them. Stay tunned with EUCC.</li>

                  <div class="grid grid-cols-4 gap-2 mt-5">

                    <div>
                      <img class="h-auto max-w-full " src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/331947924_1102491871148261_5681515561184650653_n.jpg?stp=c0.34.206.206a_dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeHO37G-ZFTs09jmrhVYaA6gUmBiKlka4hhSYGIqWRriGLTD396uQWZeODtlSdBk9TUuUn2B9S2JxUBdcco4hEuD&_nc_ohc=yFY0N5Ulz6kAX9-gsah&_nc_ht=scontent.fdac151-1.fna&oh=00_AfDB5X30wO9J8NWD8DsbVzDCSk4YvTV49JgMlqZbR-wKHQ&oe=6578A96D" alt="" />
                    </div>
                    <div>
                      <img class="h-auto max-w-full " src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/332038284_750896976404535_7830423292736727409_n.jpg?stp=c52.0.206.206a_dst-jpg_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeHuSrQr-txBaYIpXy_7aXoFTSaT9PqYY3hNJpP0-phjeFxVRCmWip1OTLtdZtsmFL0Jt754mtoMRc5IZ2rELKuX&_nc_ohc=nbfTHdof-aAAX_pPPTw&_nc_ht=scontent.fdac151-1.fna&oh=00_AfDhdZA9qq_KGVF7mqzAasK9Di6vB6i7rBTWIVoN45bbJw&oe=65774FEC" alt="" />
                    </div>
                    <div>
                      <img class="h-auto max-w-full " src="https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/158602971_1321544398227349_8078375069975773820_n.png?stp=c20.0.206.206a_dst-png_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=c21ed2&_nc_eui2=AeE9jJ5hbUBH37Tn69UAXf-1MYQb9BuEYhcxhBv0G4RiF9jjCodeXSY5VaHcWr48p6wqRD9c6nFWIXw4ug4o9X93&_nc_ohc=m1sMV58UJQkAX_MrlRK&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCsLmRNbmL4I2aTbbbFYdsBe1I5zuQCEflRZovyTforug&oe=659A4F88" alt="" />
                    </div>
                    <div>
                      <img class="h-auto max-w-full " src="https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/156522911_1321635711551551_2578831127714875334_n.png?stp=c20.0.206.206a_dst-png_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=c21ed2&_nc_eui2=AeE-6diS9lmPBgGUCB8O_lzGlPY9BVHObOCU9j0FUc5s4NIucH1-XaEITtpmlYvT852a1hZzP8gzsADm1bcxXGR8&_nc_ohc=wHUwefaOtu0AX_Rh3H4&_nc_oc=AQk6haG_44lndnWKf-2YYtkRMBk7j_Vx108_ox__IuOqCjCn6dGpZ127P6F9zGW6Dco&_nc_ht=scontent.fdac151-1.fna&oh=00_AfDACE4v7gL_RDJOl6e81V5kMYtyTBHQ1VgxkbgtHK56KQ&oe=659A6A9B" alt="" />
                    </div>
                  </div>
                  <button className="btn btn-outline text-black mt-4">NEXT..</button>
                </div>


              </div>

            </div>
          </div>



        </div>

        <div id='upcoming' className="grid h-20 flex-grow card  rounded-box place-items-center bg-white border-2 shadow-2xl">



          <h1 className='text-orange-600 text-start font-bold uppercase'>UPCOMING EVENTS</h1>

          
            

              
              <li id='' className="-mt-24 grid grid-cols-1 col-gap-8 mx-auto sm:col-gap-10 lg:max-w-screen-lg ">

                <div className="">
                  
                  {
                    events.map(event =>
                      <div className="flex border-2 mb-3 p-4 flex-col justify-center">
                        <p className="text-lg text-black font-bold">{event.name}</p>
                        <p className="text-sm text-gray-800">on {event.date}</p>
                        <p className="text-sm text-gray-800">at {event.venue}</p>
                        <p className="text-sm text-gray-800">Prize: {event.prize}</p>
                      </div>
                    )
                  }
                </div>
              
            



          </li>
        </div>
      </div>
    </div>
  );
};

export default Activity;