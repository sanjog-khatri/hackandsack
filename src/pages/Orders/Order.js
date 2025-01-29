import React, { useState } from 'react';
import Layout from '../../components/Layout';
import './Order.css';

const Order = ({ isPropertiesShrunk }) => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [orderList, setOrderList] = useState([
    {
      sn: 1,
      orderNumber: 'ORD001',
      name: 'John Doe',
      orderDate: '2025-01-20',
      totalAmount: '$200',
      paymentMethod: 'Credit Card',
      paymentStatus: 'Paid',
      orderStatus: 'Shipped',
    },
    {
      sn: 2,
      orderNumber: 'ORD002',
      name: 'Jane Smith',
      orderDate: '2025-01-18',
      totalAmount: '$150',
      paymentMethod: 'PayPal',
      paymentStatus: 'Unpaid',
      orderStatus: 'Pending',
    },
    {
      sn: 3,
      orderNumber: 'ORD003',
      name: 'Michael Johnson',
      orderDate: '2025-01-15',
      totalAmount: '$300',
      paymentMethod: 'Debit Card',
      paymentStatus: 'Paid',
      orderStatus: 'Delivered',
    },
  ]);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (property) => {
    const sortedList = [...orderList].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[property] > b[property] ? 1 : -1;
      } else {
        return a[property] < b[property] ? 1 : -1;
      }
    });
    setOrderList(sortedList);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredOrders = orderList.filter(order =>
    order.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalOrders = filteredOrders.length;
  const displayedOrders = filteredOrders.slice(0, entriesPerPage);

  return (
    <Layout>
      <div className={`order ${isPropertiesShrunk ? 'order-expanded' : ''}`}>
        <h3>Orders</h3>
        {/* Top controls */}
        <div className="order-controls">
          <select
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            className="entries-select"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Orders"
            className="order-search"
          />
        </div>

        {/* Order table */}
        <div className="order-header">
  <div className="order-header-item sn" onClick={() => handleSort('sn')}>
    SN <span className="sort-arrow">▲</span>
  </div>
  <div className="order-header-item" onClick={() => handleSort('orderNumber')}>
    Order Number <span className="sort-arrow">▲</span>
  </div>
  <div className="order-header-item" onClick={() => handleSort('name')}>
    Name <span className="sort-arrow">▲</span>
  </div>
  <div className="order-header-item" onClick={() => handleSort('orderDate')}>
    Order Date <span className="sort-arrow">▲</span>
  </div>
  <div className="order-header-item" onClick={() => handleSort('totalAmount')}>
    Total Amount <span className="sort-arrow">▲</span>
  </div>
  <div className="order-header-item" onClick={() => handleSort('paymentMethod')}>
    Payment Method <span className="sort-arrow">▲</span>
  </div>
  <div className="order-header-item" onClick={() => handleSort('paymentStatus')}>
    Payment Status <span className="sort-arrow">▲</span>
  </div>
  <div className="order-header-item" onClick={() => handleSort('orderStatus')}>
    Order Status <span className="sort-arrow">▲</span>
  </div>
  <div className="order-header-item">
    Action
  </div>
</div>

<div className="order-rows">
  {totalOrders > 0 ? (
    displayedOrders.map((order) => (
      <div key={order.sn} className="order-row">
        <div className="sn">{order.sn}</div>
        <div>{order.orderNumber}</div>
        <div>{order.name}</div>
        <div>{order.orderDate}</div>
        <div>{order.totalAmount}</div>
        <div>{order.paymentMethod}</div>
        <div>{order.paymentStatus}</div>
        <div>{order.orderStatus}</div>
        <div>
          <button className="order-action-button">View Order Details</button>
        </div>
      </div>
    ))
  ) : (
    <div className="no-data">No data available</div>
  )}
</div>

        {/* Entries information */}
        <div className="order-pagination">
          <span>Showing {totalOrders > 0 ? `1 to ${Math.min(entriesPerPage, totalOrders)} of ${totalOrders}` : '0 of 0'} entries</span>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
