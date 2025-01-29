import React, { useState } from 'react';
import Layout from '../../components/Layout';  // Import Layout
import AllProducts from '../../components/Catalogs/AllProducts/AllProducts';
import Categories from '../../components/Catalogs/Categories';
import AttributesAndClasses from '../../components/Catalogs/AttributesAndClasses';
import './Catalog.css'; // For any styling you'd like to apply

const Catalog = () => {
  const [activeTab, setActiveTab] = useState('allProducts'); // Track the active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout> {/* Wrapping the content inside Layout */}
      <div className="catalog-container">
        <div className="catalog-tabs">
          <button
            className={`catalog-tab ${activeTab === 'allProducts' ? 'active' : ''}`}
            onClick={() => handleTabClick('allProducts')}
          >
            All Products
          </button>
          <button
            className={`catalog-tab ${activeTab === 'categories' ? 'active' : ''}`}
            onClick={() => handleTabClick('categories')}
          >
            Categories
          </button>
          <button
            className={`catalog-tab ${activeTab === 'attributesAndClasses' ? 'active' : ''}`}
            onClick={() => handleTabClick('attributesAndClasses')}
          >
            Attributes & Classes
          </button>
        </div>

        <div className="catalog-content">
          {activeTab === 'allProducts' && <AllProducts />}
          {activeTab === 'categories' && <Categories />}
          {activeTab === 'attributesAndClasses' && <AttributesAndClasses />}
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
