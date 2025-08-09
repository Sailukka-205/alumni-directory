import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlumniList from "./AlumniList"; 
import AlumniPage from "./AlumniPage";
import DataScience from "./DataScience";
import AiMLPage from "./AiMLPage";
import CyberAlumni from "./CyberAlumni";
import BbaAlumni from "./BbaAlumni";
import ProjectsPage from "./ProjectsPage";
import AchievementsPage from "./AchievementsPage";

function App() {
  console.log("App component rendered"); // Debug log to confirm App is rendering

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AlumniList />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/aiml" element={<AiMLPage />} />
        <Route path="/cybersecurity" element={<CyberAlumni />} />
        <Route path="/bba" element={<BbaAlumni />} />
        <Route path="/projects/:name" element={<ProjectsPage />} />
        <Route path="/achievements/:name" element={<AchievementsPage />} />
        <Route path="*" element={<div>404: Route Not Found</div>} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default App;

