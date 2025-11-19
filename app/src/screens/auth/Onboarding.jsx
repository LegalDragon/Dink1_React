import React, { useState } from "react";
import api from "../../global-api/apiClient";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Onboarding() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const { authToken } = useAuth();
  const navigate = useNavigate();

  async function saveOnboarding() {
    await api.post("/save-profile", {
      fullName,
      email
    }, {
      headers: { Authorization: `Bearer ${authToken}` }
    });

    navigate("/");
  }

  return (
    <div className="p-6 space-y-4">

      <h1 className="text-xl font-bold">Welcome!</h1>
      <p>Complete your profile to continue.</p>

      <input
        type="text"
        placeholder="Full name"
        className="w-full p-3 rounded bg-[var(--bg-hover)] text-[var(--text-main)]"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email address"
        className="w-full p-3 rounded bg-[var(--bg-hover)] text-[var(--text-main)]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={saveOnboarding}
        className="w-full p-3 bg-blue-500 rounded text-[var(--text-main)]"
      >
        Continue
      </button>

    </div>
  );
}
