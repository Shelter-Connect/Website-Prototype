import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/Landing.js";
import Datatable from "./components/DataTable";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/demo' component={Datatable} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
