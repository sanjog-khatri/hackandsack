import React, { useState } from 'react';
import Header from './header/Header';
import Properties from './properties/Properties';

const Layout = ({ children }) => {
  const [isIconsOnly, setIsIconsOnly] = useState(false);
  const [isPropertiesShrunk, setIsPropertiesShrunk] = useState(false);

  const toggleIconsOnly = () => {
    setIsIconsOnly((prev) => !prev);
  };

  const togglePropertiesShrunk = () => {
    setIsPropertiesShrunk((prev) => !prev);
  };

  return (
    <div className={`layout ${isPropertiesShrunk ? 'store-expanded' : ''}`} style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Header />
      
      {/* Sidebar (Properties) */}
      <aside
        className={`properties ${isIconsOnly ? 'icons-only' : ''}`}
        style={{
          width: isIconsOnly ? '120px' : '250px',
          backgroundColor: '#fff',
          padding: '1rem',
          position: 'fixed',
          top: '60px',
          bottom: '0',
          transition: 'width 0.3s ease',
        }}
      >
        <Properties
          onIconsToggle={toggleIconsOnly}
          onShrinkToggle={togglePropertiesShrunk}
        />
      </aside>

      {/* Main Content */}
      <main
        style={{
          marginLeft: isIconsOnly ? '130px' : '270px',
          padding: '2rem',
          flex: 1,
          transition: 'margin-left 0.3s ease',
          overflowY: 'auto',
          height: 'calc(100vh - 60px)',
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
