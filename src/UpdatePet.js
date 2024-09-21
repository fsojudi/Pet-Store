import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdatePet=()=>{

    const {id}=useParams();
    const navigate=useNavigate();
    const[pet, setPet]=useState()
    const[petName, setPetName]=useState()
    const[petStatus, setPetStatus]=useState()

const handleUpdate=(e)=>
    e.preventDefault();
    const updatedPet={...pet, id:id, name:petName, status:petStatus}

    axios.put('https://petstore.swagger.io/v2/swagger.json/pet',updatedPet)
    .then(()=>{
        alert('pet updated successfully');
        navigate('/');
    })
    .catch(error=>{
        console.error('Error updating pet:', error)
    })

    if(!pet) return <div>Loading ...</div>

    return(
        <form onSubmit={handleUpdate}>
            <lable>Name:</lable>
            <input
            type="text"
            placeholder="Enter Name"
            value={petName}
            onChange={(e)=>setPetName(e.target.value)}
            />

            <lable>Status:</lable>

        <select
          value={petStatus}
          onChange={(e) => setPetStatus(e.target.value)}
        >
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="sold">Sold</option>
        </select>
               <button type="submit">Update</button>
        </form>
    )


}


export default UpdatePet;