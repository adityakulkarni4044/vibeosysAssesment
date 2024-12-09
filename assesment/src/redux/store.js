import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import materialReducer from './slices/materialSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    materials: materialReducer,
  },
});

export default store;
