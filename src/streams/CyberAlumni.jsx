import React from 'react';
import img1 from '../assets/image-al1.jpg';
import img2 from '../assets/image-al2.jpg';
import img3 from '../assets/images-al3.jpg';

const staticAlumni = [
  { 
    name: 'Vikram Singh', 
    role: 'Cybersecurity Lead, Cisco', 
    year: 'Class of 2012', 
    linkedin: 'https://www.linkedin.com/in/vikramsingh', 
    image: img1 
  },
  { 
    name: 'Megha Jain', 
    role: 'Security Analyst, Deloitte', 
    year: 'Class of 2015', 
    linkedin: 'https://www.linkedin.com/in/meghajain', 
    image: img2 
  },
  { 
    name: 'Ankit Sharma', 
    role: 'Ethical Hacker, HackerOne', 
    year: 'Class of 2017', 
    linkedin: 'https://www.linkedin.com/in/ankitsharma', 
    image: img3 
  }
];

const CyberAlumni = () => {
  // Retrieve dynamic alumni from localStorage
  const dynamicAlumni = JSON.parse(localStorage.getItem('cyberAlumni')) || [];
  
  // Combine static and dynamic alumni
  const alumni = [...staticAlumni, ...dynamicAlumni];

  const handleDelete = (index) => {
    const dynamicIndex = index - staticAlumni.length;
    if (dynamicIndex >= 0) {
      const updatedDynamicAlumni = dynamicAlumni.filter((_, i) => i !== dynamicIndex);
      localStorage.setItem('cyberAlumni', JSON.stringify(updatedDynamicAlumni));
      window.location.reload();
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen py-10 px-4">
      {/* Title Hero Section */}
      <div className="bg-purple-200 shadow-xl rounded-3xl p-8 max-w-5xl mx-auto text-center mb-10 border-4 border-purple-300">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-3">Cybersecurity Alumni</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Discover the cybersecurity alumni protecting systems and infrastructure across the globe, from national security agencies to tech giants.
        </p>
      </div>

      {/* Alumni Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {alumni.map((alumnus, index) => (
          <div
            key={index}
            className="bg-white border border-purple-200 shadow-md rounded-2xl p-4 hover:shadow-2xl transition relative"
          >
            <img src={alumnus.image} alt={alumnus.name} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h2 className="text-xl font-bold text-purple-700">{alumnus.name}</h2>
            <p className="text-sm text-gray-500">{alumnus.role}</p>
            <p className="text-sm text-gray-600 mt-1">{alumnus.year}</p>
            <a
              href={alumnus.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 underline text-sm mt-2 inline-block"
            >
              LinkedIn Profile
            </a>
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

export default CyberAlumni;

