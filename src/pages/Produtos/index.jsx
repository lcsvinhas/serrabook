import CardLivro from "../../components/CardLivro";
import * as styles from "./Produtos.module.css";
import { Link } from "react-router-dom";
import CardAtualizar from "../../components/CardAtualizar";
import { PlusCircle } from "phosphor-react";

export default function Produtos() {
  return (
    <div>
      <h2 className={styles.tituloProdutos}>Produtos </h2>

      <div className={styles.containerProdutos}>
        <CardAtualizar />
        <CardAtualizar />
        <CardAtualizar />

        <div className={styles.cardInserir}>
          <Link to="/atualizar">
            <button className={styles.botaoInserir}>
              <PlusCircle />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
