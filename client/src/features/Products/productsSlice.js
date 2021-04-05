import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apifetchProducts } from "../../apiService";

export const fetchProducts = createAsyncThunk(
  "retailOS/stores/FETCH_PRODUCTS",
  async () => {
    const data = await apifetchProducts();
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    results: [],
    status: "IDLE",
    error: null,
  },
  reducers: {},
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchProducts.pending]: (state) => {
      state.status = "PENDING";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "SUCCESS";
      state.results = action.payload;
    },
    [fetchProducts.rejected]: (state) => {
      state.error = "Failed to fetch products";
      state.status = "FAILED";
      state.results = [];
    },
  },
});

export const { add, remove, fetchAll } = productsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(fetchAllProducts())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchAllProducts = () => (dispatch) => {
  setTimeout(() => {
    dispatch(fetchAll());
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
