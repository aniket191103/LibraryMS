import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Settings from './pages/Settings';
import Header from './component/Header';
import Transactions from './pages/Transaction';
import Sidebar from './component/Sidebar';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Maintenance from './pages/Maintenance';
import ProtectedRoute from './component/ProtectedRoutes'; // Ensure this import path is correct

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <main>
        <Routes>
  <Route path="/dashboard/:userId" element={<ProtectedRoute component={Dashboard} />} />
  <Route path="/reports/:userId" element={<ProtectedRoute component={Reports} />} />
  <Route path="/transactions/:userId" element={<ProtectedRoute component={Transactions} />} />
  <Route path="/maintenance/:userId" element={<ProtectedRoute component={Maintenance} />} />
  <Route path="/settings/:userId" element={<ProtectedRoute component={Settings} />} />
</Routes>

        </main>
      </div>
    </Router>
  );
};

export default App;
