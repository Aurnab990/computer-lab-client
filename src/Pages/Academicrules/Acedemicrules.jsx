import React from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Acedemicrules = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className='text-center text-blue-300 text-3xl'>Academic Rules & Procedures</h1>
            <div className='pr-12 pl-12'>
            <h2 className='text-blue-300 text-xl mt-10'>Non Degree Students</h2>
            <p className='text-black font-sm'>A student of another university or equivalent educational institution may register in courses as a non degree student on payment of requisite fees for such students. The total number of courses he/she may register for, shall not exceed 50 percent of the courses required for the degree.</p>
            </div>

            <div className='pr-12 pl-12 mt-4'>
            <h2 className='text-blue-300 text-xl'>Code of Conduct</h2>
            <p className='text-black font-sm'>Every student must submit the required certificates and other documents at the time of admission. Applicants for admission who are not able to produce one or more documents at the time of admission may be admitted provisionally. All provisionally admitted students are required to submit appropriate documents within a given deadline as a prerequisite for continued enrollment.</p>
            </div>

            <div className='pr-12 pl-12 mt-4'>
            <h2 className='text-blue-300 text-xl'>Academic Standing of a Student</h2>
            <p className='text-black font-sm'>To remain in good standing, a student must maintain a minimum GPA of 2.50 in a semester. The GPA is calculated on the basis of the number of courses completed, including the course(s) in which the student receives "F" grade, until he or she repeats the course and the "F" grade is substituted by a passing grade.


Academic Probation and Dismissals

A student with a GPA of less than 2.50 in a semester is placed on probation, and is allowed a maximum of two semesters to raise his/her GPA. A student who fails to achieve a GPA of 2.50 within two consecutive semesters may be allowed additional chance depending on the improvement made, may be asked to transfer to another degree program or may be dismissed from the university.


Readmission after Academic Dismissal

Students who have been dismissed from the university for academic reasons may apply for readmission. Such applications would be treated on individual basis. However, upon readmission students may seek credit transfer for courses where they had earned a minimum of C+ grade before dismissal. Readmission is granted only once.


Withdrawal from the Program

1. If a student who has not registered in a semester but is willing to withdraw from a semester or more must apply to the respective Dean/Chairperson. A registered student who wishes to withdraw from a semester (dropping all courses for the semester) must do so within the deadline by contacting the Dean/Advisor of the respective Faculty. Withdrawals are not allowed after the deadline except in the case of verifiable non-academic hardships if granted by the appropriate authority of the University. A statement is entered on the withdrawing student's academic record indicating the official withdrawal. The grade "F" is recorded for students who abandon their courses without officially withdrawing from a semester or from a course.
2. A student who has not yet registered in a semester and wishes to temporarily withdraw from the program for a semester or more , must apply to the Dean of the concerned Faculty stating the reason for withdrawal. The Dean may permit withdrawal if the reason is acceptable.
3. A student who wishes to permanently withdraw from the program may do so by applying to the Dean of the concerned Faculty.
4. A student who did not formally withdraw from a program and later on wants to register in courses will have to seek permission from the Dean and pay 50% of the admission fees.


Re-entry

After the withdrawal period is over, a student may apply for re-entry into the Program and in such case he/she must complete the requirements for the degree at the time of re-entry.


Change of Degree Program

Students seeking to change their Program must submit a written request to the respective Dean/Advisor. Upon recommendation from the Dean/Advisor of the Faculty to which the student intends to transfer, the appropriate/relevant office of the university shall make the necessary changes in the student's record.</p>
            </div>

            <div className='pr-12 pl-12 mt-4'>
            <h2 className='text-blue-300 text-xl'>Tests and Exams</h2>
            <p className='text-black font-sm'>Quizzes /Tests /className Assignments

Mid-term Exam

Final Exam

Fairness in Tests, Quizzes, Examinations, etc.

Make up Quizzes, Tests and Exams

Computation of GPA and CGPA

Incomplete Grade

Course Retake

Grading System.

Computation of Grade Points Average (GPA ) and Cumulative Grade Points Average (CGPA)

                (GP in C1 x CH) + (GP in C1 x CH) + ………. +(GP in Cn x CH)

GPA =    -------------------------------------------------------------------------------

                 CH of C1 + CH of C2 +………….+ CH of Cn

GP = Grade point earned

CH = Credit hours of the course attempted

C1,2 …n= Courses

                   (GPA of all courses completed) x (total credit hours attempted in all courses)

2.  CGPA =   --------------------------------------------------------------------------------------------

                                                      Total credit hours attempted in all semesters</p>
            </div>

            <div className='pr-12 pl-12 mt-4'>
            <h2 className='text-blue-300 text-xl'>Rules of Class Attendance</h2>
            <p className='text-black font-sm'>A student is expected to attend all classes in a course. All students are required to be present in at least 80% of the classes including tutorial classes held, to sit for the final examination. For example, if there are 26 classes and 13 tutorial /lab etc. of a course in a semester, the percentage of attendance will be computed out of 39. If a student fails to attend 80% classes of a course, s/he will not be allowed to sit for the final exam. It is the responsibility of the students to keep course teachers informed of his/her absences from classes in case of emergencies. Absence in more than 20% of the total number of classes without any application may lead to cancellation of registration of the student in the semester.

If a student remains absent in three consecutive classes, s/he must submit an application to the course teacher and must obtain permission to attend the next class. In the application, s/he must explain the exact reason for remaining absent, not just that s/he was not in a position to attend classes for reasons beyond control or had family problems. However, just applying is not enough - the student must submit authentic documents in support of his/her application. All medical documents submitted in support of an application must be attested by Medical Officer of Eastern University.

If a student remains absent in 5 or more classes of a course in a semester, s/he must apply to the Dean of the Faculty for obtaining permission to continue the semester/ appear in the examination.</p>
            </div>
      
        
    </div>
    <Footer></Footer>
        </div>
    );
};

export default Acedemicrules;