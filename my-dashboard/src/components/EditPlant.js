import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import axiosWithAuth from '../utils/axiosWithAuth';

//Assets
import Image from '../assets/dashBackground.png';

import '../App.css'

const EditPlant = () => {

    const value = React.useContext(UserContext)

    const plantId = React.useContext(UserContext)

    const [editPlant, setEditPlant] = useState({
        nickname: '',
        species: '',
        h2o_frequency: '',
        id: ''
      });


    const editMyPlant = e => {
        e.preventDefault();
        axiosWithAuth()
          .put(`/api/plants/${plantId}`, {
            username: editPlant.username,
            species: editPlant.species,
            h2o_frequency: editPlant.h2o_frequency,
          })
          .then(() => {
            console.log('Edit successfull');
            // setEditPlant('')
          })
          .catch( err => {
              console.log('PUT request failed', err)
          })
          
     }
    
      const changeHandler = e => {
        setEditPlant({
            ...editPlant,
            [e.target.name]: e.target.value
          });
      }

    return (
        <div className='hideEdit'>
        <form onSubmit={editMyPlant} id="userForm">
          <input
            type="text"
            placeholder="Nickname"
            name="username"
            value={editPlant.username}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Species"
            name="species"
            value={editPlant.species}
            onChange={changeHandler}
          />
                    <input
            type="text"
            placeholder="Water Frequency"
            name="h2o_frequency"
            value={editPlant.h2o_frequency}
            onChange={changeHandler}
          />
          <button type="submit">Submit Changes</button>
        </form>
        </div>
    )
}

export default EditPlant