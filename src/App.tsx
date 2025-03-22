import React, { useEffect, useState } from "react";
import ObjectInfoCard from "./components/ObjectInfoCard";
import { RootState, useAppDispatch, useAppSelector } from "./api/store";
import { fetchSkips } from "./api/skipApi";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./hooks/useTheme";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { theme, toggleTheme } = useTheme();
  const {
    data: skips,
    status,
    error,
  } = useAppSelector((state: RootState) => state.skips);

  const [currentStep, setCurrentStep] = useState(3);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchSkips({ postcode: "NR32", area: "Lowestoft" }));
  }, [dispatch]);

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCardSelect = (id: number) => {
    setSelectedCardId((prevId) => (prevId === id ? null : id)); // Toggle selection
  };

  return (
    <div className="app">
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      <div className="content">
        <ProgressBar currentStep={currentStep} />
        <div className="title">Choose Your Skip Size</div>
        <div className="subtitle">
          Select the skip size that best suits your needs
        </div>
        {status === "loading" && <p>Loading...</p>}
        {status === "succeeded" && (
          <div className="skips-grid">
            {skips.map((skip) => (
              <ObjectInfoCard
                key={skip.id}
                skip={skip}
                isSelected={selectedCardId === skip.id}
                onSelect={() => handleCardSelect(skip.id)}
              />
            ))}
          </div>
        )}
        {status === "failed" && <p>Error: {error}</p>}
      </div>
      <div className="button-container">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`button outlined ${currentStep === 1 ? "disabled" : ""}`}
        >
          Back
        </button>

        <button
          onClick={handleNext}
          disabled={!selectedCardId}
          className={`button ${!selectedCardId ? "disabled" : "filled"}`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default App;
