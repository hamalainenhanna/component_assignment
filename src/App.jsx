
import React from 'react';
import ComponentUI from "./componentUI";
import Weather from './OpenDataWeather';
import { createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import OpenData from './OpenDataWeather';


const router = createBrowserRouter([
  {path: '/', element: <ComponentUI/>},
  {path: '/componentUI', element: <ComponentUI/>},
  {path: '/OpenDataWeather', element: <OpenData/>}
])


function App() {

  return (

      <div>
      <RouterProvider router={router} />
      </div>
  )
}


export default App;