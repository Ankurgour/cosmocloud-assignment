import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';

const EmployeeCard = ({ employee }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/employee/${employee._id}`);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{employee.name}</Typography>
        <Button onClick={handleReadMore}>Read More</Button>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
