import React from "react";
import Login from "./auth/loginForm";
import Loading from "./loading";
import Shadi from "./routes/shadi-loan.jsx";
import Education from "./routes/education-loan.jsx"
import Buisnees from "./routes/buisnees-loan.jsx"
import Home from "./routes/home-loan.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'; 
import Index from "./index.jsx";
export default function App() {


  const router = createBrowserRouter([
    { path: "/Login", element: (<Login />) },
    { path: "/Loading", element: (<Loading />) },
    { path: "/", element: (<Index />) },
    { path: "/Shadi", element: (<Shadi />) },
    { path: "/Buisnees", element: (<Buisnees />) },
    { path: "/Education", element: (<Education />) },
    { path: "/Home", element: (<Home />) },
  ]);


  return <RouterProvider router={router} />

}