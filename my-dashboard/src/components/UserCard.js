import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import axiosWithAuth from '../utils/axiosWithAuth';

//Assets
import Image from '../assets/dashBackground.png';

import '../App.css'

const UserCard = (props) => {


    const handleLogout = e => {
        e.preventDefault();

        axiosWithAuth().get('/api/auth/logout')
                       .then( res => {
                        //    console.log('Successfully logged out', res)
                           localStorage.clear('token')
                           localStorage.clear('id')
                           props.history.push('/login')
                       })
                       .catch( err => {
                           console.log('Error logging out', err)
                       })
    }

    const { user_id } = useContext(UserContext)

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

      const handleDelete = e => {
        e.preventDefault();

        axiosWithAuth().delete(`/api/users/${user_id}`)
                       .then( res => {
                           console.log('Successfully deleted', res)
                           localStorage.clear('token')
                           localStorage.clear('id')
                           props.history.push('/login')
                       })
                       .catch( err => {
                           console.log('Error logging out', err)
                       })
    }

    return (
        <div className='userCard'>
        <a href='/dashboard' aria-label='Close User Info Modal Box'>×</a>
        <form onSubmit={editUser} className="userForm">
          <label>
          <h3>Change Username</h3>
          <input
            className='userInput'
            type="text"
            placeholder="Change Username"
            name="username"
            value={user.username}
            onChange={changeHandler}
          />
          </label>
          <label>
            <h3>Change Phone Number</h3>
          <input
            className='userInput'
            type="text"
            placeholder="New Number"
            name="phone_number"
            value={user.phone_number}
            onChange={changeHandler}
          />
          </label>
          <button type="submit">Save Changes</button>
        </form>
        <button id='logout' onClick={handleLogout}>LOG OUT</button>
        <button id='delete' onClick={handleDelete}>Danger: Delete Account</button>
        </div>
    )
}

export default UserCard