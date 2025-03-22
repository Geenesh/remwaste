import React, { memo } from "react";
import {
  MapPin,
  Trash2,
  Truck,
  FileCheck,
  Calendar,
  CreditCard,
} from "lucide-react";
import "./ProgressBar.css";

const ProgressBar = ({ currentStep = 3 }) => {
  const steps = [
    { name: "Postcode", icon: MapPin },
    { name: "Waste Type", icon: Trash2 },
    { name: "Select Skip", icon: Truck },
    { name: "Permit Check", icon: FileCheck },
    { name: "Choose Date", icon: Calendar },
    { name: "Payment", icon: CreditCard },
  ];

  return (
    <div className="progress-bar-container">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index < currentStep;
        const isCurrent = index === currentStep - 1;

        return (
          <React.Fragment key={step.name}>
            <div
              className={`step-item ${
                isCurrent ? "current" : isActive ? "active" : "inactive"
              }`}
            >
              <div
                className={`icon-container ${
                  isCurrent ? "current" : isActive ? "active" : "inactive"
                }`}
              >
                <Icon size={18} />
              </div>
              <span className="step-label">{step.name}</span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`connector-line ${
                  isActive ? "connector-active" : "connector-inactive"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default memo(ProgressBar);
