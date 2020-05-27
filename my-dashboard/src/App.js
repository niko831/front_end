import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard';
import Plant from './components/Plant';
import Login from './components/Login';
import Signup from './components/SignUp'
import formSchemaLogin from "./components/validation/formSchemaLogin"
import formSchemaSignup from "./components/validation/formSchemaSingup"
import * as yup from "yup"
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

//onChange Handler
const onInputChange = evt => {
  const name = evt.target.name
  const value = evt.target.value

  yup
    .reach(formSchemaLogin, name)
    .validate(value)  
    .then( valid => {
        setFormErrors({
            ...formErrors,
            [name]: ""
          });
    })    
    .catch( err => { 
        console.log(err.error)
        setFormErrors({
            ...formErrors,
            [name]: err.errors[0]
          });
       
    })

  setLoginValues({
    ...loginValues,
    [name]: value
  })

  yup
    .reach(formSchemaSignup, name)
    .validate(value)  
    .then( valid => {
        setFormErrors({
            ...formErrors,
            [name]: ""
          });
    })    
    .catch( err => { 
        console.log(err.error)
        setFormErrors({
            ...formErrors,
            [name]: err.errors[0]
          });
       
    })

  setSignupValues({
    ...signupValues,
    [name]: value
  })
}



  return (

    <Router>
    <div className="App">
      <Route exact path='/'>
        <Login 
        values={loginValues}
        onInputChange={onInputChange}
        errors={formErrors}
        />
      </Route>
      <Route exact path='/signup'>
        <Signup 
        values={signupValues}
        onInputChange={onInputChange}
        errors={formErrors}
        />
      </Route>
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/usercard' component={UserCard} />
    </div>
    </Router>

   
  );
}

export default App;
