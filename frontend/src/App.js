import Navbar from "./components/Navbar";
import Home from "./components/Home";
import React from 'react';
import Create from './components/Create'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SneakerGallery from "./components/SneakerGallery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>           
            <Route path="/" element={<Home />} />
            <Route path="/sneakers" element={<SneakerGallery />} />
            <Route path="/sneakers/create" element={<Create />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div> 
  );
}

export default App;