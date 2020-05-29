import React, { useState, useEffect, useContext } from 'react';
import EditPlant from '../components/EditPlant';

import '../App.css'

import axiosWithAuth from '../utils/axiosWithAuth';
import { UserContext } from '../contexts/UserContext';

const PlantList = (props) => {

    // const value = window.localStorage.getItem('id')
      const {user_id, plantList, setPlantList} = React.useContext(UserContext)



    // const [plantList, setPlantList] = useState([{
    //     nickname: '',
    //     species: '',
    //     h2o_frequency: '',
    //     id: ''
    // }]);

    const [editPlant, setEditPlant] = useState({
        nickname: '',
        species: '',
        h2o_frequency: '',
        id: ''
      });


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

    const editMyPlant = (e, id) => {
        e.preventDefault();
        axiosWithAuth()
          .put(`/api/plants/${id}`, {
            nickname: editPlant.nickname,
            species: editPlant.species,
            h2o_frequency: editPlant.h2o_frequency,
          })
          .then(() => {
            console.log('Edit successfull');
            setEditPlant({
                nickname: '',
                species: '',
                h2o_frequency: ''
            });
            updatePlants();
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
        <div className="plantList">
        {plantList.map((plant)=> {

                return (
                <div className="displayedPlant" key={plant.id}>
                <h2><span>{plant.nickname}</span></h2>
                <h3>Species <span>{plant.species}</span></h3>
                <h3>Water Frequency <span>{plant.h2o_frequency}</span></h3>
                <div className='hideEdit'>
        <form onSubmit={e => editMyPlant(e, plant.id)} id="userForm">
          <input
            type="text"
            placeholder="Nickname"
            name="nickname"
            value={editPlant.nickname}
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
        <button id='deleteButton' onClick={() => deletePlant(plant.id)}>Delete</button>
        </div>
        </div>
                )
            })}
        </div>
    )
}

export default PlantList;