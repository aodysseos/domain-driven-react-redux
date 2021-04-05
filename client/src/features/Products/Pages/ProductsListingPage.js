import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, selectProducts } from "../productsSlice";
import { fetchStores, selectStores } from "../../Stores/storesSlice";

const ProductsListingPage = () => {
  const {
    results: products,
    status: productsStatus,
    error: productsError,
  } = useSelector(selectProducts);
  const {
    results: stores,
    status: storesStatus,
    error: storesError,
  } = useSelector(selectStores);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStores());
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h1>Products Listing</h1>
      {productsStatus === "PENDING" && !productsError && <div>loading...</div>}
      {productsStatus !== "PENDING" &&
        !productsError &&
        products.map((product) => {
          return <div key={product.id}>{`${product.name}`}</div>;
        })}
      {storesStatus === "PENDING" && !storesError && <div>loading...</div>}
      {storesStatus !== "PENDING" &&
        !storesError &&
        stores.map((store) => {
          return <div key={store.id}>{`${store.name}`}</div>;
        })}
    </div>
  );
};

export default ProductsListingPage;
