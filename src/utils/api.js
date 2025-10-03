import axios from 'axios';

// Live backend URL from Render
const API = axios.create({
  baseURL: 'https://luct-report-backend.onrender.com/api'
});

export const logout = () => {
  localStorage.removeItem('user');
  window.location.href = '/';
};

export default API;
