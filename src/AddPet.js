import React, { useState } from 'react';
import axios from 'axios';
import './index.css';



function AddPet() {
  const [petName, setPetName] = useState('');
  const [petStatus, setPetStatus] = useState('available'); // Default status as 'available'
  const [responseMessage, setResponseMessage] = useState('');

  const handleAddPet = (e) => {
    e.preventDefault();

    const newPet = {
      name: petName,
      status: petStatus
    };

    axios.post('https://petstore.swagger.io/v2/pet', newPet)
      .then((response) => {
        setResponseMessage(`Pet added successfully! ID: ${response.data.id}`);
        setPetName(''); // Clear the input field
      })
      .catch((error) => {
        setResponseMessage(`Error: ${error.response ? error.response.data.message : error.message}`);
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Pet</h2>
      
      <form onSubmit={handleAddPet}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Pet Name:</label>
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter pet name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Pet Status:</label>
          <select
            value={petStatus}
            onChange={(e) => setPetStatus(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="available">Available</option>
            <option value="pending">Pending</option>
            <option value="sold">Sold</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Pet
        </button>
      </form>

      {responseMessage && (
        <p className="mt-6 text-center text-green-500 font-semibold">{responseMessage}</p>
      )}
    </div>
  );
}

export default AddPet;
