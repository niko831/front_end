import React, { useContext } from 'react';
import PlantList from './PlantList';
import NewPlant from './NewPlant';
import UserCard from './UserCard';
import axiosWithAuth from '../utils/axiosWithAuth';
import { UserContext } from '../contexts/UserContext';
import moment from 'moment';


const Dashboard = (props) => {

    //CONTEXT
    const {welcome} = useContext(UserContext);

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

    return (
        <div>
            <nav className='fixed-nav'>
                <div className='left-nav'>
                <p>Water My Plants</p>
                <a href='/dashboard'>Home</a>
                <button onClick={handleLogout}>Logout</button>
                </div>
                <div className='userIcon'>
                <a href='/user'>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0C6.71571 0 0 6.71571 0 15C0 23.2843 6.71571 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71571 23.2843 0 15 0ZM15 2.90323C21.6854 2.90323 27.0968 8.31357 27.0968 15C27.0968 17.0855 26.5702 19.0469 25.6427 20.7589C24.8321 19.1625 23.3731 17.8833 21.5671 17.3372C22.3905 16.0772 22.8327 14.6049 22.8327 13.0645C22.8327 8.73575 19.3295 5.23185 15 5.23185C10.6712 5.23185 7.16734 8.73502 7.16734 13.0645C7.16734 14.6049 7.60948 16.0772 8.4329 17.3372C6.62921 17.8826 5.16907 19.1603 4.3572 20.7589C3.4298 19.047 2.90323 17.0856 2.90323 15C2.90323 8.31466 8.31357 2.90323 15 2.90323ZM10.1613 13.0645C10.1613 10.3922 12.3276 8.22581 15 8.22581C17.6724 8.22581 19.8387 10.3922 19.8387 13.0645C19.8387 15.7369 17.6724 17.9032 15 17.9032C12.3276 17.9032 10.1613 15.7369 10.1613 13.0645ZM6.53667 23.6457C6.62855 21.5894 8.32421 19.9504 10.4032 19.9504H11.2603C13.5791 21.2138 16.4219 21.2133 18.7397 19.9504H19.5968C21.6758 19.9504 23.3715 21.5894 23.4633 23.6457C18.7609 28.2494 11.2361 28.2465 6.53667 23.6457Z" fill="white"/>
                </svg>
                </a>
                </div>
            </nav>
            <div className='welcomeWords'>
            <h2>Welcome back, {welcome}!</h2>
            <h3>{moment().format("[Today is] dddd, MMMM Do YYYY")}</h3>
            </div>
            <div className="dashboardComponents">
            <PlantList />
            <NewPlant />
            </div>
        </div>
    )
}

export default Dashboard