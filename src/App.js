import styles from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import React from 'react';
import {useState} from 'react';

const example = {
   name: 'Morty Smith',
   species: 'Human',
   gender: 'Male',
   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};


function App () {

  const [characters, setCharacters] = useState([]);

  const onSearch = function (e) {
    const newCharacter = example;
    setCharacters([...characters, newCharacter ])
  }

  return (
    <div className={styles.app}>
        <Nav onSearch={onSearch}/>
        <Cards characters={characters}/>
    </div>
  )
}

export default App
