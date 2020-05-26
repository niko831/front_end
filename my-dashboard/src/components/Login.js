import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';


const Login = (props) => {


  const [ input, setInput ] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth().post('/api/auth/login', input)
                   .then(res => {
                     console.log('Post req success!', res);
                     localStorage.setItem('token', res.data.token);
                     props.history.push('/dashboard');
                   })
                   .catch(err => {
                     console.log('Post req error', err);
                     alert('Unknown username or password.')
                   })
  }
  return (
    <div className='loginPage'>
      <h1>Welcome to Plant Parenthood!</h1>

          <h1>Login Here</h1>
          <form onSubmit={handleSubmit}>
            <input type='text' name='username' placeholder='username' value={input.username} onChange={handleChange} />
            <input type='password' name='password' placeholder='password' value={input.password} onChange={handleChange} />
            <button>login</button>
          </form>
    </div>
  );
};

export default Login;

