import React, { useState } from 'react';
import Layout from '../../components/Layout';
import './Ticket.css';

const Ticket = ({ isPropertiesShrunk }) => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [ticketList, setTicketList] = useState([
    { sn: 1, priority: 'High', title: 'Issue 1', description: 'Description 1', status: 'Open' },
    { sn: 2, priority: 'Medium', title: 'Issue 2', description: 'Description 2', status: 'Closed' },
    { sn: 3, priority: 'Low', title: 'Issue 3', description: 'Description 3', status: 'In Progress' },
  ]);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (property) => {
    const sortedList = [...ticketList].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[property] > b[property] ? 1 : -1;
      } else {
        return a[property] < b[property] ? 1 : -1;
      }
    });
    setTicketList(sortedList);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredTickets = ticketList.filter(ticket =>
    ticket.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalTickets = filteredTickets.length;
  const displayedTickets = filteredTickets.slice(0, entriesPerPage);

  return (
    <Layout>
      <div className={`ticket ${isPropertiesShrunk ? 'ticket-expanded' : ''}`}>
      <h3>Tickets</h3>
        {/* Top controls */}
        <div className="ticket-controls">
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
            placeholder="Search Tickets"
            className="ticket-search"
          />
        </div>

        {/* Ticket table */}
        <div className="ticket-table">
          <div className="ticket-header">
            <div className="ticket-header-item" onClick={() => handleSort('sn')}>
              SN <span className="sort-arrow">▲</span>
            </div>
            <div className="ticket-header-item" onClick={() => handleSort('priority')}>
              Priority <span className="sort-arrow">▲</span>
            </div>
            <div className="ticket-header-item" onClick={() => handleSort('title')}>
              Title <span className="sort-arrow">▲</span>
            </div>
            <div className="ticket-header-item" onClick={() => handleSort('description')}>
              Description <span className="sort-arrow">▲</span>
            </div>
            <div className="ticket-header-item" onClick={() => handleSort('status')}>
              Status <span className="sort-arrow">▲</span>
            </div>
            <div className="ticket-header-item">
              Action
            </div>
          </div>

          <div className="ticket-rows">
            {totalTickets > 0 ? (
              displayedTickets.map((ticket) => (
                <div key={ticket.sn} className="ticket-row">
                  <div>{ticket.sn}</div>
                  <div>{ticket.priority}</div>
                  <div>{ticket.title}</div>
                  <div>{ticket.description}</div>
                  <div>{ticket.status}</div>
                  <div>
                    <button className="ticket-action-button">View</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data">No data available</div>
            )}
          </div>
        </div>

        {/* Entries information */}
        <div className="ticket-pagination">
          <span>Showing {totalTickets > 0 ? `1 to ${Math.min(entriesPerPage, totalTickets)} of ${totalTickets}` : '0 of 0'} entries</span>
        </div>
      </div>
    </Layout>
  );
};

export default Ticket;
