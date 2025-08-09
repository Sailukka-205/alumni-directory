import React from 'react';
import image1 from '../assets/image-ai3.png';
import image2 from '../assets/image-ai2.jpg';
import image3 from '../assets/NTR-image.jpg';

const staticAlumni = [
  { 
    name: 'Dr. Asha Verma', 
    role: 'Research Scientist, Google AI', 
    year: 'Class of 2012', 
    linkedin: 'https://www.linkedin.com/in/asha-verma', 
    image: image1 
  },
  { 
    name: 'Rohan Mehta', 
    role: 'AI Engineer, OpenAI', 
    year: 'Class of 2015', 
    linkedin: 'https://www.linkedin.com/in/rohan-mehta', 
    image: image2 
  },
  { 
    name: 'Sneha Kapoor', 
    role: 'Machine Learning Lead, Amazon', 
    year: 'Class of 2014', 
    linkedin: 'https://www.linkedin.com/in/sneha-kapoor', 
    image: image3 
  }
];

const AiMLPage = () => {
  // Retrieve dynamic alumni from localStorage
  const dynamicAlumni = JSON.parse(localStorage.getItem('aimlAlumni')) || [];
  
  // Combine static and dynamic alumni
  const alumni = [...staticAlumni, ...dynamicAlumni];

  const handleDelete = (index) => {
    const dynamicIndex = index - staticAlumni.length;
    if (dynamicIndex >= 0) {
      const updatedDynamicAlumni = dynamicAlumni.filter((_, i) => i !== dynamicIndex);
      localStorage.setItem('aimlAlumni', JSON.stringify(updatedDynamicAlumni));
      window.location.reload();
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen py-10 px-4">
      {/* Title Hero Section */}
      <div className="bg-purple-200 shadow-xl rounded-3xl p-8 max-w-5xl mx-auto text-center mb-10 border-4 border-purple-300">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-3">AI / ML Alumni</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Meet our accomplished alumni from the Artificial Intelligence and Machine Learning specialization. These individuals have made significant contributions to cutting-edge research, innovative startups, and major tech companies around the world.
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

export default AiMLPage;


