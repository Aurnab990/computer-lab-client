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
    path: '/login',
    element: <Studentlogin></Studentlogin>
  },
  {
    path: '/signin',
    element: <StudentSignin></StudentSignin>
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
    
  </React.StrictMode>,
)
