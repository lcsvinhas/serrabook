import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import CardLivro from "../../components/CardLivro";
import banner from "../../img/banner-1.png";
import * as styles from "./Home.module.css";
import { Package, Coins, IdentificationCard, Books } from "phosphor-react";

export default function Home() {
  const [livros, setLivros] = useState([]);

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

      <div className={styles.cardIcones}>
        <div className={styles.boxIcones}>
          <Package size={48} className={styles.icone} />
          <p className={styles.titulo}>NOVIDADES</p>
          <p className={styles.texto}> Atualizamos o acervo toda semana.</p>
        </div>

        <div className={styles.boxIcones}>
          <Coins size={48} className={styles.icone} />
          <p className={styles.titulo}>BARATINHOS</p>
          <p className={styles.texto}>Sua leitura por uma pechincha.</p>
        </div>

        <div className={styles.boxIcones}>
          <IdentificationCard
            size={48}
            weight="fill"
            className={styles.icone}
          />
          <p className={styles.titulo}>SEJA MEMBRO</p>
          <p className={styles.texto}>Assine nosso clube do livro.</p>
        </div>

        <div className={styles.boxIcones}>
          <Books size={48} className={styles.icone} />
          <p className={styles.titulo}>TRATO FEITO</p>
          <p className={styles.texto}>Negocie seus livros conosco.</p>
        </div>
      </div>

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
