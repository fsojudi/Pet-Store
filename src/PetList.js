// PetList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './index.css';
import DeletePet from './DeletePet';
import axios from 'axios';
import SearchPet from './SearchPet';

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Hämta lista över husdjur från API
    fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
      .then((response) => response.json())
      .then((data) => setPets(data));
  }, []);

  const handleDeletePet = (petId) => {
    axios.delete(`https://petstore.swagger.io/v2/pet/${petId}`)
      .then(() => {
        setPets(pets.filter((pet) => pet.id !== petId)); // Uppdatera listan efter radering
      })
      .catch((error) => {
        console.error('Error deleting pet:', error);
      });
  };

  return (
    <>
    <SearchPet pets={pets} />

    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Available Pets</h2>
      <ul className="divide-y divide-gray-300">
        {pets.length > 0 ? (
          pets.map((pet) => (
            <li key={pet.id} className="flex items-center justify-between py-4 px-6 bg-gray-50 rounded-lg mb-4 shadow">
              <Link to={`/pets/${pet.id}`} className="text-lg font-semibold text-blue-500 hover:underline">
                {pet.name}
              </Link>
              <DeletePet pet={pet} handleDeletePet={handleDeletePet} />
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No pets available at the moment.</p>
        )}
      </ul>
    </div>
    </>
  );
};

export default PetList;
