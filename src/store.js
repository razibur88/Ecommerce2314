import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./components/slice/productSlice";

export default configureStore({
  reducer: {
    product: productSlice,
  },
});
