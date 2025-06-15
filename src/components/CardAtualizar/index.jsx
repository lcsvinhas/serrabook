import * as styles from "./CardAtualizar.module.css";
import CardLivro from "../../components/CardLivro";

export default function CardAtualizar({ nome, preco, urlCapa }) {

  return (
    <>
      <div className={styles.containerAtualizar}>
        <CardLivro titulo={nome} preco={preco} imagem={urlCapa} />
        <button className={styles.botaoAtualizar}>Atualizar</button>
      </div>
    </>
  );
}