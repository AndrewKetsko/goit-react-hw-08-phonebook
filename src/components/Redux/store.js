import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './slice';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistSliceReducer } from './slice';

export const appStore = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: persistSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(appStore);
