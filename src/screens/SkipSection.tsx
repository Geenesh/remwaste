import React, { useState, useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../api/store";
import { fetchSkips } from "../api/skipApi";
import ObjectInfoCard from "../components/object-info-card";
import "./SkipSection.css";

interface SkipSectionProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const SkipSection: React.FC<SkipSectionProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  const dispatch = useAppDispatch();
  const {
    data: skips,
    status,
    error,
  } = useAppSelector((state: RootState) => state.skips);

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
    setSelectedCardId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="content">
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

export default SkipSection;
