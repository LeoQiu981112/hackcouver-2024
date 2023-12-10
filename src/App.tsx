import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import TimeLine from "./components/TimeLine";
import Folks from "./components/Folks";
import Sponsors from "./components/Sponsors";
import Panelists from "./components/Panelists";
import Judges from "./components/Judges";
import Contact from "./components/Contact";


const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/TimeLine" element={<TimeLine />} />
    <Route path="/Folks" element={<Folks />} />
    <Route path="/Sponsors" element={<Sponsors />} />
    <Route path="/Panelists" element={<Panelists />} />
    <Route path="/Judges" element={<Judges />} />
    <Route path="/Contact" element={<Contact />} />
  </Routes>
);

export default App;
