import React, { createContext, useState, useContext } from 'react';

// Create the AppContext
const AppContext = createContext();

// Define the AppContextProvider component
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  // Define the state and functions to be shared
  const appState = {
    user,
    setUser,
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={appState}>
      {children}
    </AppContext.Provider>
  );
};

// Define a custom hook to access the AppContext
export const useAppContext = () => useContext(AppContext);
