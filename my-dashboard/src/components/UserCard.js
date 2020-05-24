import React from 'react';
import Image from '../assets/dashBackground.png';

import '../App.css'

const UserCard = () => {

    return (
        <div className='userCard'>
        <a href='/dashboard' aria-label='Close User Info Modal Box'>×</a>
        <img src={Image}/>
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
        </div>
    )
}

export default UserCard