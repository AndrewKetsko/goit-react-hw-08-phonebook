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

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.items.push(action.payload);
      });
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
  extraReducers: builder => {
    builder
      .addCase( createUser.pending, (state, action) => { })
      .addCase( createUser.rejected, (state, action) => { })
      .addCase( createUser.fulfilled,(state, action)=>{      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogin = true;})
      .addCase( loginUser.pending,(state, action)=>{})
      .addCase( loginUser.rejected,(state, action)=>{})
      .addCase( loginUser.fulfilled,(state, action)=>{      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogin = true;})
      .addCase( logoutUser.pending,(state, action)=>{})
      .addCase( logoutUser.rejected,(state, action)=>{})
      .addCase( logoutUser.fulfilled,(state, action)=>{      state.name = '';
      state.email = '';
      state.token = null;
      state.isLogin = false;})
      .addCase( getCurrentUser.pending,(state, action)=>{})
      .addCase( getCurrentUser.rejected,(state, action)=>{})
      .addCase( getCurrentUser.fulfilled,(state, action)=>{      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLogin = true;})
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
