import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard';
import Plant from './components/Plant';
import Login from './components/Login';
import Signup from './components/SignUp'
import PrivateRoute from './components/PrivateRoute';
import UserCard from './components/UserCard';

//Initial Login Values
const initialLoginValues = {
  username : "",
  password : ""
}

const initialErrorValues ={
  username: "",
  password: "",
}

function App() {
  //Login States
const [loginValues, setLoginValues] = useState(initialLoginValues)
const [formErrors, setFormErrors] = useState(initialErrorValues)




  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={Login}>
      </Route>
      <Route exact path='/signup' component={Signup}></Route>
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/usercard' component={UserCard} />
    </div>
    </Router>
  );
}

export default App;
