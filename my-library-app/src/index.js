import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { AppContextProvider } from '../src/context/Appcontext.js'; // Adjust the path as necessary
import './styles/global.css'; // Import your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
     domain=""
    clientId=""
    redirectUri={window.location.origin}
  >
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Auth0Provider>
);
