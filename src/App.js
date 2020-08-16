import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css"
import Navbar from "./Navbar"
import Login from "./Login";
import Dashboard from "./Dashboard";
function App() {
  return (
    <Router>
    <Navbar/>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
