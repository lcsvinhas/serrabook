import { Link } from "react-router-dom";
import * as styles from "./Header.module.css";
import logoBranca from "../../img/logo-branca-1.png";
import vector from "../../img/vector.png";

export default function Header() {

    return (
        <header className={styles.header}>
            <Link to={"/"}><img src={logoBranca} alt="Logotipo do sebo virtual Serrabook" /></Link>
            <div className={styles.contato}>
                <img src={vector} alt="Contorno de um ser humano, ilustrando um perfil" />
                <h2>Bem vindo, usuário</h2>
            </div>
            <nav>
                <ul className={styles.ul}>
                    <li><Link className={styles.elemento} to={"/produtos"}>Produtos</Link></li>
                    <li><Link className={styles.elemento} to={"/login"}>Login</Link></li>
                    <li><Link className={styles.elemento} to={"/atualizar"}>Atualizar</Link></li>
                    <li><button>Dark Mode</button></li>
                </ul>
            </nav>
        </header>
    )
}
