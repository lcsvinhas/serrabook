import { useEffect, useState } from "react";
import CardLivro from "../../components/CardLivro";
import Header from "../../components/Header";
import banner from "../../img/banner-1.png";
import * as styles from "./Home.module.css";
import { Link } from "react-router-dom";

import axios from "axios";

export default function Home() {
  const [livros, setLivros] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8080/produtos", {
        headers: {
          Authorization: token,
        },
      })
      .then(async (response) => {
        const listaLivros = response.data.filter((_, index) => index < 6);

        const livrosComCapa = await Promise.all(
          listaLivros.map(async (livro) => {
            try {
              const detalhe = await axios.get(
                `http://localhost:8080/isbn/${livro.isbn}`,
                {
                  headers: {
                    Authorization: token,
                  },
                }
              );

              return {
                ...livro,
                urlCapa: detalhe.data.urlCapa,
              };
            } catch (error) {
              console.error("Erro ao buscar a capa:", livro.isbn, error);
              return { ...livro, urlCapa: null };
            }
          })
        );

        setLivros(livrosComCapa);
      })
      .catch((error) => {
        console.error("Erro ao buscar livros:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <img
        className={styles.banner}
        src={banner}
        alt="Banner sobre o Serrabook Day. Possui três livros de programação em pé e em perspectiva."
      />

      <div className={styles.cardHome}>
        {livros.map((livro, index) => (
          <CardLivro
            key={index}
            titulo={livro.nome}
            preco={livro.preco}
            imagem={livro.urlCapa}
          />
        ))}
      </div>

      <div className={styles.verMais}>
        <Link to={"/produtos"}>
          <button>Ver mais</button>
        </Link>
      </div>
    </div>
  );
}
