import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './query';
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
  },
});

export const contactsReducer = contactsSlice.reducer;

export const userSlice = createSlice({
  name: 'user',
  initialState: { email: '', name: '', token: '', isLogin: false },
  reducers: {
    // some reducers
  },
});

// export const { filterContacts } = filterSlice.actions;
export const userReducer = userSlice.reducer;

const persistConfig = {
  key: 'user',
  storage,
};

export const persistSliceReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);
