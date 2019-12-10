import React from "react";
import StoreHeader from "./StoreHeader";
import StorePlp from "./StorePlp";
import StorePdp from "./StorePdp";
import AdminHeader from "./AdminHeader";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cities from "./AdminCities";
import AdminStates from "./AdminStates";
import CheckoutPage from "./store/CheckoutPage";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminHeader />
            
            <Route path="/admin/cities" component={Cities} />
            <Route path="/admin/states" component={AdminStates} />
          </Route>
          <Route path="/store">
            <StoreHeader />
            <Route path="/store/plp" component={StorePlp} />
            <Route path="/store/pdp/:id" component={StorePdp} />
            <Route path="/store/checkout" component={CheckoutPage} />
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
