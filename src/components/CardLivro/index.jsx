import * as styles from "./CardLivro.module.css";
import { ShoppingCart } from "phosphor-react";

export default function CardLivro({ titulo, preco, imagem }) {
  return (
    <div className={styles.cardLivro}>
      <img src={imagem} alt={titulo} className={styles.imagemLivro} />

      <div className={styles.boxInfo}>
        <div className={styles.infoTexto}>
          {" "}
          {/* Nova div para agrupar título e preço */}
          <h3 className={styles.titulo}>{titulo}</h3>
          <span className={`${styles.precoLivro} precoLivro`}>R$ {preco}</span>
        </div>
        <button className={styles.botaoCarrinho}>
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
}
