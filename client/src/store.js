import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storesReducer from "./features/Stores/storesSlice";
import productsReducer from "./features/Products/productsSlice";

const middleware = [
  ...getDefaultMiddleware(),
  /*YOUR CUSTOM MIDDLEWARES HERE*/
];

export default configureStore({
  reducer: {
    stores: storesReducer,
    products: productsReducer,
  },
  middleware,
});
