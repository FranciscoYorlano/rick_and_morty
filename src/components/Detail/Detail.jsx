import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
    const { detailId } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    return (
        <>
            <h1>Nombre {character.name}</h1>
            <div>
                <h2>STATUS: {character.status}</h2>
                <h2>SPECIE: {character.species}</h2>
                <h2>GENRE: {character.genre}</h2>
                <h2>ORIGIN: {character.origin}</h2>
            </div>
            <div>
                <img src={character.image} alt={character.name} />
            </div>
        </>
    );
}
