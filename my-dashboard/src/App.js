import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard';
import Plant from './components/Plant';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import UserCard from './components/UserCard';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Route exact path='/' component={Login} /> */}
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/usercard' component={UserCard} />
    </div>
    </Router>
  );
}

export default App;
