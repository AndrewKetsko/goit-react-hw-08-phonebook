import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  createUser,
  deleteContact,
  getContacts,
  getCurrentUser,
  loginUser,
  logoutUser,
  updateContact,
} from './query';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [updateContact.pending]: handlePending,
    [updateContact.rejected]: handleRejected,

    [getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },

    [updateContact.fulfilled](state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.items.push(action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    name: '',
    token: null,
    isLogin: false,
    isRefreshin: false,
  },
  reducers: {
    // some reducers
  },
  extraReducers: {
    [createUser.pending](state, action) {},
    [createUser.rejected](state, action) {},
    [createUser.fulfilled](state, action) {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [loginUser.pending](state, action) {},
    [loginUser.rejected](state, action) {},
    [loginUser.fulfilled](state, action) {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [logoutUser.pending](state, action) {},
    [logoutUser.rejected](state, action) {},
    [logoutUser.fulfilled](state, action) {
      state.name = '';
      state.email = '';
      state.token = null;
      state.isLogin = false;
    },
    [getCurrentUser.pending](state, action) {},
    [getCurrentUser.rejected](state, action) {},
    [getCurrentUser.fulfilled](state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLogin = true;
    },
  },
});

// export const { filterContacts } = filterSlice.actions;
export const userReducer = userSlice.reducer;

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const persistSliceReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);
