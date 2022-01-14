import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OrgList from './components/orgList/orglist';

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/Landing.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Landing} />
      <Route path='/orgs' component={OrgList} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
