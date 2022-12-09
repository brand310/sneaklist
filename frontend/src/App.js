import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/create';


function App() {
  return (
    <div className='App'>
      {/* <Navbar/> */}
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="sneakers/create" element={<Create/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

