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
    <Route path="/about" element={<About />} />
    <Route path="/timeline" element={<TimeLine />} />
    <Route path="/sponsors" element={<Sponsors />} />
    <Route path="/panelists" element={<Panelists />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/faq" element={<FAQ />} />
  </Routes>
);

export default App;
