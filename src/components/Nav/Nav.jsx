import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Nav(porps) {
    return (
        <nav className={styles.nav}>
            <Link to="/about">
                <div>
                    <h3>About</h3>
                </div>
            </Link>
            <Link to="/home">
                <div>
                    <h3>Home</h3>
                </div>
            </Link>
            <SearchBar onSearch={porps.onSearch} />
        </nav>
    );
}
