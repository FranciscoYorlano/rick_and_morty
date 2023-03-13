import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
    const { detailId } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        const URL_BASE = "https://rickandmortyapi.com/api/character/";

        axios(`${URL_BASE}${detailId}?`).then((response) =>
            setCharacter(response.data)
        );
    }, []);

    return (
        <div>
            {character.name ? (
                <>
                    <h1>Nombre {character.name}</h1>
                    <div>
                        <h2>STATUS: {character.status}</h2>
                        <h2>SPECIE: {character.species}</h2>
                        <h2>GENRE: {character.genre}</h2>
                        <h2>ORIGIN: {character.origin.name}</h2>
                    </div>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                </>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
}

/*

*/
