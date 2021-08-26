// import logo from './logo.svg';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CreateAppointment from "./pages/createAppointment/CreateAppointment";
import ViewAppointment from "./pages/viewAppointment/ViewAppointment";
import Billing from "./pages/Billing/Billing";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <div className="mylogo"></div>
          <ul>
            <li>
              <Link to="/">Book Appointment</Link>
            </li>
            <li>
              <Link to="/view">View Appoitment</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <CreateAppointment />
          </Route>
          <Route path="/view">
            <ViewAppointment />
          </Route>
          <Route path="/billing">
            <Billing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
