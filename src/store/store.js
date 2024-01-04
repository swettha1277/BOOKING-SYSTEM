// Import configureStore and combineReducers from @reduxjs/toolkit and redux
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import busesReducer from '../reducers/buses';
import searchReducer from '../reducers/search';
import detailsReducer from '../reducers/details';

// Combine your reducers
const reducers = combineReducers({
  search: searchReducer,
  buses: busesReducer,
  details: detailsReducer,
});

// Use configureStore instead of createStore
const store = configureStore({
  reducer: reducers,
  // Additional middleware and configuration if needed
});

export default store;
