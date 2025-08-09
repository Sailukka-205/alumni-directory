import React from "react";
import { useNavigate } from "react-router-dom";
import background from './assets/Untitled-design-34.png'; // Corrected path

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        }}
      />
      <div style={{ zIndex: 1 }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Welcome to Our College Alumni Network
        </h1>
        <p style={{ fontSize: "1.4rem", marginBottom: "2rem" }}>
          Connect, Collaborate, and Grow Together!
        </p>
        <button
          style={{
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#00b894",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/home")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;



