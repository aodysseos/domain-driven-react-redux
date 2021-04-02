import React from "react";
import PrivateRoute from "../../common/PrivateRoute";

import HomePage from "./Pages/HomePage";

export default <PrivateRoute key="/" path="/" component={HomePage} />;
