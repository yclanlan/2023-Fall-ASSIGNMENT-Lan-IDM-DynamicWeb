import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import People2 from "./pages/People2";
import People1 from "./pages/People1";
import Leave from "./pages/Leave";
import Finish from "./pages/Finish";


import Button from './components/Button'
import {MdFlutterDash} from 'react-icons/md'


function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Navigation />} >
              
      
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="leave" element={<Leave />} />
              <Route path="people1" element={<People1 />} />
              <Route path="people2" element={<People2 />} />
              <Route path="finish" element={<Finish />} />

              <Route path="*" element={<NoPage />} />
      </Route>

    </Routes>

  </BrowserRouter>


    </>
  );
}

export default App;
