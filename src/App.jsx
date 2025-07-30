import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Journal from './pages/Journal';
import Analytics from './pages/Analytics';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Spend Tracker</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Journal</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/analytics">Analytics</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="mt-4">
          <Routes>
            <Route path="/" element={<Journal addExpense={addExpense} />} />
            <Route path="/analytics" element={<Analytics expenses={expenses} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;