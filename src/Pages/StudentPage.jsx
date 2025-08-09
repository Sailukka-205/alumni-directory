import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentPage = () => {
  const [form, setForm] = useState({ name: '', stream: '', project: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Map the stream to the corresponding route
    const streamToPath = {
      'Data Science': '/alumni/datascience',
      'AI / ML': '/alumni/aiml',
      'Cybersecurity': '/alumni/cyber',
      'BBA': '/alumni/bba',
    };

    const path = streamToPath[form.stream];
    if (path) {
      navigate(path); // Redirect to the corresponding alumni page
    } else {
      alert('Please select a valid stream.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 p-6">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">Student Search</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-purple-200"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <select
          name="stream"
          value={form.stream}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="">Select Stream</option>
          <option value="Data Science">Data Science</option>
          <option value="AI / ML">AI / ML</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="BBA">BBA</option>
        </select>
        <input
          type="text"
          name="project"
          placeholder="Your Current Project"
          value={form.project}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          Search Alumni
        </button>
      </form>
    </div>
  );
};

export default StudentPage;
