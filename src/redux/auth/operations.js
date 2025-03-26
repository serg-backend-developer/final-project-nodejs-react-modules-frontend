import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { logout } from "./authSlice";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/register`, userData);

      // Якщо реєстрація успішна, викликаємо loginUser
      dispatch(loginUser({ email: userData.email, password: userData.password }));

      return data;
    } catch (error) {
        toast.error(error.response?.data?.message);
        return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, credentials);
      return data;
    } catch (error) {
        toast.error(error.response?.data?.message);
        return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { getState, dispatch }) => {
    try {
      const token = getState().auth.token;
      if (!token) throw new Error('No token available'); 

      await axios.post(`${BASE_URL}/auth/logout`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error('Logout request failed:', error);
    } finally {
      dispatch(logout()); 
    }
  }
);
