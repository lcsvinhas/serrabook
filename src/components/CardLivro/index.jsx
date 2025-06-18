import * as styles from "./CardLivro.module.css";
import { ShoppingCart } from "phosphor-react";
import { useCart } from "../../contexts/CarrinhoContext";

export default function CardLivro({ titulo, preco, imagem }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ titulo, preco, imagem });
  };

  return (
    <div className={styles.cardLivro}>
      <img src={imagem} alt={titulo} className={styles.imagemLivro} />
      <h3 className={styles.titulo}>{titulo}</h3>
      <div className={styles.infoLivro}>
        <span className={`${styles.precoLivro} precoLivro`}>R$ {preco}</span>
        <button className={styles.botaoCarrinho} onClick={handleAddToCart}>
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
}
