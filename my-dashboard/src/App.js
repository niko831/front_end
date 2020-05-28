import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard';
// import Plant from './components/Plant';
import Login from './components/Login';
import Signup from './components/SignUp'
import PrivateRoute from './components/PrivateRoute';
import UserCard from './components/UserCard';

import { UserContext } from './contexts/UserContext';


function App() {

  // CONTEXT STATE
  const user_id = window.localStorage.getItem('id')

  const [userState, setUserState] = useState({
    username: '',
    phone_number: ''
  })

  return (

    <Router>
    <UserContext.Provider value={user_id} userState={userState} setUserState={setUserState}>
    <div className="App">
      <Route exact path='/' component={Signup}/>
      <Route exact path='/login' component={Login}/>
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/user' component={UserCard} />
    </div>
    </UserContext.Provider>
    </Router>

   
  );
}

export default App;
