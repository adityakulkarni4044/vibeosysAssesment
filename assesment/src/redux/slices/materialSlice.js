import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  materials: [],
};

const materialSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {
    addMaterial: (state, action) => {
      state.materials.push(action.payload);
    },

    updateMaterial: (state, action) => {
      const materialIndex = state.materials.findIndex(
        (material) => material.id === action.payload.id
      );
      if (materialIndex !== -1) {
        state.materials[materialIndex] = action.payload;
      }
    },

    calculateMaterialCost: (state, action) => {
      const material = state.materials.find(
        (mat) => mat.id === action.payload.id
      );
      if (material) {
        material.totalPrice = material.quantity * material.price;
        material.taxAmount = material.totalPrice * 0.1;
        material.totalAmount = material.totalPrice + material.taxAmount;
      }
    },
  },
});

export const {
  addMaterial,
  updateMaterial,
  calculateMaterialCost,
} = materialSlice.actions;

export default materialSlice.reducer;
