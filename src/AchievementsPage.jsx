import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const achievementsData = {
  'B. Dhanush': [
    'Led a team to win the Netflix Data Science Innovation Award in 2019',
    'Published 3 research papers on predictive modeling in top-tier journals',
    'Speaker at the Global Data Science Summit 2021'
  ]
  // Add more alumni achievements here if needed
};

const AchievementsPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(name);
  const achievements = achievementsData[decodedName] || [];

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate('/datascience')}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Data Science Alumni
        </button>
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6">
          Achievements of {decodedName}
        </h1>
        {achievements.length > 0 ? (
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-700"
              >
                {achievement}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No achievements found for {decodedName}.</p>
        )}
      </div>
    </div>
  );
};

export default AchievementsPage;