import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content" style={{backgroundColor: '#6B6D76'}}>
        <Home />
      </div>
    </div>
  );
}

export default App;
