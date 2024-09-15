import React from 'react';
import IssueBook from '../component/IssueBook.js';
import ReturnBook from '../component/ReturnBook.js';
import PayFine from '../component/PayFine.js';
import TransactionHistory from '../component/TransactionHistory.js';

const Transactions = () => {
  return (
    <div>
      <h1>Transactions</h1>
      <IssueBook />
      <ReturnBook />
      <PayFine />
      <TransactionHistory />
    </div>
  );
};

export default Transactions;
