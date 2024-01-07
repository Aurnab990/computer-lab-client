import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Courses from './Pages/Courses/Courses.jsx'
import Gallery from './Pages/Gallery/Gallery.jsx'
import Faculties from './Pages/Faculties/Faculties.jsx'
import Activity from './Pages/Activity/Activity.jsx'
import Achivements from './Pages/Achivements/Achivements.jsx'
import Placements from './Pages/Placements/Placements.jsx'
import Studentlogin from './Components/Login/StudentLogin/Studentlogin.jsx'
import StudentSignin from './Components/Login/StudentLogin/StudentSignin.jsx'
import Authprovider from './AuthProvider/Authprovider.jsx'
import Dashboard from './Components/StudentProfile/Dashboard/Dashboard.jsx'
import Updateprofile from './Components/StudentProfile/Dashboard/UpdateProfile/Updateprofile.jsx'
import Notification from './Components/StudentProfile/Dashboard/Notification/Notification.jsx'
import Facultydashboard from './Components/Login/FacultyLogin/Facultydashboard.jsx'
import Stdentsinfo from './Components/Login/FacultyLogin/Stdentsinfo.jsx'
import Nocticeboard from './Components/Login/FacultyLogin/Nocticeboard.jsx'
import Teacherinfo from './Components/Login/FacultyLogin/Teacherinfo.jsx'
import Acedemicrules from './Pages/Academicrules/Acedemicrules.jsx'
import Admissionprocedure from './Pages/Admissionprocedure/Admissionprocedure.jsx'
import Paymentsystem from './Pages/Admissionprocedure/Paymentsystem.jsx'
import Tuitionfees from './Pages/TuitionFees/Tuitionfees.jsx'
import Waiverlist from './Pages/Waiver/Waiverlist.jsx'
import Facultyinfo from './Pages/Faculties/Facultyinfo.jsx'
import Updatepaper from './Components/Login/FacultyLogin/Updatepaper.jsx'
import Facilities from './Pages/Facilities/Facilities.jsx'
import Adminboard from './Components/Admin/Admindashboard/Adminboard.jsx'
import Messagedetails from './Layout/MessageDetails/Messagedetails.jsx'
import Learnmore from './Layout/LearnMore/Learnmore.jsx'
import Research from './Pages/Research/Research.jsx'
import Success from './Components/Admin/Admindashboard/Success/Success.jsx'
import Teacherpanel from './Components/Admin/Admindashboard/TeacherPanel/Teacherpanel.jsx'
import Events from './Components/Admin/Admindashboard/Events/Events.jsx'
import Addteacher from './Components/Admin/Admindashboard/AddTeacher/Addteacher.jsx'
import Addnotice from './Components/Admin/Admindashboard/AddNotice/Addnotice.jsx'
import Allnotice from './Layout/FacultyHeader/Allnotice.jsx'
import Career from './Pages/Career/Career.jsx'
import Allnotices from './Components/Admin/Admindashboard/AllNotices/Allnotices.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
  path: '/course',
  element: <Courses></Courses>
  },
  {
    path: '/gallery',
    element: <Gallery></Gallery>
  },
  {
    path: '/faculties',
    element: <Faculties></Faculties>
  },
  {
    path: '/activity',
    element: <Activity></Activity>
  },
  {
    path: '/achivements',
    element: <Achivements></Achivements>
  },
  {
    path: '/placements',
    element: <Placements></Placements>
  },
  {
    path: '/research',
    element: <Research></Research>
  },
  {
    path: '/success',
    element: <Success></Success>
  },
  {
    path: '/addteacher',
    element: <Addteacher></Addteacher>
  },
  {
    path: '/addnotice',
    element: <Addnotice></Addnotice>
  },
  {
    path: '/allnotice',
    element: <Allnotice></Allnotice>
  },
  {
    path: '/events',
    element: <Events></Events>
  },
  {
    path: '/teacherpanel',
    element: <Teacherpanel></Teacherpanel>

  },
  {
    path: '/login',
    element: <Studentlogin></Studentlogin>
  },
  {
    path: '/signin',
    element: <StudentSignin></StudentSignin>
  },
  {
    path: '/messagedetails',
    element: <Messagedetails></Messagedetails>
  },
  {
    path: '/learnmore',
    element: <Learnmore></Learnmore>
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
  },
  {
    path: '/updateprofile',
    element: <Updateprofile></Updateprofile>
  },
  {
    path: '/notification',
    element: <Notification></Notification>
  },
  {
    path: '/facultydashboard',
    element: <Facultydashboard></Facultydashboard>
  },
  {
    path: '/studentinfo',
    element: <Stdentsinfo></Stdentsinfo>
  },
  {
    path: '/noticeboard',
    element: <Nocticeboard></Nocticeboard>
  },
  {
    path: '/updatepaper',
    element: <Updatepaper></Updatepaper>
  },
  
  {
    path: '/academicrules',
    element: <Acedemicrules></Acedemicrules>
  },
  {
    path: '/admissionprocedure',
    element: <Admissionprocedure></Admissionprocedure>
  },
  {
    path: '/facilities',
    element: <Facilities></Facilities>
  },
  {
    path: '/career',
    element: <Career></Career>
  },
  {
    path: '/admissionprocedure/paymentsystem',
    element: <Paymentsystem></Paymentsystem>
  },
  {
    path: '/allnotices',
    element: <Allnotices></Allnotices>
  },
  {
    path: '/feesstructure',
    element: <Tuitionfees></Tuitionfees>
  },
  {
    path: '/adminboard',
    element: <Adminboard></Adminboard>
  },
  {
    path: '/waiverlist',
    element: <Waiverlist></Waiverlist>
  },
  {
    path: '/update/:id',
    element: <Teacherinfo></Teacherinfo>,
    loader: ({params})=> fetch(`https://celtech-server.onrender.com/teacherinfo/${params.id}`)
  },
  {
    path:'/teacherdetails/:id', 
    element:<Facultyinfo></Facultyinfo>, 
    loader: ({params})=> fetch(`https://department-cse.onrender.com/teacherinfo/${params.id}`)

},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
    
  </React.StrictMode>,
)
