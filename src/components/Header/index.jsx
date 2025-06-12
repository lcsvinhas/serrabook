import { Link } from "react-router-dom";
import * as styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Serrabook</h1>
            <nav>
                <ul className={styles.ul}>
                    <li><Link className={styles.elemento} to={"/"}>Home</Link></li>
                    <li><Link className={styles.elemento} to={"/produtos"}>Produtos</Link></li>
                    <li><Link className={styles.elemento} to={"/login"}>Login</Link></li>
                    <li><Link className={styles.elemento} to={"/atualizar"}>Atualizar</Link></li>
                </ul>
            </nav>
        </header>
    )
}
