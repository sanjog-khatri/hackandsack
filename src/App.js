import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing page/LandingPage';
import Store from './pages/Store/Store';
import Staff from './pages/Staff/Staff';
import Ticket from './pages/Ticket/Ticket';
import Customization from './pages/Customization/Customization';
import Catalog from './pages/Catalog/Catalog';
import Order from './pages/Orders/Order';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/order" element={<Order />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
