import * as styles from "./CardLivro.module.css";
import shoppingCart from "./shopping-cart.png";

export default function CardLivro({ titulo, preco, imagem }) {
  return (
    <div className={styles.cardLivro}>
      <img src={imagem} alt={titulo} className={styles.imagemLivro} />
      <h3 className={styles.titulo}>{titulo}</h3>
      <div className={styles.infoLivro}>
        <span className={`${styles.precoLivro} precoLivro`}>R$ {preco}</span>
        <button className={styles.botaoCarrinho}>
          <img
            src={shoppingCart}
            alt="Carrinho"
            className={styles.iconeCarrinho}
          />
        </button>
      </div>
    </div>
  );
}
