import React, { useState, useEffect, useContext } from 'react';

import '../App.css'

import axiosWithAuth from '../utils/axiosWithAuth';
import { UserContext } from '../contexts/UserContext';

const PlantList = (props) => {

    const user_id = window.localStorage.getItem('id')

    const [plantList, setPlantList] = useState([{
        nickname: '',
        species: '',
        h2o_frequency: '',
        id: ''
    }]);


    useEffect( () => {
        const fetchPlants = () => {
            axiosWithAuth().get(`/api/users/${user_id}/plants`)
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

    // console.log('plantList:', plantList)




  const updatePlants = () => {
    axiosWithAuth().get(`/api/users/${user_id}/plants`)
                   .then( res => {
                       console.log('Successful GET request for PlantList', res)
                       setPlantList(res.data)
                   })
                   .catch( err => {
                       console.log('Error GET request for PlantList', err)
                   })
            }





    const deletePlant = id => {

        axiosWithAuth().delete(`/api/plants/${id}`)
        .then( res => {
        //    props.history.push('/dashboard') 
           console.log('Deleted', res)
           updatePlants()
        })
        .catch( err => {
            console.log('Error Deleting', err)
        })

    }


    return (
        <div className="plantList">
        {plantList.map((plant)=> {

                return (
                <div className="displayedPlant" key={plant.id}>
                <h2>Nickname: {plant.nickname}</h2>
                <h3>Species: {plant.species}</h3>
                <h3>Water Frequency: {plant.h2o_frequency}</h3>
                <button onClick={() => deletePlant(plant.id)}>Delete</button>
                </div>
                )
            })}
        </div>
    )
}

export default PlantList;