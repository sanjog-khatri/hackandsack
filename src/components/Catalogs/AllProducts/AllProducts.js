import React, { useState, useEffect } from 'react';
import './AllProducts.css'; // Styling for the page
import AddProduct from './AddProduct/AddProduct';

const AllProducts = () => {
  const [products, setProducts] = useState([]); // Array of products
  const [limit, setLimit] = useState(10); // The limit of products to display
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Entries per page option
  const [searchQuery, setSearchQuery] = useState(''); // For the search functionality
  const [showingEntries, setShowingEntries] = useState([0, 0, 0]); // Showing range (start, end, total)
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false); // To manage modal state

  const handleAddProduct = (newProduct) => {
    if (products.length < limit) {
      setProducts([...products, newProduct]);
      setIsAddProductModalOpen(false); // Close the AddProduct modal after adding
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEntriesPerPage = (e) => {
    setEntriesPerPage(parseInt(e.target.value, 10));
  };

  useEffect(() => {
    // Calculate the number of products displayed and the range
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setShowingEntries([1, Math.min(entriesPerPage, filteredProducts.length), filteredProducts.length]);
  }, [products, searchQuery, entriesPerPage]);

  return (
    <div className="all-products-container">
      <h1>Products</h1>

      {/* Limit and Meter */}
      <div className="product-limit-container">
        <label>Limit: {products.length}/{limit}</label>
        <progress value={products.length} max={limit} className="product-limit-meter"></progress>
      </div>

      {/* Add Product, Search, and Entries per Page */}
      <div className="product-actions">
        <button className="add-product-button" onClick={() => setIsAddProductModalOpen(true)}>
          Add Product
        </button>
        <div className="product-filters">
          <input
            type="text"
            className="search-input"
            placeholder="Search Products"
            value={searchQuery}
            onChange={handleSearch}
          />
          <select className="entries-per-page" value={entriesPerPage} onChange={handleEntriesPerPage}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      {/* Product Table */}
      <div className="product-table-container">
        <div className="product-table-header">
          <span>Showing {showingEntries[0]} to {showingEntries[1]} of {showingEntries[2]} entries</span>
        </div>
        <table className="product-table">
          <thead>
            <tr>
              <th>SN</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-data">No data available</td>
              </tr>
            ) : (
              products
                .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .slice(0, entriesPerPage)
                .map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td><img src={product.image} alt={product.name} className="product-image" /></td>
                    <td>{product.quantity}</td>
                    <td>{product.createdAt}</td>
                    <td>{product.updatedAt}</td>
                    <td><button className="action-button">Edit</button></td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {isAddProductModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AddProduct onAddProduct={handleAddProduct} />
            <button className="close-modal-button" onClick={() => setIsAddProductModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
