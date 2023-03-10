import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={styles.searchContainer}>
         <input type="search" className={styles.searchInput} />
         <button onClick={props.onSearch} className={styles.searchButton}>
            Agregar
         </button>
      </div>
   );
}
