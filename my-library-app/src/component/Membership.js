import React, { useState } from 'react';
import { addMembership, updateMembership } from '../utils/api.js';

const Membership = () => {
  const [isMembershipNew, setIsMembershipNew] = useState(true);
  const [memberName, setMemberName] = useState('');
  const [membershipType, setMembershipType] = useState('basic');
  const [membershipExpiration, setMembershipExpiration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isMembershipNew) {
        await addMembership({
          name: memberName,
          type: membershipType,
          expirationDate: membershipExpiration,
        });
      } else {
        await updateMembership({
          name: memberName,
          type: membershipType,
          expirationDate: membershipExpiration,
        });
      }
      // Reset form fields
      setMemberName('');
      setMembershipType('basic');
      setMembershipExpiration('');
    } catch (error) {
      console.error('Error managing membership:', error);
    }
  };

  return (
    <div>
      <h2>Membership Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            checked={isMembershipNew}
            onChange={() => setIsMembershipNew(true)}
          />
          New Membership
        </label>
        <label>
          <input
            type="radio"
            checked={!isMembershipNew}
            onChange={() => setIsMembershipNew(false)}
          />
          Existing Membership
        </label>
        <label>
          Name:
          <input
            type="text"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
            required
          />
        </label>
        <label>
          Membership Type:
          <select
            value={membershipType}
            onChange={(e) => setMembershipType(e.target.value)}
            required
          >
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
          </select>
        </label>
        <label>
          Expiration Date:
          <input
            type="date"
            value={membershipExpiration}
            onChange={(e) => setMembershipExpiration(e.target.value)}
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Membership;
