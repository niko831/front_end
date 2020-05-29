import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard';
import EditPlant from './components/EditPlant';
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

  const [plantList, setPlantList] = useState([{
    nickname: '',
    species: '',
    h2o_frequency: '',
    id: ''
}]);


  return (

    <Router>
    <UserContext.Provider  value={user_id} userState={userState} setUserState={setUserState}>
    <div className="App">
      <Route exact path='/' component={Signup}/>
      <Route exact path='/login' component={Login}/>
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/user' component={UserCard} />
      <PrivateRoute path='/editplant' component={EditPlant} />
    </div>
    </UserContext.Provider>
    </Router>

   
  );
}

export default App;
