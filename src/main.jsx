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


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
      }
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
        loader:()=>fetch(`http://localhost:5000/management`)
      },
      {
        path:"edit/:id",
        element:<EditTask></EditTask>,
        loader:({params})=>fetch(`http://localhost:5000/management/${params.id}`)
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
