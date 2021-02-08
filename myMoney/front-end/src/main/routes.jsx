import React from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router";
import DashBoard from "../dashboard/dashBoard";
import BillingCycles from "../billingCycle/billingCycle";
const Routes = (props) => (
  <Switch>
    <Route exact path="/">
      <Redirect to='/home' component={DashBoard}/>
    </Route>
    <Route path="/home" component={DashBoard} />
    <Route path="/billingcycles" component={BillingCycles}/>
  </Switch>
);
export default Routes;