
import React from 'react';
import ComponentUI from "./componentUI";
import OpenData from './OpenData';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";


const router = createBrowserRouter([
  {path: '/', element: <ComponentUI/>},
  {path: '/', element: <OpenData/>}
]);

function App() {

  return (

    <div>
      
      <RouterProvider router={router}/>

    </div>
  )
}

export default App
