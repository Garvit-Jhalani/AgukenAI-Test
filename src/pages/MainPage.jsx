// src/pages/MainPage.jsx
import React, { useState } from "react";
import WelcomeForm from "../components/onboarding/WelcomeForm";
import BusinessSelection from "../components/onboarding/BusinessSelection";

const MainPage = () => {
  const [userData, setUserData] = useState(null);

  const handleWelcomeSubmit = (data) => {
    setUserData(data);
  };

  const handleContinue = () => {
    alert("Proceeding to next logic...");
    // Further logic goes here
  };

  return (
    <div className="min-h-screen bg-[#0E1320] flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {!userData ? (
          <WelcomeForm onSubmit={handleWelcomeSubmit} />
        ) : (
          <BusinessSelection name={userData.name} onContinue={handleContinue} />
        )}
      </div>
    </div>
  );
};

export default MainPage;
