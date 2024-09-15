import React, { useState } from 'react';
import { payFine } from '../utils/api.js';

const PayFine = () => {
  const [fineAmount, setFineAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await payFine({
        amount: fineAmount,
        paymentMethod,
      });
      // Reset form fields
      setFineAmount(0);
      setPaymentMethod('');
    } catch (error) {
      console.error('Error paying fine:', error);
    }
  };

  return (
    <div>
      <h2>Pay Fine</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Fine Amount:
          <input
            type="number"
            value={fineAmount}
            onChange={(e) => setFineAmount(e.target.value)}
            required
          />
        </label>
        <label>
          Payment Method:
          <input
            type="text"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          />
        </label>
        <button type="submit">Pay Fine</button>
      </form>
    </div>
  );
};

export default PayFine;
