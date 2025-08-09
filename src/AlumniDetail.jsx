import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { alumniData } from "./data/data";  

const AlumniDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // ✅ Use alumniData instead of data
  const alumni = alumniData.find((a) => a.id === parseInt(id));  

  if (!alumni) return <h2 className="text-red-500">Alumni not found</h2>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{alumni.name}</h1>
      <p>{alumni.role} at {alumni.company}</p>
      <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        LinkedIn Profile
      </a>
      
      {/* ✅ View Projects Button */}
      <button 
        onClick={() => navigate(`/projects/${id}`)} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        View Projects
      </button>
    </div>
  );
};

export default AlumniDetail;

