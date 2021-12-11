import './App.css';

import { CardList } from './components/CardList';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="header">
        The Github Cards App
      </header>
      <CardList />
    </div>
  );
}

export default App;
