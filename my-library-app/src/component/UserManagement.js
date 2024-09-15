import React, { useState } from 'react';
import { addUser, updateUser } from '../utils/api.js';

const UserManagement = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('user');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isNewUser) {
        await addUser({
          name: userName,
          role: userRole,
        });
      } else {
        await updateUser({
          name: userName,
          role: userRole,
        });
      }
      // Reset form fields
      setUserName('');
      setUserRole('user');
    } catch (error) {
      console.error('Error managing user:', error);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            checked={isNewUser}
            onChange={() => setIsNewUser(true)}
          />
          New User
        </label>
        <label>
          <input
            type="radio"
            checked={!isNewUser}
            onChange={() => setIsNewUser(false)}
          />
          Existing User
        </label>
        <label>
          Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>
        <label>
          Role:
          <select
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserManagement;
