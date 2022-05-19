// npm i axios
// npm install react-router-dom@6
import React from 'react';
import logo from './logo.svg';
import './App.scss';
import CurrencyCard from './Components/CurrencyCard/CurrencyCard';

// TODO uz katra klikšķa, valūtas objekts tiek ielikts atsevišķā masīvā (augšai)
// TODO
// TODO nospiežot uz diva notiek tas pats, kas nospiežot uz inputa (Refs)
// TODO border shadow

// .filter((_, i) => (i !== index))

const App = () => (
  <div className="App">
    <CurrencyCard />
  </div>
);

export default App;
