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

const initialSignupValues = {
  username: "",
  password: "",
  passwordconfirm : "",
  phone: ""
}
const initialErrorValues ={
  username: "",
  password: "",
}



function App() {
  //Login States
const [loginValues, setLoginValues] = useState(initialLoginValues)
const [signupValues, setSignupValues] = useState(initialSignupValues)
const [formErrors, setFormErrors] = useState(initialErrorValues)




  return (

    <Router>
    <div className="App">
      <Route exact path='/'>
        <Login 
        values={loginValues}
        />
      </Route>
      <Route exact path='/signup'>
        <Signup 
        values={signupValues}
        />
      </Route>
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/usercard' component={UserCard} />
    </div>
    </Router>

   
  );
}

export default App;
