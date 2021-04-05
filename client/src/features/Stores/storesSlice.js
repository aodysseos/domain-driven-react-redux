// What is Redux Toolkit?
// Redux Toolkit is our official, opinionated, batteries-included toolset for efficient Redux development.
// It is intended to be the standard way to write Redux logic.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apifetchStores } from "../../apiService";

export const fetchStores = createAsyncThunk(
  "retailOS/stores/FETCH_STORES",
  async () => {
    const data = await apifetchStores();
    return data;
  }
);

// A createSlice() function accepts a set of reducer functions, a slice name, and an initial state value,
// and automatically generates a slice reducer with corresponding action creators and action types.
export const storesSlice = createSlice({
  name: "stores",
  initialState: {
    results: [],
    status: "IDLE",
    error: null,
  },
  reducers: {
    addStore: (state, action) => {},
    removeStore: (state, action) => {},
    fetchStore: (state, action) => {},
    fetchAllStores: (state, action) => {
      console.log("fetchAllStores:", { results: state.status, action });
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchStores.pending]: (state) => {
      state.status = "PENDING";
    },
    [fetchStores.fulfilled]: (state, action) => {
      state.status = "SUCCESS";
      state.results = action.payload;
    },
    [fetchStores.rejected]: (state, action) => {
      state.status = "FAILED";
      state.error = action.error.message;
      state.results = [];
    },
  },
});

export const {
  addStore,
  removeStore,
  fetchStore,
  fetchAllStores,
} = storesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectStores = (state) => state.stores;

export default storesSlice.reducer;
