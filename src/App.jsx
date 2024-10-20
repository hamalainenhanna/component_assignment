
import React from 'react';
import ComponentUI from "./componentUI";
import OpenData from './OpenData';
import { createBrowserRouter, Link, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {path: '/', element: <ComponentUI/>},
  {path: '/componentUI', element: <ComponentUI/>},
  {path: '/OpenData', element: <OpenData/>}
])


function App() {

  return (

      <div>
      <RouterProvider router={router} />
      </div>
  )
}


export default App;
