import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/Landing.js";
import Organizations from "views/Organizations.js";
import SingleOrg from 'views/SingleOrg';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/orgs' component={Organizations} />
      <Route exact path='/orgs/:id' component={SingleOrg} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
