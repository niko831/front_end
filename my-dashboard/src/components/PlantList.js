import React, { useState, useEffect } from 'react';
import '../App.css'
import axiosWithAuth from '../utils/axiosWithAuth';

const PlantList = () => {

    const [plantList, setPlantList] = useState([{
        nickname: '',
        species: '',
        h2o_frequency: ''
    }]);

    useEffect( () => {
        const fetchPlants = () => {
            axiosWithAuth().get('/api/plants')
                           .then( res => {
                               console.log('Successful GET request for PlantList', res)
                               setPlantList(res.data)
                           })
                           .catch( err => {
                               console.log('Error GET request for PlantList', err)
                           })
        }
        fetchPlants()
    }, [setPlantList])

    console.log(plantList)

    return (
        <div className="plantList">
        {plantList.map((plant)=> {
                return (
                <div className="displayedPlant">
                <h2>Nickname: {plant.nickname}</h2>
                <h3>Species: {plant.species}</h3>
                <h3>Water Frequency: {plant.h2o_frequency}</h3>
                </div>
                )
            })}
        </div>
    )
}

export default PlantList;