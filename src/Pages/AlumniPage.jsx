import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AlumniPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    linkedin: '',
    email: '',
    stream: '',
    job: '',
    company: '',
    projects: '',
    achievements: '',
    image: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAlumni = {
      name: formData.name,
      role: `${formData.job}, ${formData.company}`,
      year: 'Class of 2025',
      linkedin: formData.linkedin,
      image: formData.image,
      projects: formData.projects, // Save projects as a string
      achievements: formData.achievements // Save achievements as a string
    };

    const existingAlumni = JSON.parse(localStorage.getItem('alumni')) || [];
    existingAlumni.push(newAlumni);
    localStorage.setItem('alumni', JSON.stringify(existingAlumni));

    alert('Details submitted successfully!');
    navigate('/datascience');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Alumni Submission Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "contact", "linkedin", "email", "stream", "job", "company", "projects", "achievements"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={`Enter your ${field}`}
            value={formData[field]}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        ))}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            Upload Your Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {formData.image && (
            <div className="mt-2">
              <img
                src={formData.image}
                alt="Preview"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AlumniPage;




