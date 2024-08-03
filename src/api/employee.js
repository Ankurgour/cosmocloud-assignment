import axios from 'axios';

const API_URL = 'https://free-ap-south-1.cosmocloud.io/development/api';
const PROJECT_ID = "66ada7a668ec56b457b0aa07";
const ENVIRONMENT_ID = "66ada7a668ec56b457b0aa08";

const headers = {
  'ProjectId': PROJECT_ID,
  'environmentId': ENVIRONMENT_ID,
};

export const fetchEmployees = async () => {
  const response = await axios.get(`${API_URL}/employee?limit=10&offset=0`, { headers });
 
  return response.data.data;
};

export const fetchEmployeeDetails = async (id) => {
  const response = await axios.get(`${API_URL}/employee/${id}`, { headers });
  return response.data;
};

export const addEmployee = async (employee) => {
  const response = await axios.post(`${API_URL}/employee`, employee, { headers });
  return response.data;
};
