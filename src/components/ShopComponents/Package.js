import React, { useState } from "react";
import "./Package.css";

const Package = () => {
  const [packagePlan, setPackagePlan] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const packagePrices = {
    Basic: { monthly: 10, yearly: 100 },
    Premium: { monthly: 20, yearly: 200 },
    Pro: { monthly: 50, yearly: 500 },
  };

  const handlePlanChange = (value) => {
    setPackagePlan(value);
    calculateTotal(value, subscriptionType);
  };

  const handleSubscriptionChange = (value) => {
    setSubscriptionType(value);
    calculateTotal(packagePlan, value);
  };

  const calculateTotal = (plan, type) => {
    if (plan && type) {
      const price = packagePrices[plan]?.[type] || 0;
      setTotalAmount(price);
    }
  };

  const handleSubscribe = () => {
    if (!packagePlan || !subscriptionType || !startDate || !endDate) {
      alert("Please fill out all fields before subscribing.");
      return;
    }
    setShowPaymentOptions(true);
  };

  return (
    <div className="package-container">
      <h2>Subscribe to a Package</h2>

      <div className="input-group">
        <label htmlFor="package-plan">Package</label>
        <select
          id="package-plan"
          value={packagePlan}
          onChange={(e) => handlePlanChange(e.target.value)}
        >
          <option value="">Choose a plan</option>
          <option value="Basic">Basic Plan</option>
          <option value="Premium">Premium Plan</option>
          <option value="Pro">Pro Plan</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="subscription-type">Subscription Type</label>
        <select
          id="subscription-type"
          value={subscriptionType}
          onChange={(e) => handleSubscriptionChange(e.target.value)}
        >
          <option value="">Choose duration</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="start-date">Start Date</label>
        <input
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="end-date">End Date</label>
        <input
          id="end-date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div className="total-amount">
        <label>Total Amount:</label>
        <span>${totalAmount || "0.00"}</span>
      </div>

      <button className="subscribe-button" onClick={handleSubscribe}>
        Subscribe
      </button>

      {showPaymentOptions && (
        <div className="payment-options">
          <h3>Choose Payment Method</h3>
          <button className="payment-button">PayPal</button>
          <button className="payment-button">Stripe</button>
          <button className="payment-button">Other</button>
        </div>
      )}
    </div>
  );
};

export default Package;
