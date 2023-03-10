import styles from './Card.module.css';


export default function Card(props) {
   return (
      <div className={styles.card}>
         <button onClick={props.onClose}>
            X
         </button>
         <h2 className={styles.cardName}>{props.name}</h2>
         <h2 className={styles.cardDescription}>{props.species}</h2>
         <h2 className={styles.cardDescription}>{props.genre}</h2>
         <img className={styles.cardImage} src={props.image} alt={props.name} />

      </div>
   );
}
