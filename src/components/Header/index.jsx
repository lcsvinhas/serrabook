import { Link } from "react-router-dom";
import * as styles from "./Header.module.css";
import logoBranca from "../../img/logo-branca-1.png";
import vector from "../../img/vector.png";
import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import lua from "../../assets/lua.svg";
import sol from "../../assets/sol.svg";
import { ShoppingCart } from "phosphor-react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const [nomeUsuario, setNomeUsuario] = useState("");

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nomeUsuario");
    if (nomeSalvo) {
      setNomeUsuario(nomeSalvo);
    }
  }, []);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <img
          src={logoBranca}
          className={styles.logo}
          alt="Logotipo do sebo virtual Serrabook"
        />
      </Link>

      <button onClick={toggleMenu} className={styles.menuBtn}>
        &#9776;
      </button>

      <div className={styles.contato}>
        <img
          src={vector}
          className={styles.perfilIcone}
          alt="Contorno de um ser humano, ilustrando um perfil"
        />

        <h2>Bem vindo, {nomeUsuario || "usuário"}</h2>
      </div>

      <nav className={`${styles.menu} ${menuAberto ? styles.ativo : ""}`}>
        <ul>
          <li>
            <Link className={styles.elemento} to={"/produtos"}>
              Produtos
            </Link>
          </li>
          <li>
            <Link className={styles.elemento} to={"/login"}>
              Login
            </Link>
          </li>
          <li>
            <Link className={styles.elemento} to={"/atualizar"}>
              Atualizar
            </Link>
          </li>
          <li>
            <Link className={styles.elemento} to={"/produtoscliente"}>
              Prod
            </Link>
          </li>

          <li>
            <div className={styles.carrinho}>
              <button className={styles.botaoCarrinho}>
                <ShoppingCart />
              </button>
              <span className={styles.qtdCarrinho}>0</span>
            </div>
          </li>

          <li>
            <label className={styles.themeSwitch}>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleTheme}
              />
              <span className={styles.slider}>
                <img className={styles.iconMoon} src={sol} alt="Modo Escuro" />
                <img className={styles.iconSun} src={lua} alt="Modo Claro" />
              </span>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}
