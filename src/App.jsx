
// import './App.css'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Footer } from './Components/Footer/Footer'
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";



function App() {

  return (
    <>
    <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/About" element={<About/>} /> 
      
      </Routes>  
      </BrowserRouter>
  
    <Footer/>
    </>
  )
}

export default App
