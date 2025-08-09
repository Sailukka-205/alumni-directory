import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import AlumniDirectory from "./AlumniDirectory";
import AlumniPage from "./Pages/AlumniPage";
import LoginPage from "./LoginPage";
import DataScienceAlumni from "./streams/DataScienceAlumni";
import AiMLPage from "./streams/AiMLPage";
import CyberAlumni from "./streams/CyberAlumni";
import BbaAlumni from "./streams/BbaAlumni";
import StudentPage from "./Pages/StudentPage";
import AlumniList from "./AlumniList";
import AlumniDetail from "./AlumniDetail";

import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Navigation Target Pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/alumni" element={<AlumniPage />} /> {/* ✅ Correct path */}
        <Route path="/directory" element={<AlumniDirectory />} />

        {/* Stream-specific Alumni Pages */}
        <Route path="/alumni/datascience" element={<DataScienceAlumni />} />
        <Route path="/alumni/aiml" element={<AiMLPage />} />
        <Route path="/alumni/cyber" element={<CyberAlumni />} />
        <Route path="/alumni/bba" element={<BbaAlumni />} />

        {/* Alumni List and Detail Pages */}
        <Route path="/alumni/list" element={<AlumniList />} />
        <Route path="/alumni/:id" element={<AlumniDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
