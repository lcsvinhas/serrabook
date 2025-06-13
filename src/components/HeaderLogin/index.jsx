import { Link } from "react-router-dom";
import * as styles from "./HeaderLogin.module.css";
import logoBranca from "../../img/logo-branca-1.png";
import { useState } from "react";

export default function HeaderLogin() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => setMenuAberto(!menuAberto);

    return (
        <header className={styles.header}>
            <Link to={"/"}><img src={logoBranca} alt="Logotipo do sebo virtual Serrabook" /></Link>

            <button onClick={toggleMenu} className={styles.menuBtn}>&#9776;</button>

            <nav className={`${styles.menu} ${menuAberto ? styles.ativo : ""}`}>
                <ul>
                    <li><Link className={styles.elemento} to={"/produtos"}>Produtos</Link></li>
                    <li><Link className={styles.elemento} to={"/login"}>Login</Link></li>
                    <li><Link className={styles.elemento} to={"/atualizar"}>Atualizar</Link></li>
                    <li><button>Dark Mode</button></li>
                </ul>
            </nav>
        </header>
    );
}
