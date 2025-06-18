import { Link } from "react-router-dom";
import * as styles from "./Header.module.css";
import logoBranca from "../../img/logo-branca-1.png";
import vector from "../../img/vector.png";
import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import lua from "../../assets/lua.svg";
import sol from "../../assets/sol.svg";
import { ShoppingCart } from "phosphor-react";
import { useCart } from "../../contexts/CarrinhoContext.jsx";
import CarrinhoModal from "../CarrinhoModal/CarrinhoModal.jsx";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const { cartItems } = useCart();

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nomeUsuario");
    if (nomeSalvo) {
      setNomeUsuario(nomeSalvo);
    }
  }, []);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  const quantidadeTotal = cartItems.reduce(
    (acc, item) => acc + item.quantidade,
    0
  );

  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <img
          src={logoBranca}
          alt="Logotipo do sebo virtual Serrabook"
          className={styles.logo}
        />
      </Link>

      <button onClick={toggleMenu} className={styles.menuBtn}>
        &#9776;
      </button>

      <div className={styles.contato}>
        <img src={vector} alt="Perfil" />
        <h2>Bem vindo, {nomeUsuario || "usuário"}</h2>
      </div>

      <nav className={`${styles.menu} ${menuAberto ? styles.ativo : ""}`}>
        <ul>
          <li>
            <Link className={styles.elemento} to={"/login"}>
              Login
            </Link>
          </li>

          <li>
            <Link className={styles.elemento} to={"/produtoscliente"}>
              Produtos
            </Link>
          </li>

          <li>
            <div className={styles.carrinho}>
              <button
                className={styles.botaoCarrinho}
                onClick={() => setModalAberto(true)}
              >
                <ShoppingCart />
              </button>
              {quantidadeTotal > 0 && (
                <span className={styles.qtdCarrinho}>{quantidadeTotal}</span>
              )}
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

      {/* Modal do Carrinho */}
      <CarrinhoModal
        aberto={modalAberto}
        fechar={() => setModalAberto(false)}
      />
    </header>
  );
}
