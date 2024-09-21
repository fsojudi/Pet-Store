import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPet from './AddPet';
import PetList from './PetList';
import PetDetails from './PetDetails'; 
import UpdatePet from './UpdatePet';
import Home from './Home';  
import './index.css';



function App() {
 

  return (
    <Router>
      <div>
      <h1 className="text-center text-4xl font-bold mb-6">Pet Store App</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/pets' element={<PetList/>}/>
        <Route path='/pets/:id' element={<PetDetails/>}/>
        <Route path='/addPet' element={<AddPet/>}/>
        <Route path='/update/:id' element={<UpdatePet/>}/>

      </Routes>
      </div>
    </Router>
  );
}

export default App;
