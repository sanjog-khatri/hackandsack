import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ShopDetails from '../../components/ShopComponents/ShopDetails';
import CompanyDetails from '../../components/ShopComponents/CompanyDetails';
import PrivacyPolicy from '../../components/ShopComponents/PrivacyPolicy';
import ReturnPolicy from '../../components/ShopComponents/ReturnPolicy';
import TermsConditions from '../../components/ShopComponents/TermsAndConditions';
import Subscriptions from '../../components/ShopComponents/Subscriptions';
import DeliveryIntegration from '../../components/ShopComponents/DeliveryIntegration';
import PaymentMethod from '../../components/ShopComponents/PaymentMethod';
import './Store.css';

const Store = ({ isPropertiesShrunk }) => {
  const [activeElement, setActiveElement] = useState('');

  const elements = [
    'Shop Details',
    'Company Details',
    'Privacy Policy',
    'Terms and Conditions',
    'Return Policy',
    'Subscriptions',
    'Payment Method',
    'Delivery Integration',
  ];

  const renderContent = () => {
    switch (activeElement) {
      case 'Shop Details':
        return <ShopDetails />;
      case 'Company Details':
        return <CompanyDetails />;
      case 'Privacy Policy':
        return <PrivacyPolicy />;
      case 'Terms and Conditions':
        return <TermsConditions />;
      case 'Return Policy':
        return <ReturnPolicy />;
      case 'Subscriptions':
        return <Subscriptions />;
      case 'Payment Method':
        return <PaymentMethod />;
      case 'Delivery Integration':
        return <DeliveryIntegration />;
      default:
        return <div>Select an element to view its content</div>;
    }
  };

  return (
    <Layout>
      <div className={`store ${isPropertiesShrunk ? 'store-expanded' : ''}`}>
        <div className="store-sidebar">
          <ul>
            {elements.map((element) => (
              <li
                key={element}
                onClick={() => setActiveElement(element)}
                className={activeElement === element ? 'active' : ''}
              >
                {element}
              </li>
            ))}
          </ul>
        </div>
        <div className="store-content">{renderContent()}</div>
      </div>
    </Layout>
  );
};

export default Store;
