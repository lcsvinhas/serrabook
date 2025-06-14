import CardLivro from "../../components/CardLivro";
import * as styles from "./Produtos.module.css";
import { Link } from "react-router-dom";
import CardAtualizar from "../../components/CardAtualizar";
import { PlusCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";

export default function Produtos() {
  const [livro, setLivro] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8080/produtos", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setLivro(response.data);
      })
      .catch(() => {
        console.error("deu errado");
      });
  }, []);

  return (
    <div>
      <Header />
      <h2 className={styles.tituloProdutos}>Produtos </h2>
      {livro.map((livro, index) => (
        <div key={index} className={styles.containerProdutos}>
          <CardAtualizar nome={livro.nome} preco={livro.preco} />
          <div className={styles.cardInserir}>
            <Link to="/atualizar">
              <button className={styles.botaoInserir}>
                <PlusCircle />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
