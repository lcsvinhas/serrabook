import CardLivro from "../../components/CardLivro";
import Header from "../../components/Header";
import banner from "../../img/banner-1.png";
import * as styles from "./Home.module.css";
import { Link } from "react-router-dom";
import CardLivro from "../../components/CardLivro";

export default function Home() {
  return (
    <div>
      <Header />
      <img
        className={styles.banner}
        src={banner}
        alt="Banner sobre o Serrabook Day. Possui três livros de programação em pé e em perspectiva."
      />

      <div>
        <CardLivro
          titulo="Titulo Teste"
          preco="19.90"
          imagem="https://images-na.ssl-images-amazon.com/images/I/61bYI0O1+fL._AC_UL900_SR615,900_.jpg"
        />
      </div>

      <div className={styles.verMais}>
        <Link to={"/produtos"}>
          <button>Ver mais</button>
        </Link>
      </div>
    </div>
  );
}
