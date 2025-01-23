import React, { useState } from 'react';
import Header from './header/Header';
import Properties from './properties/Properties';

const Layout = ({ children }) => {
  const [isIconsOnly, setIsIconsOnly] = useState(false); // State to manage icons-only mode

  // Toggle the icons-only mode
  const toggleIconsOnly = () => {
    setIsIconsOnly((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Header />
      <aside
        style={{
          width: isIconsOnly ? '120px' : '250px', // Increase the width for icons-only mode
          backgroundColor: '#333',
          color: 'white',
          padding: '1rem',
          transition: 'width 0.3s ease', // Smooth transition when changing width
        }}
      >
        <Properties onIconsToggle={toggleIconsOnly} /> {/* Pass the toggle function */}
      </aside>
      <main
        style={{
          marginLeft: isIconsOnly ? '130px' : '270px', // Adjust margin accordingly
          padding: '2rem',
          flex: 1,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
