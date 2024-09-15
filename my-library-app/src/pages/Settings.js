import React, { useState } from 'react';
import { updateSettings } from '../utils/api';

const Settings = () => {
  const [libraryName, setLibraryName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateSettings({
        libraryName,
        address,
        phoneNumber,
        email,
      });
      // Reset form fields
      setLibraryName('');
      setAddress('');
      setPhoneNumber('');
      setEmail('');
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Library Name:
          <input
            type="text"
            value={libraryName}
            onChange={(e) => setLibraryName(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Settings;
