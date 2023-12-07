import * as React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<h1>Hello world!</h1>} />
        <Route path="/Info" element={<h1>About</h1>} />
        <Route path="/Mentors" element={<h1>Mentors</h1>} />
        <Route path="/Sponsors" element={<h1>Sponsors</h1>} />
        <Route path="/Panelists" element={<h1>Panelists</h1>} />
        <Route path="/Judges" element={<h1>Judges</h1>} />
        <Route path="/Contact" element={<h1>Contact</h1>} />
    </Routes>
);

export default AppRoutes;