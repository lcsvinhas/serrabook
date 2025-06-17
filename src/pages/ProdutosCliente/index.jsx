import * as styles from "./ProdutosCliente.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import CardLivro from "../../components/CardLivro";

export default function Catalogo() {
  const [livros, setLivros] = useState([]);
  // const [categorias, setCategorias] = useState([]);   ----- tirei pq nao estou buscando mais todas as categorias da api
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null); // null para o "Todos"

  // usando categorias fixas
  const categoriasFiltro = [
    { id: 1, nome: "Categoria 1" },
    { id: 2, nome: "Categoria 2" },
    { id: 3, nome: "Categoria 3" },
  ];

  // useEffect(() => {
  //  axios
  //  .get("http://localhost:8080/categorias")
  // .then((response) => {
  //   setCategorias(response.data);
  //  })
  //  .catch(() => {
  //   console.error("Erro ao buscar categorias");
  //   };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const url = categoriaSelecionada
      ? `http://localhost:8080/categorias/${categoriaSelecionada}/produtos`
      : "http://localhost:8080/produtos";

    axios
      .get(url, {
        headers: { Authorization: token },
      })
      .then(async (response) => {
        const listaLivros = response.data;
        const livrosComCapa = await Promise.all(
          listaLivros.map(async (livro) => {
            try {
              const detalhe = await axios.get(
                `http://localhost:8080/isbn/${livro.isbn}`,
                {
                  headers: { Authorization: token },
                }
              );
              return { ...livro, urlCapa: detalhe.data.urlCapa };
            } catch (error) {
              return {
                ...livro,
                urlCapa:
                  "https://via.placeholder.com/250x300.png?text=Capa+Indisponível",
              };
            }
          })
        );
        setLivros(livrosComCapa);
      })
      .catch(() => {
        console.error("Erro ao buscar produtos");
        setLivros([]);
      });
  }, [categoriaSelecionada]);

  return (
    <div>
      <Header />
      <h2 className={styles.tituloProdutos}>Nosso Catálogo 📚</h2>

      <div className={styles.containerFiltros}>
        <button
          onClick={() => setCategoriaSelecionada(null)}
          className={`${styles.botaoFiltro} ${
            !categoriaSelecionada ? styles.ativo : ""
          }`}
        >
          Todos
        </button>

        {categoriasFiltro.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoriaSelecionada(cat.id)}
            className={`${styles.botaoFiltro} ${
              categoriaSelecionada === cat.id ? styles.ativo : ""
            }`}
          >
            {cat.nome}
          </button>
        ))}
      </div>

      {/*  grid de produtos */}
      <div className={styles.containerCard}>
        {livros.length > 0 ? (
          livros.map((livro) => (
            <div key={livro.id} className={styles.containerProdutos}>
              <CardLivro
                titulo={livro.nome}
                preco={livro.preco}
                imagem={livro.urlCapa}
              />
            </div>
          ))
        ) : (
          <p>Nenhum livro encontrado para esta categoria.</p>
        )}
      </div>
    </div>
  );
}
