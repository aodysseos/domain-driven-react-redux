import React from "react";
import PrivateRoute from "../../common/PrivateRoute";

import StoresSearch from "./Pages/StoresListingPage";
import StoreDetails from "./Pages/StoreDetailsPage";

export default [
  <PrivateRoute key="/stores" path="/stores" component={StoresSearch} />,
  <PrivateRoute
    key="/stores/:id"
    path="/stores/:id"
    component={StoreDetails}
  />,
];
