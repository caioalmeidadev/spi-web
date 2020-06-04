import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateProtocol from "./pages/Protocol/Create";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreateProtocol} path="/protocol/create" />
    </BrowserRouter>
  );
};

export default Routes;
