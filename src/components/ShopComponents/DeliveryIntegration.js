import React, { useState } from 'react';
import './DeliveryIntegration.css';

const DeliveryIntegration = () => {
  const [upsEnabled, setUpsEnabled] = useState(false);
  const [customEnabled, setCustomEnabled] = useState(false);

  const handleToggle = (setter) => () => setter((prev) => !prev);

  const handleSubmit = () => {
    alert(`UPS: ${upsEnabled ? 'Enabled' : 'Disabled'}, Custom: ${customEnabled ? 'Enabled' : 'Disabled'}`);
  };

  return (
    <div className="delivery-integration-container">
      <h2>Delivery Integration</h2>
      <p>Manage your delivery integration settings.</p>

      <div className="integration-box">
        {/* UPS Container */}
        <div className="integration-container">
          <h3>UPS</h3>
          <div
            className={`toggle-switch ${upsEnabled ? 'enabled' : ''}`}
            onClick={handleToggle(setUpsEnabled)}
          >
            <div className={`toggle-ball ${upsEnabled ? 'enabled' : ''}`}></div>
          </div>
        </div>

        {/* Custom Container */}
        <div className="integration-container">
          <h3>Custom</h3>
          <div
            className={`toggle-switch ${customEnabled ? 'enabled' : ''}`}
            onClick={handleToggle(setCustomEnabled)}
          >
            <div className={`toggle-ball ${customEnabled ? 'enabled' : ''}`}></div>
          </div>
        </div>
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default DeliveryIntegration;
