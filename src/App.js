import styles from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import React from 'react';
import {useState} from 'react';


function App () {

  // App State
  const [characters, setCharacters] = useState([]);

  // App Ons
  const onSearch = function (id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            const exist = characters.some( (character) => character.id === Number(id));
            console.log(exist);
            if (exist) {
              window.alert(`Ya se encuentra el personaje ${data.name}`)
            }else {
              setCharacters([...characters, data ])
            }
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = function (id) {
    const updatedCharacters = characters.filter( (character) => character.id !== id);
    setCharacters(updatedCharacters);
  }


  // Render

  return (
    <div className={styles.app}>
        <Nav onSearch={onSearch}/>
        <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}

export default App
