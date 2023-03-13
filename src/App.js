import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
    // App State
    const [characters, setCharacters] = useState([]);

    // App Ons
    const onSearch = function (id) {
        if (!id) id = Math.floor(Math.random() * 826) + 1;

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.name) {
                    if (
                        characters.some(
                            (character) => character.id === Number(id)
                        )
                    ) {
                        window.alert(
                            `Ya se encuentra el personaje ${data.name}`
                        );
                    } else {
                        setCharacters((oldChars) => [...oldChars, data]); // No se toca el estado
                        // setCharacters([...characters, data ])
                    }
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            });
    };

    const onClose = function (id) {
        const updatedCharacters = characters.filter(
            (character) => character.id !== Number(id)
        );
        setCharacters(updatedCharacters);
    };

    // Render

    return (
        <div className={styles.app}>
            <Nav onSearch={onSearch} />
            <Routes>
                <Route
                    path="/home"
                    element={
                        <Cards characters={characters} onClose={onClose} />
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="detail/:detailId" element={<Detail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
