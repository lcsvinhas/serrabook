import * as styles from "./CardAtualizar.module.css";
import CardLivro from "../../components/CardLivro";

export default function CardAtualizar() {
  return (
    <>
      <div className={styles.containerAtualizar}>
        <CardLivro
          titulo="Titulo Teste"
          preco="19.90"
          imagem="https://images-na.ssl-images-amazon.com/images/I/61bYI0O1+fL._AC_UL900_SR615,900_.jpg"
        />
        <button className={styles.botaoAtualizar}>Atualizar</button>
      </div>
    </>
  );
}
