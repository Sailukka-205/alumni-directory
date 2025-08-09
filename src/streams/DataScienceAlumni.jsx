import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/dhanush.jpg';
import image2 from '../assets/khoushik.jpg';
import image3 from '../assets/sai_teja.jpg';

const staticAlumni = [
  { 
    name: 'B. Dhanush', 
    role: 'Lead Data Scientist, Netflix', 
    year: 'Class of 2013', 
    linkedin: 'https://www.linkedin.com/in/nehabansal', 
    image: image1 
  },
  { 
    name: 'M. Koushik Manohar', 
    role: 'Data Analyst, IBM', 
    year: 'Class of 2011', 
    linkedin: 'https://www.linkedin.com/in/aditya-rao', 
    image: image2 
  },
  { 
    name: 'Sai Teja', 
    role: 'Senior Analyst, Accenture', 
    year: 'Class of 2014', 
    linkedin: 'https://www.linkedin.com/in/priyadesai', 
    image: image3 
  }
];

const DataScience = () => {
  const navigate = useNavigate();

  // Retrieve dynamic alumni from localStorage
  const dynamicAlumni = JSON.parse(localStorage.getItem('alumni')) || [];
  
  // Combine static and dynamic alumni
  const alumni = [...staticAlumni, ...dynamicAlumni];

  const handleProfileClick = (name) => {
    console.log(`Navigating to projects page for: ${name}`); // Debug log
    navigate(`/projects/${encodeURIComponent(name)}`); // Navigate to projects page
  };

  const handleAchievementsClick = (name) => {
    console.log(`Navigating to achievements page for: ${name}`); // Debug log
    navigate(`/achievements/${encodeURIComponent(name)}`); // Navigate to achievements page
  };

  const handleDelete = (index) => {
    const dynamicIndex = index - staticAlumni.length;
    if (dynamicIndex >= 0) {
      const updatedDynamicAlumni = dynamicAlumni.filter((_, i) => i !== dynamicIndex);
      localStorage.setItem('alumni', JSON.stringify(updatedDynamicAlumni));
      window.location.reload();
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-10 px-4">
      <div className="bg-blue-200 shadow-xl rounded-3xl p-8 max-w-5xl mx-auto text-center mb-10 border-4 border-blue-300">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-3">Data Science Alumni</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Meet our data-driven alumni who are transforming industries through analytics, predictive modeling, and big data solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {alumni.map((alumnus, index) => (
          <div 
            key={index} 
            className="bg-white border border-blue-200 shadow-md rounded-2xl hover:shadow-2xl transition overflow-hidden cursor-pointer relative"
            onClick={() => handleProfileClick(alumnus.name)} // Navigate to projects page
          >
            <img
              src={alumnus.image}
              alt={alumnus.name}
              className="w-full h-60 object-cover object-center rounded-t-2xl"
            />
            <div className="p-4 text-left">
              <h2 className="text-lg font-bold text-blue-700">{alumnus.name}</h2>
              <p className="text-sm text-gray-600">{alumnus.role}</p>
              <p className="text-sm text-gray-500 mt-1">{alumnus.year}</p>
              <div className="flex space-x-4 mt-2">
                <a
                  href={alumnus.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline text-sm inline-block"
                  onClick={(e) => e.stopPropagation()} 
                >
                  LinkedIn Profile
                </a>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAchievementsClick(alumnus.name);
                  }}
                  className="text-blue-500 underline text-sm inline-block"
                >
                  View Achievements
                </button>
              </div>
            </div>
            {index >= staticAlumni.length && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
                className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataScience;
