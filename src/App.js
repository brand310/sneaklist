import Navbar from "./Navbar";
import Home from "./Home";
import React from "react";
import Create from "./Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/sneakers/create" element={ <Create/> }/>
      </Routes>
    </div>
  );
}

export default App;

