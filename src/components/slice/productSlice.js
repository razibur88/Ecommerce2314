import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex(
        (item) => item.id == action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
