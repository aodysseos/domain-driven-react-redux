import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStores, selectStores, fetchAllStores } from "../storesSlice";

const StoresListingPage = () => {
  const { results: stores, status, error } = useSelector(selectStores);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStores());
    dispatch(fetchStores());
  }, []);

  return (
    <div>
      <h1>Stores Listing</h1>
      {status === "PENDING" && !error && <div>loading...</div>}
      {status !== "PENDING" &&
        !error &&
        stores.map((store) => {
          return <div key={store.id}>{store.name}</div>;
        })}
    </div>
  );
};

export default StoresListingPage;
