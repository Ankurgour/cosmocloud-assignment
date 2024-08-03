import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEmployeeDetails } from '../api/employee';
import './emp.css';

const EmployeeDetailPage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEmployeeDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchEmployeeDetails(id);
        setEmployee(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getEmployeeDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!employee) return <div>No employee found.</div>;

  const {
    name,
    address: { line1, city, country, zip_code } = {},
    contact_methods: { contact_method, value } = {}
  } = employee;

  return (
    <>
    <h1>Employee Details</h1>
    <div className="container">
    
      <h1 className="header">{name}</h1>
      <div className="details">
        <label className="label">Address Line 1:</label>
        <div className="value">{line1 || 'N/A'}</div>
      </div>
      <div className="details">
        <label className="label">City:</label>
        <div className="value">{city || 'N/A'}</div>
      </div>
      <div className="details">
        <label className="label">Country:</label>
        <div className="value">{country || 'N/A'}</div>
      </div>
      <div className="details">
        <label className="label">Zip Code:</label>
        <div className="value">{zip_code || 'N/A'}</div>
      </div>
      <div className="details">
        <label className="label">Contact Method:</label>
        <div className="value">{contact_method || 'N/A'}: {value || 'N/A'}</div>
      </div>
    </div>
    </>
  );
};

export default EmployeeDetailPage;