import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import dsImage from "./assets/What-is-data-science-2.jpg";
import aimlImage from "./assets/aiml-image-1.webp";
import cyberImage from "./assets/cyber-image.png";
import bbaImage from "./assets/images-bba.jpg";

const specializations = [
  { name: "Data Science", image: dsImage, path: "/alumni/datascience" },
  { name: "AI / ML", image: aimlImage, path: "/alumni/aiml" },
  { name: "Cybersecurity", image: cyberImage, path: "/alumni/cyber" },
  { name: "BBA", image: bbaImage, path: "/alumni/bba" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    setAnimateTitle(true);
  }, []);

  return (
    <div className="homepage">
      {/* FIXED NAVBAR */}
      <div className="navbar fixed top-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-6 py-3">
        <h2 className="text-xl font-bold text-blue-600">Alumni Edge</h2>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/alumni")}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Alumni
          </button>
          <button
            onClick={() => navigate("/student")}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Student
          </button>
        </div>
      </div>

      {/* SPACER for navbar */}
      <div className="h-20" />

      {/* TITLE TILE */}
      <section
        className={`hero-title-tile transform transition duration-700 ease-out ${
          animateTitle ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <h1 className="hero-title">Alumni Edge</h1>
        <p className="hero-slogan">Learn from the Best.</p>
        {/* GRADIENT FADE */}
        <div className="gradient-fade" />
      </section>

      {/* ABOUT SECTION */}
      <section className="hero">
        <p>
          Our Alumni Directory helps students connect with graduates from our
          college. Whether you're working on projects, looking for mentorship,
          or just curious, this platform lists alumni by specialization — from
          Data Science to BBA — so you can find the right experts who walked the
          same halls before you.
        </p>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="specializations">
        <h2>Explore Specializations</h2>
        <div className="specialization-grid">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="spec-card transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => navigate(spec.path)}
            >
              <img src={spec.image} alt={spec.name} />
              <h3>{spec.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
