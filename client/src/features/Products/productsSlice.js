import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apifetch } from "../../apiService";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    results: [],
    status: "IDLE",
    error: null,
  },
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.results.push(action.payload);
    },
    remove: (state) => {
      state.results.pop();
    },
    fetchAll: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { add, remove, fetchAll } = productsSlice.actions;

export const fetchProducts = createAsyncThunk(
  "retailOS/products/FETCH_PRODUCTS",
  async () => {
    const requestConfig = { method: "post", url: "/products", params: {} };
    const response = await apifetch(requestConfig);
    return response.stores;
  }
);

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
export const selectProducts = (state) => state.products.results;

export default productsSlice.reducer;
