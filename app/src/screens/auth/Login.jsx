import React, { useState } from "react";
import api from "../../global-api/apiClient";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState("phone"); // phone → otp
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  async function sendOtp() {
    await api.post("/send-otp", { phone });
    setStep("otp");
  }

  async function verifyOtp() {
    const res = await api.post("/verify-otp", { phone, otp });
    const token = res.data.authToken;

    localStorage.setItem("authToken", token);

    // If user is new → onboarding
    if (res.data.newUser) {
      navigate("/onboarding");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="p-6">

      {/* Step 1: phone input */}
      {step === "phone" && (
        <div className="space-y-4 text-[var(--text-main)]">
          <h1 className="text-xl font-bold">Login</h1>

          <input
            type="tel"
            placeholder="Phone number"
            className="w-full p-3 rounded bg-[var(--bg-hover)] text-[var(--text-main)]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            onClick={sendOtp}
            className="w-full p-3 bg-blue-500 rounded text-[var(--text-main)]"
          >
            Send OTP
          </button>
        </div>
      )}

      {/* Step 2: OTP input */}
      {step === "otp" && (
        <div className="space-y-4">
          <h1 className="text-xl font-bold">Enter OTP</h1>

          <input
            type="text"
            className="w-full p-3 rounded bg-[var(--bg-hover)] text-[var(--text-main)]"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button
            onClick={verifyOtp}
            className="w-full p-3 bg-blue-500 rounded text-[var(--text-main)]"
          >
            Verify
          </button>
        </div>
      )}
    </div>
  );
}
