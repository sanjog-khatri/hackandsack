import React, { useState } from "react";
import "./PaymentMethod.css";

const PaymentMethod = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const paymentProviders = [
    { id: 1, name: "PayPal", apiDashboard: "https://developer.paypal.com/" },
    { id: 2, name: "Stripe", apiDashboard: "https://dashboard.stripe.com/apikeys" },
    { id: 3, name: "Square", apiDashboard: "https://developer.squareup.com/" },
    { id: 4, name: "Razorpay", apiDashboard: "https://dashboard.razorpay.com/" },
  ];

  const handleSetupClick = (provider) => {
    setSelectedProvider(provider);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProvider(null);
  };

  return (
    <div className="payment-method-container">
      <h2>Payment Method</h2>
      <p>Your gateway to effortless customer payments!</p>

      <div className="payment-providers">
        {paymentProviders.map((provider) => (
          <div className="provider-box" key={provider.id}>
            <div className="provider-left">
              <img
                src={`/images/${provider.name.toLowerCase()}.png`} // Replace with actual image paths
                alt={`${provider.name} logo`}
                className="provider-icon"
              />
              <span>{provider.name}</span>
            </div>
            <button
              className="setup-button"
              onClick={() => handleSetupClick(provider)}
            >
              Setup
            </button>
          </div>
        ))}
      </div>

      <div className="cod-option">
        <input type="checkbox" id="cash-on-delivery" />
        <label htmlFor="cash-on-delivery">Cash on Delivery</label>
      </div>

      <button className="submit-button">Submit</button>

      {showPopup && selectedProvider && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-container"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside popup
          >
            <h3>Set Up {selectedProvider.name}</h3>
            <p>
              Enter {selectedProvider.name} API keys. You can find your keys on{" "}
              <a
                href={selectedProvider.apiDashboard}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProvider.name} API Dashboard
              </a>
            </p>
            <p>
              Don’t have a {selectedProvider.name} account right now?{" "}
              <a
                href={selectedProvider.apiDashboard}
                target="_blank"
                rel="noopener noreferrer"
              >
                Create Now
              </a>
            </p>
            <div className="input-group">
              <label htmlFor="security-key">Security Key *</label>
              <input
                id="security-key"
                type="text"
                placeholder="Enter your security key"
              />
            </div>
            <button className="final-setup-button">Set Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
