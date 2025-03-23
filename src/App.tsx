import React, { useState } from "react";
import ProgressBar from "./components/progress-bar";
import SkipSection from "./screens/SkipSection";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./hooks/useTheme";
import "./App.css";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [currentStep, setCurrentStep] = useState(3);

  return (
    <div className="app">
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      <ProgressBar currentStep={currentStep} />
      <SkipSection currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
};

export default App;
