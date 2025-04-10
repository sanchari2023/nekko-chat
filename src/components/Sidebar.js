import React from "react";

const Sidebar = ({ setActiveTab }) => {
  return (
    <div style={{ width: "200px", background: "#f4e5ff", padding: "20px" }}>
      <h2>🤖 Nekko Chat</h2>
      <button onClick={() => setActiveTab("dashboard")}>Dashboard</button>
      <button onClick={() => setActiveTab("chat")}>Chat</button>
      <button onClick={() => setActiveTab("about")}>About</button>
      <button style={{ marginTop: "auto" }}>Logout</button>
    </div>
  );
};

export default Sidebar;
