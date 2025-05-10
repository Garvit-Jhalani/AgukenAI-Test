// src/components/WelcomeForm.jsx
import React, { useState } from "react";

const WelcomeForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const countryCodes = [
    { code: "+91", label: "IN" },
    { code: "+1", label: "US" },
    { code: "+44", label: "UK" },
    { code: "+81", label: "JP" },
    { code: "+49", label: "DE" },
    { code: "+61", label: "AU" },
    { code: "+33", label: "FR" },
    { code: "+971", label: "UAE" },
  ];

  const handleContinue = () => {
    if (name.trim() && phone.trim()) {
      onSubmit({ name, phone, countryCode });
    } else {
      alert("Please fill in your name and phone number.");
    }
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold">Hello, I'm AgukenAI.</h1>
      <p className="mt-2">
        I'm an AI Agent helping you handle reception and support calls using
        GenAI-based phone call automation.
      </p>

      <div className="bg-gray-800 p-6 mt-6 rounded-lg space-y-4">
        <div>
          <label className="block text-gray-300">Nice to meet you, I'm</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-gray-300">You can reach out at</label>
          <div className="flex mt-1">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="cursor-pointer bg-gray-700 text-white p-2 rounded-l"
            >
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 p-2 bg-gray-700 text-white rounded-r"
              placeholder="Enter phone number"
            />
          </div>
          <p className="text-gray-400 text-sm mt-1">
            Format: {countryCode} xxxxxx xxxxx
          </p>
        </div>

        <button
          onClick={handleContinue}
          className="cursor-pointer bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          Continue
        </button>
      </div>

      <p className="cursor-pointer text-sm text-gray-400 mt-2 text-right">
        You can always edit this later
      </p>
    </div>
  );
};

export default WelcomeForm;
