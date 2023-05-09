import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useSelector } from 'react-redux';

export const getContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/update',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const user = {
  create: '/users/signup',
  login: '/users/login',
  logout: '/users/logout',
  current: '/users/current',
};

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const createUser = createAsyncThunk(
  'user/create',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(user.create, data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(user.login, data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(user.logout);
      clearAuthHeader();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'user/getCurrent',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().user;
    if (!token) {
      return thunkAPI.rejectWithValue('no user');
    }
    setAuthHeader(token);
    try {
      const response = await axios.get(user.current);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
