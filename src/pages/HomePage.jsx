import React, { useEffect, useState } from 'react';
import { fetchEmployees } from '../api/employee';
import EmployeeCard from '../components/EmployeeCard';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
    };
    getEmployees();
  }, []);

  const handleAddEmployee = () => {
    navigate('/add-employee');
  };

  return (
    <div>
    <h1>Employee List</h1>
    <div>
      {employees.map((employee) => (
        <EmployeeCard key={employee._id} employee={employee} />
      ))}
    </div>
    <Button onClick={handleAddEmployee} variant="contained" color="primary">
        Add New Employee
      </Button>
      </div>
  );
};

export default HomePage;
