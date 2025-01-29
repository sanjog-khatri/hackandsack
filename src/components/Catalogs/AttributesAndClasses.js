import React, { useState } from 'react';
import './AttributeAndClasses.css'; // Make sure to create the corresponding CSS file

const AttributesAndClasses = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [productClasses, setProductClasses] = useState([
    { name: 'Electronics', id: 1 },
    { name: 'Clothing', id: 2 },
    { name: 'Furniture', id: 3 },
  ]);
  const [attributes, setAttributes] = useState({
    1: ['Color', 'Size', 'Weight'],
    2: ['Fabric', 'Color', 'Size'],
    3: ['Material', 'Color', 'Weight'],
  });

  const handleAddProductClass = () => {
    const newClassName = prompt('Enter product class name');
    if (newClassName) {
      const newClass = {
        name: newClassName,
        id: productClasses.length + 1,
      };
      setProductClasses([...productClasses, newClass]);
    }
  };

  const handleClassSelection = (classId) => {
    setSelectedClass(classId);
  };

  return (
    <div className="attributes-and-classes-container">
      <h2>Attributes & Classes</h2>

      {/* Container for both sections, use flex to align them horizontally */}
      <div className="sections-container">
        {/* Left Section: Product Classes */}
        <div className="left-section">
          <div className="product-class-container">
            <span>Product Class</span>
            <button className="add-class-btn" onClick={handleAddProductClass}>Add Product Class</button>
          </div>

          {/* Product Class Table */}
          <div className="product-class-table">
            <div className="table-header">
              <div className="table-header-item">Name</div>
              <div className="table-header-item">Action</div>
            </div>
            {productClasses.map((productClass) => (
              <div key={productClass.id} className="table-row">
                <div className="table-cell">{productClass.name}</div>
                <div className="table-cell">
                  <button className="select-class-btn" onClick={() => handleClassSelection(productClass.id)}>
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Attributes */}
        <div className="right-section">
          <div className="attributes-container">
            <span>Attributes</span>
            {selectedClass ? (
              <ul>
                {attributes[selectedClass]?.map((attribute, index) => (
                  <li key={index}>{attribute}</li>
                ))}
              </ul>
            ) : (
              <p>Please select an attribute first!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttributesAndClasses;
