import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Pages/Home/Home';
import Root from './Components/Layout/Root/Root';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import AuthProvider from './Components/Provider/AuthProvider';
import AnimateLogin from './Components/Pages/Login/AnimateLogin';
import Checkout from './Components/Pages/Home/Services/Checkout';
import Booking from './Components/Pages/Home/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/alogin',
        element:<AnimateLogin></AnimateLogin>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/checkout/:id',
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/services')
      },{
        path:'/booking',
        element:<PrivateRoute><Booking></Booking></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
  </div>
)
