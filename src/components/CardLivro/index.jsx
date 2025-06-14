import * as styles from "./CardLivro.module.css";
import { ShoppingCart } from "phosphor-react";

export default function CardLivro({ titulo, preco, imagem }) {
  return (
    <div className={styles.cardLivro}>
      <img src={imagem} alt={titulo} className={styles.imagemLivro} />
      <h3 className={styles.titulo}>{titulo}</h3>
      <div className={styles.infoLivro}>
        <span className={styles.precoLivro}>R$ {preco}</span>
        <button className={styles.botaoCarrinho}>
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
}
