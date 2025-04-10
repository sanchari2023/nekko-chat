import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function MainLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          height: "60px",
          background: "linear-gradient(to right, #1e3a8a, #3b82f6)", // Deep blue to light blue
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          fontSize: "22px",
          fontWeight: "600",
          letterSpacing: "0.7px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        }}
      >
        🤖 Nekko Chatbot
      </div>

      {/* Body */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div
          style={{
            width: "230px",
            background: "linear-gradient(to bottom, #e0f2fe, #bfdbfe)", // soft blue bg
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "24px 16px",
            borderRight: "1px solid #93c5fd",
            boxShadow: "2px 0 4px rgba(0, 0, 0, 0.03)",
          }}
        >
          {/* Navigation */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <NavItem to="/dashboard" label="Dashboard" />
            <NavItem to="/chat" label="Chat" />
            <NavItem to="/about" label="About" />
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            style={{
              background: "#3b82f6", // Blue-500
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "12px",
              fontSize: "18px",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#2563eb")} // Blue-600
            onMouseOut={(e) => (e.currentTarget.style.background = "#3b82f6")} // Blue-500
          >
            Logout
          </button>
        </div>

        {/* Main content */}
        <div
          style={{
            flex: 1,
            padding: "32px 40px",
            overflowY: "auto",
            backgroundColor: "#f1f5f9", // light gray-blue
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// Reusable nav item
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...linkStyle,
        backgroundColor: isActive ? "#bfdbfe" : "#dbeafe", // Active vs default
      })}
      onMouseOver={(e) => (e.currentTarget.style.background = "#93c5fd")}
      onMouseOut={(e) =>
        (e.currentTarget.style.background =
          window.location.pathname === to ? "#bfdbfe" : "#dbeafe")
      }
    >
      {label}
    </NavLink>
  );
}

// Shared styles
const linkStyle = {
  textDecoration: "none",
  fontSize: "17px",
  color: "#1e3a8a", // Deep blue text
  padding: "12px 16px",
  borderRadius: "10px",
  fontWeight: "500",
  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  transition: "all 0.25s ease",
};
