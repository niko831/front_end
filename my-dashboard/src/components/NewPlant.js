import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const NewPlant = () => {

    const [plantList, setPlantList] = useState([]);

    const [plant, setPlant] = useState({
        nickname: '',
        species: '',
        h2o_frequency: '',
        user_id: ''
    })

    const addNewPlant = e => {
        e.preventDefault();

        axiosWithAuth().post('/api/plants', {
            nickname: plant.nickname,
            species:  plant.species,
            h2o_frequency: plant.h2o_frequency,
        })
        .then( res => {
            console.log('New Plant POST Success', res)
            axiosWithAuth().get('/api/plants')
                           .then( res => {
                                console.log('GET after New Plant POST Success', res)
                                setPlantList(res.data)
                           })
                           .catch( err => console.log(err))
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
            <form onSubmit={addNewPlant}>
                <label>
                <p>Plant Name</p>
                <input type='text' name='nickname' value={plant.nickname} onChange={plantChangeHandler}/>
                </label>
                <label>
                <p>Species (optional)</p>
                <input type='text'/>
                </label>
                <label>
                <p>Water Frequency</p>
                <input type='text'/>
                </label>
                <button type='submit'>Add Plant</button>
            </form>
        </div>
    )
}

export default NewPlant;