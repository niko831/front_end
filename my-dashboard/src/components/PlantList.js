import React, { useState, useEffect } from 'react';
import '../App.css'
import axiosWithAuth from '../utils/axiosWithAuth';

const PlantList = () => {

    const [plantList, setPlantList] = useState([]);

    useEffect( () => {
        const fetchPlants = () => {
            axiosWithAuth().get('/api/plants')
                           .then( res => {
                               console.log('Successful GET request for PlantList', res)
                               setPlantList(res.data)
                               console.log(plantList)
                           })
                           .catch( err => {
                               console.log('Error GET request for PlantList', err)
                           })
        }
        fetchPlants()
    }, [setPlantList])

    return (
        <div className="plantList">
            {/* <h2>Plant List is Rendering</h2> */}
        <h2>{plantList.species}</h2>
        </div>
    )
}

export default PlantList;