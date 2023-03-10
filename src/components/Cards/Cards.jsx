import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards(props) {
    const { characters } = props;
    return (
        <div className={styles.cardsContainer}>
            {characters.map((character) => (
                <Card
                    id={character.id}
                    key={character.id}
                    name={character.name}
                    species={character.species}
                    gender={character.gender}
                    image={character.image}
                    onClose={props.onClose}
                />
            ))}
        </div>
    );
}
