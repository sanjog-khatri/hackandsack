import React from 'react';
import './CompanyDetails.css';

const CompanyDetails = () => (
  <>
  <h2>COMPANY DETAILS IN HACK&SACK</h2>
  <div className="company-details-container">
    {/* Section 1: Company Details */}
    <div className="company-details-wrapper">
      <div className="company-details-box">
        <div className="details-left">
          <div className="input-group">
            <label htmlFor="company-title">Set Title</label>
            <input 
              type="text" 
              id="company-title" 
              placeholder="Enter company title" 
            />
          </div>

          <div className="input-group">
            <label htmlFor="contact-number">Contact Number</label>
            <input 
              type="tel" 
              id="contact-number" 
              placeholder="Enter contact number" 
            />
          </div>

          <div className="input-group">
            <label htmlFor="contact-address">Contact Address</label>
            <input 
              type="text" 
              id="contact-address" 
              placeholder="Enter contact address" 
            />
          </div>
        </div>

        <div className="details-right">
          <div className="input-group">
            <label htmlFor="site-logo">Site Logo</label>
            <input 
              type="file" 
              id="site-logo" 
              placeholder="Choose a file" 
            />
          </div>

          <div className="input-group">
            <label htmlFor="contact-email">Contact Email</label>
            <input 
              type="email" 
              id="contact-email" 
              placeholder="Enter contact email" 
            />
          </div>

          <div className="input-group">
            <label htmlFor="about">About</label>
            <textarea 
              id="about" 
              placeholder="Write about the company"
            />
          </div>
        </div>
      </div>

      {/* Document upload section */}
      <div className="file-upload-section">
        <label htmlFor="company-documents">Registration Company/Personal Document</label>
        <input 
          type="file" 
          id="company-documents" 
          multiple 
        />
      </div>

      <button className="update-details-button">Update Details</button>
    </div>

    {/* Section 2: Bank Account Verification */}
    <h2>BANK ACCOUNT VERIFICATION IN HACK&SACK</h2>
    <div className="bank-verification-wrapper">
      <div className="bank-account-verification-box">
        <div className="details-left">
          <div className="input-group">
            <label htmlFor="swift-code">Swift Code</label>
            <input 
              type="text" 
              id="swift-code" 
              placeholder="Enter swift code" 
            />
          </div>

          <div className="input-group">
            <label htmlFor="account-number">Account Number</label>
            <input 
              type="text" 
              id="account-number" 
              placeholder="Enter account number" 
            />
          </div>
        </div>

        <div className="details-right">
          <div className="input-group">
            <label htmlFor="bank-name">Bank Name</label>
            <input 
              type="text" 
              id="bank-name" 
              placeholder="Enter bank name" 
            />
          </div>

          <div className="input-group">
            <label htmlFor="account-holder">Account Holder Name</label>
            <input 
              type="text" 
              id="account-holder" 
              placeholder="Enter account holder name" 
            />
          </div>
        </div>
      </div>

      <button className="submit-verification-button">Submit for Verification</button>
    </div>
  </div>
  </>
);

export default CompanyDetails;
