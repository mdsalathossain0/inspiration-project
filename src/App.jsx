import React from 'react'

import {createRoutesFromElements,createBrowserRouter,Route, RouterProvider,} from "react-router-dom";
import Home from './pages/Home';
import Featured from './pages/Featured';
import Tutorial from './pages/Tutorial';
import Freelance from './pages/Freelance';
import Design from './pages/Design';
import Freebies from './pages/Freebies';
import RootLayout from './components/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/' element={<RootLayout/>}>
      <Route path="/" element={<Home />} ></Route>
     <Route path="/featured" element={<Featured />} ></Route>
     <Route path="/tutorial" element={<Tutorial />} ></Route>
     <Route path="/freelance" element={<Freelance />} ></Route>
     <Route path="/design" element={<Design />} ></Route>
     <Route path="/freebies" element={<Freebies />} ></Route>
     </Route>
    </>
  )
);


const App = () => {
  return (
    
      <RouterProvider router={router} />
    
  )
}

export default App