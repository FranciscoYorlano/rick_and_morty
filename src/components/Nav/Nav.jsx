import styles from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx'


export default function Nav(porps) {

    return (
        <nav className={styles.nav}>
            <SearchBar onSearch={porps.onSearch}/>
        </nav>
    )

}