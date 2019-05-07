import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Containers/Home/index";
import Login from "./Containers/Login/index";
import SignUp from "./Containers/SignUp/index"
import NotFound from "./Containers/PageNotFound/index"

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route component={NotFound} />
    </Switch>;