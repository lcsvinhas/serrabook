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
          Authorization: token
        }

      })
      .then(async (response) => {
        const listaLivros = response.data;

        const livrosComCapa = await Promise.all(
          listaLivros.map(async (livro) => {
            try {
              const detalhe = await axios.get(`http://localhost:8080/isbn/${livro.isbn}`, {
                headers: {
                  Authorization: token
                }
              });

              return {
                ...livro,
                urlCapa: detalhe.data.urlCapa
              };
            } catch (error) {
              console.error("Erro ao buscar a capa do livro:", livro.isbn, error);

              return { ...livro, urlCapa: null };
            }
          })
        );

        setLivro(livrosComCapa);
      })
      .catch(() => {
        console.error("Erro ao buscar produtos");
      });
  }, []);

  return (
    <div>
      <Header />
      <h2 className={styles.tituloProdutos}>Produtos </h2>
      <div className={styles.containerCard}>
        {livro.map((livro, index) => (
          <div key={index} className={styles.containerProdutos}>
            <CardAtualizar
              nome={livro.nome}
              preco={livro.preco}
              urlCapa={livro.urlCapa}
              id={livro.id}
            />
          </div>
        ))}
        <div className={styles.cardInserir}>
          <button className={styles.botaoInserir}>
            <PlusCircle />
          </button>
        </div>

      </div>
    </div>
  );
}