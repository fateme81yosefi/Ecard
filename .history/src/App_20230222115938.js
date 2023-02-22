import React, { useContext, useEffect } from "react";
import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { stringify } from "ajv";
import { DataProvider ,BrandProvider} from "./components/shared/Shared";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        {" "}
        <BrandProvider>

        <DataProvider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/parhamKish">
            <Home />
          </Route>{" "}
        </DataProvider>
        </BrandProvider>

      </Switch>
    </BrowserRouter>
  );
}
