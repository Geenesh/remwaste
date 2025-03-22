import React from "react";
import "./ObjectInfoCard.css";
import { SkipHire } from "../../api/skipApi";
import { CheckCircle, AlertCircle, MoveRight } from "lucide-react";

interface ObjectCardProps {
  skip: SkipHire;
  isSelected: boolean;
  onSelect: () => void;
}

const ObjectInfoCard: React.FC<ObjectCardProps> = ({
  skip,
  isSelected,
  onSelect,
}) => {
  return (
    <div className={`card ${isSelected ? "selected" : ""}`} onClick={onSelect}>
      <div className="card-header">
        {/* 
          // Option to add image here
          <img
            src=""
            alt="Placeholder"
            className="card-image"
          /> 
        */}
        <div className="card-title-container">
          <h2 className="card-title">{skip.size} Yard Skip</h2>
          <div className="info-item">
            <div className="info-label">Hire Period</div>
            <div className="info-value">{skip.hire_period_days} days</div>
          </div>
        </div>
        <div className="card-badges">
          {skip.allowed_on_road && (
            <span className="badge badge-success">
              <CheckCircle className="icon" size={16} /> Road Allowed
            </span>
          )}
          {skip.allows_heavy_waste && (
            <span className="badge badge-success">
              <CheckCircle className="icon" size={16} /> Heavy Waste Allowed
            </span>
          )}
          {skip.size >= 10 && (
            <span className="badge badge-private-prop">
              <AlertCircle className="icon" size={16} /> Private Property Only
            </span>
          )}
        </div>
      </div>

      <div className="card-content">
        <div className="info-section">
          <h3 className="section-title">Pricing Details</h3>
          <div className="price-container">
            <div className="price-row">
              <span className="price-label">Base Price</span>
              <span className="price-value">£{skip.price_before_vat}</span>
            </div>
            <div className="price-row">
              <span className="price-label">VAT (20%)</span>
              <span className="price-value">£{skip.vat}</span>
            </div>
            <div className="price-row">
              <span className="total-label">Total Price</span>
              <span className="total-value">
                £{skip.price_before_vat + skip.vat}
              </span>
            </div>
          </div>
        </div>
        {!isSelected ? (
          <button className="button outlined" style={{width: "100%"}}>
            Select Skip <MoveRight className="icon" size={20} />
          </button>
        ) : (
          <button className="action-button">Selected </button>
        )}
      </div>
    </div>
  );
};

export default ObjectInfoCard;
