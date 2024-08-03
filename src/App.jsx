import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EmployeeDetailPage from './pages/EmployeeDetailPage';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/employee/:id" element={<EmployeeDetailPage/>} />
        <Route path="/add-employee" element={<EmployeeForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
