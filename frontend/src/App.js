import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from "./create";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;