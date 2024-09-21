// SearchPet.js
import React, { useState } from 'react';

const SearchPet = ({ pets }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPets, setFilteredPets] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      setFilteredPets([]);
      return;
    }
    const results = pets.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPets(results);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          placeholder="Enter pet's name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">Search</button>
      </form>

      {filteredPets.length > 0 ? (
        <ul className="divide-y divide-gray-300">
          {filteredPets.map((pet) => (
            <li key={pet.id} className="py-4 px-6 bg-gray-50 rounded-lg mb-4 shadow">
              <span className="text-lg font-semibold text-gray-700">{pet.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No matching pets found.</p>
      )}
    </div>
  );
};

export default SearchPet;
