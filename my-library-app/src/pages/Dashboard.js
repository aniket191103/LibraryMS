import React from 'react';

import IssueBook from '../component/IssueBook';
import ReturnBook from '../component/ReturnBook.js';
import DashboardStats from '../component/DashboardStats.js';
import BookList from '../component/BookList';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardStats />
      <div>
        <h2>Books</h2>
        <BookList />
        <IssueBook />
        <ReturnBook />
      </div>
    </div>
  );
};

export default Dashboard;
