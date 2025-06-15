import * as styles from "./CardAtualizar.module.css";
import CardLivro from "../../components/CardLivro";
import { Link } from "react-router-dom";

export default function CardAtualizar({ nome, preco, urlCapa, id }) {
  return (
    <>
      <div className={styles.containerAtualizar}>
        <CardLivro titulo={nome} preco={preco} imagem={urlCapa} />
        <Link to= {`/atualizar/${id}`}>
          <button className={styles.botaoAtualizar}>Atualizar</button>
        </Link>
      </div>
    </>
  );
}
