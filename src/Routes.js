import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/index";
import NotFound from "./containers/PageNotFound/index"

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
    </Switch>;