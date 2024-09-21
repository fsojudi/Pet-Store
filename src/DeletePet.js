import React from "react";

const DeleteApp=({pet,handleDeletePet} )=>{

  

    return(
    <button
    onClick={() => handleDeletePet(pet.id)}
    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
    Delete
  </button>
)

}

export default DeleteApp;