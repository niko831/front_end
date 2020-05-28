import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import axiosWithAuth from '../utils/axiosWithAuth';

//Assets
import Image from '../assets/dashBackground.png';

import '../App.css'

const EditPlant = () => {

    const user_id = useContext(UserContext)

    const [user, setUser] = useState({
        id:'',
        username: '',
        phone_number: ''
      });


    const editUser = e => {
        e.preventDefault();
        axiosWithAuth()
          .put(`/api/users/${user_id}`, {
            username: user.username,
            phone_number: user.phone_number
          })
          .then(() => {
            console.log('Edit successfull');
            alert(`Success! Username changed to ${user.username}`)
            setUser('')
          });
     }
    
      const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
          });
      }

    return (
        <div className='userCard'>
        <a href='/dashboard' aria-label='Close User Info Modal Box'>×</a>
        <img src={Image} alt='Profile'/>
        <form>
        <label>
            <p>Username</p>
            <input type='text'/>
        </label>
        <label>
            <p>Phone Number</p>
            <input type='text'/>
        </label>
        <button>Save Changes</button>
        </form>
        <button>LOG OUT</button>
        <form onSubmit={editUser} id="userForm">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="New Number"
            name="phone_number"
            value={user.phone_number}
            onChange={changeHandler}
          />
          <button type="submit">Edit Username</button>
        </form>
        </div>
    )
}

export default EditPlant