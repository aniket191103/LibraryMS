import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPopup = () => {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithPopup();
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleLogout = () => {
    try {
      logout({ returnTo: window.location.origin });
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginPopup;
