import React, { useContext, useEffect } from "react";
import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { stringify } from "ajv";
import { DataProvider } from "./components/shared/Shared";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        {" "}
        <DataProvider>

        <DataProvider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/parhamKish">
            <Home />
          </Route>{" "}
        </DataProvider>
      </Switch>
    </BrowserRouter>
  );
}
