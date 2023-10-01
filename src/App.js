import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';
import './App.css';


function App() {
  return (

      <div className='player'>
        <h1>Player List</h1>
    <PlayersList />
    </div>
    
  );
};

export default App;
