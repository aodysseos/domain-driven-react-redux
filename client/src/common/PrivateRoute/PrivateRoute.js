import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  return <Route {...rest}>{RouteComponent}</Route>;
};
export default PrivateRoute;
