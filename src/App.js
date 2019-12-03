import React from "react";
import Store_Header from './Store_Header';
import StorePlp from './StorePlp';
import StorePdp from './StorePdp'
import AdminHeader from './AdminHeader';
import AdminUsers from './AdminUsers';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <AdminHeader />
          <Route path="/admin/users" component={AdminUsers}/>
        </Route>
        <Route path="/store">
          <Store_Header />
          <Route path="/store/plp" component={StorePlp} />
          <Route path="/store/pdp" component={StorePdp} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
