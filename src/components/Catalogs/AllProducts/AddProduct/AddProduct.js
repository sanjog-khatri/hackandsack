import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [activeTab, setActiveTab] = useState('productAndAttribute'); // Default tab is Product & Attribute
  const [productDetails, setProductDetails] = useState({
    category: '',
    name: '',
    price: '',
    image: '',
    quantity: '',
    description: '',
  });
  const [variants, setVariants] = useState([]); // State to hold variants

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleProductDetailsChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleAddVariant = () => {
    setVariants([
      ...variants,
      {
        combination: '',
        price: '',
        discountedPrice: '',
        quantity: '',
        skuId: '',
        weight: '',
      },
    ]);
  };

  const handleVariantChange = (index, field, value) => {
    const updatedVariants = [...variants];
    updatedVariants[index][field] = value;
    setVariants(updatedVariants);
  };

  const handleSubmitProduct = () => {
    // Logic to submit the product
    console.log('Product Details:', productDetails);
    console.log('Variants:', variants);
  };

  const handleRemoveVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  return (
    <div className="add-product-container">
      {/* Tabs for Product & Attribute and Variant */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'productAndAttribute' ? 'active' : ''}`}
          onClick={() => handleTabChange('productAndAttribute')}
        >
          Product & Attribute
        </button>
        <button
          className={`tab ${activeTab === 'variant' ? 'active' : ''}`}
          onClick={() => handleTabChange('variant')}
        >
          Variant
        </button>
      </div>

      {/* Product & Attribute Tab */}
      {activeTab === 'productAndAttribute' && (
        <div className="product-attribute-container">
          {/* Product Details */}
          <div className="product-details">
            <div className="section-left">
              <div className="form-group">
                <label>Select Category</label>
                <select
                  name="category"
                  value={productDetails.category}
                  onChange={handleProductDetailsChange}
                  placeholder="Select Category"
                >
                  <option value="">Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                </select>
              </div>

              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={productDetails.name}
                  onChange={handleProductDetailsChange}
                  placeholder="Product Name"
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={productDetails.price}
                  onChange={handleProductDetailsChange}
                  placeholder="Price"
                />
              </div>

              <div className="form-group">
                <label>Thumbnail Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    setProductDetails({ ...productDetails, image: e.target.files[0] })
                  }
                />
              </div>
            </div>

            <div className="section-right">
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={productDetails.quantity}
                  onChange={handleProductDetailsChange}
                  placeholder="Quantity"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={productDetails.description}
                  onChange={handleProductDetailsChange}
                  placeholder="Description"
                />
              </div>
            </div>
          </div>

          {/* Select Attributes Section */}
          <div className="select-attributes-container">
            <label>Select Attributes</label>
            <select>
              <option value="">Select Attribute</option>
              <option value="color">Color</option>
              <option value="size">Size</option>
            </select>
          </div>

          <button className="add-product-btn" onClick={handleSubmitProduct}>
            Add Product
          </button>
        </div>
      )}

      {/* Variant Tab */}
      {activeTab === 'variant' && (
        <div className="variant-container">
          {/* Variant Table */}
          <div className="variant-table">
            <table>
              <thead>
                <tr>
                  <th>Combination</th>
                  <th>Price</th>
                  <th>Discounted Price</th>
                  <th>Quantity</th>
                  <th>SKU ID</th>
                  <th>Weight</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {variants.map((variant, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        value={variant.combination}
                        onChange={(e) => handleVariantChange(index, 'combination', e.target.value)}
                        placeholder="Combination"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={variant.price}
                        onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
                        placeholder="Price"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={variant.discountedPrice}
                        onChange={(e) => handleVariantChange(index, 'discountedPrice', e.target.value)}
                        placeholder="Discounted Price"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={variant.quantity}
                        onChange={(e) => handleVariantChange(index, 'quantity', e.target.value)}
                        placeholder="Quantity"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={variant.skuId}
                        onChange={(e) => handleVariantChange(index, 'skuId', e.target.value)}
                        placeholder="SKU ID"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={variant.weight}
                        onChange={(e) => handleVariantChange(index, 'weight', e.target.value)}
                        placeholder="Weight"
                      />
                    </td>
                    <td className="remove-cell">
                      <span className="remove-icon" onClick={() => handleRemoveVariant(index)}>
                        &#10005; {/* Unicode for a cross mark */}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add New Variant Button */}
          <button className="add-variant-btn" onClick={handleAddVariant}>
            Add Variant
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
