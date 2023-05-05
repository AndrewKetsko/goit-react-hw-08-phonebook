import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://644f70c6b61a9f0c4d22c00a.mockapi.io/api/contacts'
      );
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
      const response = await axios.post(
        'https://644f70c6b61a9f0c4d22c00a.mockapi.io/api/contacts',
        { "name": data.name, "phone": data.phone}
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://644f70c6b61a9f0c4d22c00a.mockapi.io/api/contacts/${contactId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
