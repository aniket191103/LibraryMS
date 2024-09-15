import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPopup from './LoginPopup.js';

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  // Ensure user and user.sub are defined
  const userId = isAuthenticated && user && user.sub ? user.sub.split('|')[1] : '';

  return (
    <header>
      <div className="logo">
        <Link to={userId ? `/dashboard/${userId}` : '/dashboard'}>
          Library Management System
        </Link>
      </div>
      <LoginPopup />
      <nav>
        <ul>
          <li>
            <Link to={userId ? `/dashboard/${userId}` : '/dashboard'}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={userId ? `/reports/${userId}` : '/reports'}>
              Reports
            </Link>
          </li>
          <li>
            <Link to={userId ? `/transactions/${userId}` : '/transactions'}>
              Transactions
            </Link>
          </li>
          <li>
            <Link to={userId ? `/maintenance/${userId}` : '/maintenance'}>
              Maintenance
            </Link>
          </li>
          <li>
            <Link to={userId ? `/settings/${userId}` : '/settings'}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
