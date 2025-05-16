import { axiosInstance } from '@/lib/axios';

// Authentication
export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post('/api/register', data);
  return response.data;
};
