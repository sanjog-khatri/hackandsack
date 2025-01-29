import React, { useState } from 'react';
import './Categories.css';  // Ensure you have the corresponding CSS file

const Categories = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryList, setCategoryList] = useState([
    { sn: 1, priority: 'High', title: 'Category 1', description: 'Description 1', status: 'Active' },
    { sn: 2, priority: 'Medium', title: 'Category 2', description: 'Description 2', status: 'Inactive' },
    { sn: 3, priority: 'Low', title: 'Category 3', description: 'Description 3', status: 'Active' },
  ]);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (property) => {
    const sortedList = [...categoryList].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[property] > b[property] ? 1 : -1;
      } else {
        return a[property] < b[property] ? 1 : -1;
      }
    });
    setCategoryList(sortedList);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredCategories = categoryList.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalCategories = filteredCategories.length;
  const displayedCategories = filteredCategories.slice(0, entriesPerPage);

  const handleAddCategory = () => {
    // Logic to handle category addition
    console.log('Add Category button clicked');
  };

  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <div className="categories-controls">
        {/* Add Category Button */}
        <button onClick={handleAddCategory} className="add-category-btn">Add Category</button>
        
        {/* Search Bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Categories"
          className="categories-search"
        />
      </div>

      {/* Category table */}
      <div className="categories-table">
        <div className="categories-header">
          <div className="categories-header-item" onClick={() => handleSort('sn')}>
            SN <span className="sort-arrow">▲</span>
          </div>
          <div className="categories-header-item" onClick={() => handleSort('priority')}>
            Priority <span className="sort-arrow">▲</span>
          </div>
          <div className="categories-header-item" onClick={() => handleSort('title')}>
            Title <span className="sort-arrow">▲</span>
          </div>
          <div className="categories-header-item" onClick={() => handleSort('description')}>
            Description <span className="sort-arrow">▲</span>
          </div>
          <div className="categories-header-item" onClick={() => handleSort('status')}>
            Status <span className="sort-arrow">▲</span>
          </div>
          <div className="categories-header-item">
            Action
          </div>
        </div>

        <div className="categories-rows">
          {totalCategories > 0 ? (
            displayedCategories.map((category) => (
              <div key={category.sn} className="categories-row">
                <div>{category.sn}</div>
                <div>{category.priority}</div>
                <div>{category.title}</div>
                <div>{category.description}</div>
                <div>{category.status}</div>
                <div>
                  <button className="category-action-button">View</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-data">No data available</div>
          )}
        </div>
      </div>

      {/* Entries information */}
      <div className="categories-pagination">
        <span>Showing {totalCategories > 0 ? `1 to ${Math.min(entriesPerPage, totalCategories)} of ${totalCategories}` : '0 of 0'} entries</span>
      </div>
    </div>
  );
};

export default Categories;
