// PetDetails.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const PetDetails = () => {
  const { id } = useParams(); // Få ID från URL:en
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios.get(`https://petstore.swagger.io/v2/pet/${id}`)
      .then((response) => setPet(response.data))
      .catch((error) => {
        console.error('Error fetching pet details:', error);
      });
  }, [id]);

  if (!pet) {
    return <div>Loading pet details...</div>;
  }

  return (
    <>
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{pet.name}</h2>
      <p className="text-gray-600">ID: {pet.id}</p>
      <p className="text-gray-600">Status: {pet.status}</p>

    <Link to={`/update/${pet.id}`}>
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Update Pet
        </button>
    </Link>
    </div>
   
    </>
  );
};

export default PetDetails;
