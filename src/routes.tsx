import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Folks from "./components/Folks";
import Sponsors from "./components/Sponsors";
import Panelists from "./components/Panelists";
import Judges from "./components/Judges";
import Contact from "./components/Contact";

const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Folks" element={<Folks />} />
        <Route path="/Sponsors" element={<Sponsors />} />
        <Route path="/Panelists" element={<Panelists />} />
        <Route path="/Judges" element={<Judges />} />
        <Route path="/Contact" element={<Contact />} />
    </Routes>
);

export default AppRoutes;