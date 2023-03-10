import Card from '../Card/Card.jsx';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.cardsContainer} >
         {characters.map( (character, index) => 
            <Card
               key={index}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         )}
      </div>
   );
}
