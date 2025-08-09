import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const staticProjectsData = {
  'B. Dhanush': [
    {
      title: 'Predictive Content Recommendation System',
      description: 'Developed a machine learning model to recommend personalized content for Netflix users, increasing user engagement by 15%.',
      technologies: 'Python, TensorFlow, Scikit-learn',
      year: '2018'
    },
    {
      title: 'Churn Prediction Model',
      description: 'Built a churn prediction model to identify at-risk subscribers, reducing churn rate by 10% through targeted campaigns.',
      technologies: 'R, Pandas, XGBoost',
      year: '2019'
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Created a real-time dashboard for monitoring user behavior, enabling data-driven decisions for content strategy.',
      technologies: 'Python, Apache Kafka, Tableau',
      year: '2020'
    }
  ]
};

const ProjectsPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(name);

  const dynamicAlumni = JSON.parse(localStorage.getItem('alumni')) || [];
  const alumniData = dynamicAlumni.find(alumni => alumni.name === decodedName);

  const projects = staticProjectsData[decodedName] || (alumniData && alumniData.projects ? [alumniData.projects] : []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate('/datascience')}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Data Science Alumni
        </button>
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6">
          Projects by {decodedName}
        </h1>
        {projects.length > 0 ? (
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-blue-200 shadow-md rounded-2xl p-6 hover:shadow-xl transition"
              >
                <h2 className="text-xl font-bold text-blue-700">
                  {typeof project === 'string' ? 'Project' : project.title}
                </h2>
                <p className="text-gray-600 mt-2">
                  {typeof project === 'string' ? project : project.description}
                </p>
                {typeof project !== 'string' && (
                  <>
                    <p className="text-sm text-gray-500 mt-2">
                      <strong>Technologies:</strong> {project.technologies}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <strong>Year:</strong> {project.year}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No projects found for {decodedName}.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;