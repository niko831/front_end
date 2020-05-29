import React, { useState, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { UserContext } from '../contexts/UserContext';

const NewPlant = (props) => {

    const {user_id} = window.localStorage.getItem('id')

    const [plantList, setPlantList] = useState([{
        nickname: '',
        species: '',
        h2o_frequency: '',
        id: ''
    }]);


    const [plant, setPlant] = useState({
        nickname: '',
        species: '',
        h2o_frequency: '',
        id: ''
    })

    const addNewPlant = e => {

        e.preventDefault()

        axiosWithAuth().post('/api/plants', {
            nickname: plant.nickname,
            species:  plant.species,
            h2o_frequency: plant.h2o_frequency
        })
        .then( res => {
            console.log('New Plant POST Success', res)
            axiosWithAuth().get(`/api/users/${user_id}/plants`)
                           .then( res => {
                               console.log('Successful GET request for PlantList', res)
                               setPlantList(res.data)
                           })
                           .catch( err => {
                               console.log('Error GET request for PlantList', err)
                           })
                       
        })
        .catch (err => console.log('Error POST for add new plant', err))
    }

    const plantChangeHandler = e => {
        setPlant({
            ...plant, [e.target.name]: e.target.value
        })
        // console.log(plant)
    }


    return (
        <div className='newPlant'>
            <h4>Add a New Plant</h4>
            <p id='plantJourney'>Start your plant's journey here...</p>
            <form onSubmit={addNewPlant}>
                <label>
                <p>Plant Name</p>
                <input type='text' name='nickname' value={plant.nickname} onChange={plantChangeHandler}/>
                </label>
                <label>
                <p>Species (optional)</p>
                <input type='text' name='species' value={plant.species} onChange={plantChangeHandler}/>
                </label>
                <label>
                <p>Water Frequency</p>
                <input type='text' name='h2o_frequency' value={plant.h2o_frequency} onChange={plantChangeHandler}/>
                </label>
                <button type='submit'>Add Plant</button>
            </form>
        </div>
    )
}

export default NewPlant;