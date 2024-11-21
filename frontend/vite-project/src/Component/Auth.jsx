import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("login"); // Default to 'login'

  return (
    <div>
      {/* Tab Navigation */}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <button
          onClick={() => setActiveTab("login")}
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: activeTab === "login" ? "#4CAF50" : "#f1f1f1",
            color: activeTab === "login" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab("register")}
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: activeTab === "register" ? "#4CAF50" : "#f1f1f1",
            color: activeTab === "register" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === "login" && <Login />}
        {activeTab === "register" && <Register />}
      </div>
    </div>
  );
}
