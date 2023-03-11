import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {

   const [searchedId, setSearchedId] = useState('');

   // handles
   const handleSearchCharacter = function(e) {
      setSearchedId(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      props.onSearch(searchedId);
   };


   // render
   return (
      <div className={styles.searchContainer}>
         <form onSubmit={handleSubmit}>
            <input type="search" 
                   onChange={handleSearchCharacter}
                   value={searchedId} 
                   className={styles.searchInput} 
                   placeholder="Type card id"/>
            <button className={styles.searchButton} type="submit">
               Agregar
            </button>
         </form>
      </div>
   );
}
