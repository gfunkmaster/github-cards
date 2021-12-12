import './App.css';

import React, { useState } from 'react';

import { CardList } from './components/CardList';
import Form from './components/Form';

function App() {
   const [profileData, setProfileData] = useState(undefined || [" "] );
   const addNewProfile = (profData:any): any => {
     
     setProfileData([...profileData, profData])
       console.log(profData);
console.log(profileData);    
   }
  return (
    <div className="App">
      <header className="header">The Github Cards App</header>
      <Form onSubmit={addNewProfile}/>
      <CardList profiles={[...profileData]} />
    </div>
  );
}

export default App;
