import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { Navbar, Services, Footer, Transaction, Welcome } from './Components';
import Login from './Pages/Login';
import Tutorial from './Pages/Tutorial';
import WalletGuide from './Pages/Wallet'; // Import the new Wallet component
import "./index.css";

const AppContent = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/tutorial'];

  return (
    <div className="min-h-screen gradient-bg-welcome">
      {/* Conditionally render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Welcome />
              <Services />
              <Transaction />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<><Login /></>} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/wallets" element={<WalletGuide />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;