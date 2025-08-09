import React from 'react';
import img1 from '../assets/image-bba1.jpg';
import img2 from '../assets/image-bba2.jpg';
import img3 from '../assets/image-bba3.jpg';

const staticAlumni = [
  { 
    name: 'Aarav Malhotra', 
    role: 'CEO, FinEdge Corp', 
    year: 'Class of 2010', 
    linkedin: 'https://www.linkedin.com/in/aaravmalhotra', 
    image: img1 
  },
  { 
    name: 'Simran Kaur', 
    role: 'Marketing Director, Unilever', 
    year: 'Class of 2013', 
    linkedin: 'https://www.linkedin.com/in/simrankaur', 
    image: img2 
  },
  { 
    name: 'Rajat Gupta', 
    role: 'Co-Founder, StartX India', 
    year: 'Class of 2016', 
    linkedin: 'https://www.linkedin.com/in/rajatgupta', 
    image: img3 
  }
];

const BbaAlumni = () => {
  // Retrieve dynamic alumni from localStorage
  const dynamicAlumni = JSON.parse(localStorage.getItem('bbaAlumni')) || [];
  
  // Combine static and dynamic alumni
  const alumni = [...staticAlumni, ...dynamicAlumni];

  const handleDelete = (index) => {
    const dynamicIndex = index - staticAlumni.length;
    if (dynamicIndex >= 0) {
      const updatedDynamicAlumni = dynamicAlumni.filter((_, i) => i !== dynamicIndex);
      localStorage.setItem('bbaAlumni', JSON.stringify(updatedDynamicAlumni));
      window.location.reload();
    }
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 min-h-screen py-10 px-4">
      {/* Title Section */}
      <div className="bg-yellow-200 shadow-xl rounded-3xl p-8 max-w-5xl mx-auto text-center mb-10 border-4 border-yellow-300">
        <h1 className="text-5xl font-extrabold text-yellow-800 mb-3">BBA Alumni</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Explore the success stories of our BBA graduates who have become leaders in business, management, and entrepreneurship, shaping industries around the globe.
        </p>
      </div>

      {/* Alumni Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {alumni.map((alumnus, index) => (
          <div
            key={index}
            className="bg-white border border-yellow-200 shadow-md rounded-2xl p-4 hover:shadow-2xl transition relative"
          >
            <img src={alumnus.image} alt={alumnus.name} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h2 className="text-xl font-bold text-yellow-700">{alumnus.name}</h2>
            <p className="text-sm text-gray-500">{alumnus.role}</p>
            <p className="text-sm text-gray-600 mt-1">{alumnus.year}</p>
            <a
              href={alumnus.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 underline text-sm mt-2 inline-block"
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

export default BbaAlumni;


