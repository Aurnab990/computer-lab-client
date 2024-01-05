import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Messagedetails = () => {
    return (
        <div className='bg-white'>
      <Navbar></Navbar>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className='text-blue-500 text-xl mb-5'>Message From DEAN</h1>
      <div className='flex gap-10'>
        
        <img className='w-44 h-44' src='https://www.easternuni.edu.bd/assets/Faculty/engineeringDean.jpg'></img>
        <p className='text-black font-sm'>The Faculty of Engineering and Technology (E and T) of Eastern University aims at producing quality graduates imbued with the spirit of ethical values and equipped with knowledge and skills appropriate to the ever fast evolving science, engineering and technology so that they can face the challenges successfully wherever they are and also to contribute to social and economic development of the nation. With highly qualified faculty members and meticulously designed and periodically updated international standard curricula of the academic programs this faculty aggressively pursues, the goal of providing the highest quality education. The teaching-learning methods used here are made as far as possible participative, interactive, experiential, learner-centered and hands-on practice depending upon the nature of the course being taught. We emphasize on attaining a perfect blend of theory and practice. Our laboratories are furnished with state-of-the-art equipment and software programs to ensure an excellent learning environment where the students can practice their theoretical knowledge. Our teachers are knowledgeable, experienced and cordial. They have remarkable track records in their respective fields of teaching and research. At present this faculty has three departments: Department of Civil Engineering, Department of Computer Science & Engineering (CSE) and Department of Electrical & Electronic Engineering (EEE). B.Sc. in EEE program is accredited by the Institution of Engineers, Bangladesh: IEB. The alumni of the faculty are contributing successfully in the industry and academia within the country and the abroad. They are well established in the public and private sectors as well as an entrepreneur. They are working in power stations and distribution centers, software companies, mobile companies, multinational companies and many more sectors. A good number of alumni are also going for higher studies to North America, Europe, and Australia and so on. One of the mission statements of the faculty of Engineering and Technology is to ensure a spirited, congenial and inclusive environment where students, teachers and staff can flourish together. A tranquil environment is a must for proper grooming of the students. We have a wonderful green campus located at Ashulia Model Town, Savar, Dhaka. You are cordially welcome to visit and explore!</p>
      </div>

      <br></br>
      
      <h1 className='text-blue-500 text-xl mb-5'>Message From Chairperson</h1>
      <div className='flex gap-10'>
        <img className='w-44 h-44' src='https://www.easternuni.edu.bd/assets/Faculty/ChairpersonCSEMilonSir.jpg'></img>
        <p className='text-black font-sm'>We welcome you on behalf of the Department of Computer Science and Engineering (CSE) at Eastern University. Our department makes every effort to improve the educational quality according to the needs of today's students and employers. We have highly qualified, efficient and friendly faculty members who enable our students to gain the skills they need to shape their future.We offer courses along with computing laboratories and projects that improve the students’ learning experience and help them to make connection between theory and practice. We encourage our students to participate in extra-curricular activities, which give them a friendly atmosphere to flourish. We try to produce highly qualified graduates, who will serve the rapidly expanding Computer Science and Engineering fields of Bangladesh and they will be able to face the challenges of international arena. We value each and every person’s opinion of our institution. We do always strive to ensure the best learning environment and an outstanding educational experience for our students</p>
      </div>


      <div className="">
      
    </div>
      

  
</div>
<Footer></Footer>
  </div>
    );
};

export default Messagedetails;