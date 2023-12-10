import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import TimeLine from "./components/TimeLine";
import Sponsors from "./components/Sponsors";
import Panelists from "./components/Panelists";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/TimeLine" element={<TimeLine />} />
    <Route path="/Sponsors" element={<Sponsors />} />
    <Route path="/Panelists" element={<Panelists />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/FAQ" element={<FAQ />} />
  </Routes>
);

export default App;
