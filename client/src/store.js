import { configureStore } from "@reduxjs/toolkit";
import storesReducer from "./features/Stores/storesSlice";
import productsReducer from "./features/Products/productsSlice";

export default configureStore({
  reducer: {
    stores: storesReducer,
    products: productsReducer,
  },
});
