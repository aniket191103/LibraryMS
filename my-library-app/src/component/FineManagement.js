import React, { useState, useEffect } from 'react';
import { getFines, payFine } from '../utils/api';

const FineManagement = () => {
  const [fines, setFines] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    const fetchFines = async () => {
      try {
        const data = await getFines();
        setFines(data);
      } catch (error) {
        console.error('Error fetching fines:', error);
      }
    };
    fetchFines();
  }, []);

  const handlePayFine = async (fineId) => {
    try {
      await payFine(fineId, paymentMethod);
      // Refetch fines after payment
      const data = await getFines();
      setFines(data);
      setPaymentMethod('');
    } catch (error) {
      console.error('Error paying fine:', error);
    }
  };

  return (
    <div>
      <h2>Fine Management</h2>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Fine Amount</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fines.map((fine) => (
            <tr key={fine.id}>
              <td>{fine.bookName}</td>
              <td>{fine.amount}</td>
              <td>{fine.dueDate}</td>
              <td>
                <input
                  type="text"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  placeholder="Payment Method"
                />
                <button onClick={() => handlePayFine(fine.id)}>Pay Fine</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FineManagement;
