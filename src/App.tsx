import './App.css';

import React, { useState } from 'react';

import { CardList } from './components/CardList';
import Form from './components/Form';

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

function App() {
   const [profileData, setProfileData] = useState(testData);
   const addNewProfile = (profData:any): any => {
     
    console.log('App ' + profData)
  
   //setProfileData(profData)
    
   }
  return (
    <div className="App">
      <header className="header">The Github Cards App</header>
      <Form onSubmit={addNewProfile}/>
      <CardList profiles={profileData} />
    </div>
  );
}

export default App;
