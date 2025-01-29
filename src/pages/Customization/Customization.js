import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Themes from '../../components/CustomizationComponents/Themes';
import Banners from '../../components/CustomizationComponents/Banner';
import './Customization.css';

const Customization = () => {
  const [selectedOption, setSelectedOption] = useState('themes');

  const options = ['themes', 'banners'];

  const renderContent = () => {
    switch (selectedOption) {
      case 'themes':
        return <Themes />;
      case 'banners':
        return <Banners />;
      default:
        return <div>Select an option to view content</div>;
    }
  };

  return (
    <Layout>
      <div className="customization">
        <div className="customization-sidebar">
          <h3>Customization</h3>
          <ul className="customization-options">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => setSelectedOption(option)}
                className={selectedOption === option ? 'active' : ''}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </li>
            ))}
          </ul>
        </div>
        <div className="customization-content">{renderContent()}</div>
      </div>
    </Layout>
  );
};

export default Customization;
