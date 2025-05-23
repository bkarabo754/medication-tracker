import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
