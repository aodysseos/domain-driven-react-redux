import React from "react";
import PrivateRoute from "../../common/PrivateRoute";

import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ProductsListingPage from "./Pages/ProductsListingPage";

export default [
  <PrivateRoute
    key="/products"
    path="/products"
    component={ProductsListingPage}
  />,
  <PrivateRoute
    key="/products/:id"
    path="/products/:id"
    component={ProductDetailsPage}
  />,
];
