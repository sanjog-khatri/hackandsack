import React from 'react';
import './ShopDetails.css';

const ShopDetails = () => (
  <div className="shop-details-container">
    <h2>RE-SELLER SHOP DETAIL IN HACK&SACK</h2>
    
    <div className="shop-details-box">
      <div className="input-group">
        <label htmlFor="site-name">Site Name</label>
        <input 
          type="text" 
          id="site-name" 
          placeholder="Enter your site name" 
        />
      </div>

      <div className="input-group">
        <label htmlFor="shop-domain">Shop Domain</label>
        <div className="shop-domain-container">
          <input 
            type="text" 
            id="shop-domain" 
            placeholder="Enter your shop domain"
          />
          <a href="#" className="visit-site">Visit Site</a>
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="email-address">Email Address</label>
        <input 
          type="email" 
          id="email-address" 
          placeholder="Enter your email address" 
        />
      </div>
    </div>
  </div>
);

export default ShopDetails;
