import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ userId }) => {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link to={`/dashboard/${userId}`}>Dashboard</Link></li>
          <li><Link to={`/reports/${userId}`}>Reports</Link></li>
          <li><Link to={`/transactions/${userId}`}>Transactions</Link></li>
          <li><Link to={`/maintenance/${userId}`}>Maintenance</Link></li>
          <li><Link to={`/settings/${userId}`}>Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
