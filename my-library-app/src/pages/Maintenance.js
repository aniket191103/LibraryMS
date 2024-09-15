import React from 'react';
import BookManagement from '../component/BookManagement.js';
import UserManagement from '../component/UserManagement.js';

const Maintenance = () => {
  return (
    <div>
      <h1>Maintenance</h1>
      <BookManagement />
      <UserManagement />
    </div>
  );
};

export default Maintenance;
