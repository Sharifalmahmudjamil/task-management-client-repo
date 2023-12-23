import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './Provider/AuthProvider';
import SignUp from './Pages/SignUp/SignUp';
import Dashboard from './Layout/Dashboard';
import CreateTask from './Layout/CreateTask/CreateTask';

import ToDo from './Layout/ToDo/ToDo';
import EditTask from './Layout/EditTask/EditTask';
import PreviousTask from './Layout/PreviousTask/PreviousTask';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import UserDisplay from './Layout/UserDisplay/UserDisplay';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"signUp",
        element:<SignUp></SignUp>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"contact",
        element:<ContactUs></ContactUs>
      },
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"createTask",
        element:<CreateTask></CreateTask>
      },
     
      {
        path:"todo",
        element:<ToDo></ToDo>,
        loader:()=>fetch(`https://task-management-platform-server-inky.vercel.app/management`)
      },
      {
        path:"edit/:id",
        element:<EditTask></EditTask>,
        loader:({params})=>fetch(`https://task-management-platform-server-inky.vercel.app/management/${params.id}`)
      },
      {
        path:"previousTask",
        element:<PreviousTask></PreviousTask>,
        loader:()=>fetch(`https://task-management-platform-server-inky.vercel.app/management`)
      },
      {
        path:"user",
        element:<UserDisplay></UserDisplay>,
        loader:()=>fetch(`https://task-management-platform-server-inky.vercel.app/management`)
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
