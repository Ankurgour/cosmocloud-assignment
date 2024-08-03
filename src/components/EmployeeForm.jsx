import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { addEmployee } from '../api/employee';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    address: {
      line1: '',
      city: '',
      country: '',
      zip_code: '',
    },
    contact_methods: {
      contact_method: '',
      value: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      contact_methods: {
        ...prevState.contact_methods,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(employee);
    // Optionally, handle post-submit actions like navigation or alerts
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">Add New Employee</Typography>
      <TextField
        name="name"
        label="Name"
        value={employee.name}
        onChange={handleChange}
        required
      />
      <Typography variant="subtitle1">Address</Typography>
      <TextField
        name="line1"
        label="Line 1"
        value={employee.address.line1}
        onChange={handleAddressChange}
        required
      />
      <TextField
        name="city"
        label="City"
        value={employee.address.city}
        onChange={handleAddressChange}
        required
      />
      <TextField
        name="country"
        label="Country"
        value={employee.address.country}
        onChange={handleAddressChange}
        required
      />
      <TextField
        name="zip_code"
        label="Zip Code"
        value={employee.address.zip_code}
        onChange={handleAddressChange}
        required
      />
      <Typography variant="subtitle1">Contact Method</Typography>
      <TextField
        name="contact_method"
        label="Contact Method"
        value={employee.contact_methods.contact_method}
        onChange={handleContactChange}
        required
      />
      <TextField
        name="value"
        label="Value"
        value={employee.contact_methods.value}
        onChange={handleContactChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">Add Employee</Button>
    </form>
  );
};

export default EmployeeForm;
