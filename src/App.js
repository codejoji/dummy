import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './Components/Gallery';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage /> }/>
        <Route path="/gallery" element={<Gallery /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
