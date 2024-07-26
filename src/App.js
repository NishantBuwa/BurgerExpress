import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import OurMenu from "./pages/Our Menu/OurMenu"
import Contact from "./pages/Contact/Contact";
import L_S from './pages/L_S/L_S'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/our_menu" element={<OurMenu/>}></Route>
        <Route path="/contact_us" element={<Contact/>}></Route>
        <Route path="/login" element={<L_S/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;