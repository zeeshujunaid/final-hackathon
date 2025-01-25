import React from "react";
import Signup from "./auth/signupForm"
import Login from "./auth/loginForm";
import Loading from "./loading";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'; 
import Index from "./index.jsx";
// import 'flowbite';
export default function App() {


  const router = createBrowserRouter([
    { path: "/", element: (<Loading />) },
    { path: "/Signup", element: (<Signup />) },
    { path: "/Login", element: (<Login />) },
    { path: "/Loading", element: (<Loading />) },
    { path: "/Index", element: (<Index />) },
  ]);


  return <RouterProvider router={router} />

}