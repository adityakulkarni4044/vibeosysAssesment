import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    updateProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.products[productIndex] = action.payload;
      }
    },

    calculateTotalCost: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        product.totalCost = product.materials.reduce(
          (acc, material) => acc + material.totalAmount,
          0
        );
      }
    },

    addMaterialToProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.productId
      );
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        product.materials.push(action.payload.material);
      }
    },

    updateMaterialInProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.productId
      );
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        const materialIndex = product.materials.findIndex(
          (material) => material.id === action.payload.material.id
        );
        if (materialIndex !== -1) {
          product.materials[materialIndex] = action.payload.material;
        }
      }
    },
  },
});

export const {
  addProduct,
  updateProduct,
  calculateTotalCost,
  addMaterialToProduct,
  updateMaterialInProduct,
} = productSlice.actions;

export default productSlice.reducer;
