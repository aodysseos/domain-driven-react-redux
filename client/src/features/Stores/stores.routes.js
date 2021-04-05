import React from "react";
import PrivateRoute from "../../common/PrivateRoute";

import StoresListingPage from "./Pages/StoresListingPage";
import StoreDetailsPage from "./Pages/StoreDetailsPage";

export default [
  <PrivateRoute key="/stores" path="/stores" component={StoresListingPage} />,
  <PrivateRoute
    key="/stores/:id"
    path="/stores/:id"
    component={StoreDetailsPage}
  />,
];
