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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
