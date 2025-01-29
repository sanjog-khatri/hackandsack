import React, { useState } from "react";
import "./Subscriptions.css";
import Package from "./Package"; // Assuming Package.js exists in the same folder

const Subscriptions = () => {
  const [showPackages, setShowPackages] = useState(false);

  const handleUpgradeClick = () => {
    setShowPackages(!showPackages);
  };

  return (
    <div className="subscriptions-container">
      <h2>MY SUBSCRIPTIONS</h2>

      <div className="subscription-details">
        <label htmlFor="current-subscription" className="subscription-label">
          Current Subscription
        </label>
        <input
          id="current-subscription"
          type="text"
          placeholder="Premium Plan - Active (Expires: 31 Jan 2025)"
          disabled
          className="subscription-input"
        />
        <button className="upgrade-button" onClick={handleUpgradeClick}>
          {showPackages ? "Hide" : "Upgrade"}
        </button>
      </div>

      {showPackages && (
        <div className="packages-section">
          <Package />
        </div>
      )}

      <h3>Available Packages</h3>
      <div className="packages-container">
        <div className="package-box">
          <h4>Basic Plan</h4>
          <p>$10/month</p>
          <p>Features: Feature A, Feature B</p>
        </div>
        <div className="package-box">
          <h4>Premium Plan</h4>
          <p>$20/month</p>
          <p>Features: Feature A, Feature B, Feature C</p>
        </div>
        <div className="package-box">
          <h4>Pro Plan</h4>
          <p>$50/month</p>
          <p>Features: All Premium Features + Extra Benefits</p>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
