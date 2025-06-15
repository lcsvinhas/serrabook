import Header from "../../components/Header";
import { useEffect, useState } from 'react'
import * as styles from './Atualizar.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Botao from "../../components/Botao";
import { Check, TrashSimple, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("O título tem que ser preenchido")
    .max(100, "Tamanho máximo permitido excedido"),
  preco: yup
    .string()
    .required("O preço tem que ser preenchido")
    .max(5, "Tamanho máximo permitido excedido")
});

export default function Atualizar() {
  const { id } = useParams();
  const [livro, setLivro] = useState({});

  function getToken() {
    return localStorage.getItem("token");
  }

  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(validationPost) });


  useEffect(() => {
    const token = getToken();

    async function buscarLivro() {
      try {
        const respostaGetId = await axios.get(`http://localhost:8080/produtos/${id}`, {
          headers: {
            Authorization: token,
          }
        })

        const livroDados = respostaGetId.data;
        reset(livroDados);
        try {
          const respostaISBN = await axios.get(`http://localhost:8080/isbn/${livroDados.isbn}`, {
            headers: {
              Authorization: token,
            }
          })

          setLivro({
            ...livroDados,
            urlCapa: respostaISBN.data.urlCapa
          })
        } catch (error) {
          console.error("Deu problema ao buscar a capa do livro:", error);
          setLivro({
            ...livroDados,
            urlCapa: null
          })
        }

      } catch (error) {
        console.error("Deu problema ao buscar os dados do  livro: ", error);
      }
    }

    buscarLivro();

  }, []);

  const addLivro = (data) => {
    const token = getToken();

    const { id: _ignored, categoriaId, ...rest } = data;
    const corrigindoJSON = { ...rest, idCategoria: categoriaId};
    axios.put(`http://localhost:8080/produtos/${id}`, corrigindoJSON, {
      headers: {
        Authorization: token,
      }
    })
      .then(() => {
        console.log("Livro atualizado com sucesso");
        navigate("/")
      })
      .catch((error) => console.error("Erro ao atualizar o livro:", error));
  }


  function deletarLivro(id) {
    const token = getToken();
    axios.delete(`http://localhost:8080/produtos/${id}`, {
      headers: {
        Authorization: token,
      }
    })
      .then(() => {
        console.log("Livro apagado com sucesso.");
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.warn("Livro não encontrado para exclusão.");
        } else {
          console.error("Erro ao excluir o livro:", error);
        }
      });
  }

  return (
    <>
      <Header />
      <div className={styles.principal}>
        <div className={styles.imagem}>
          <img src={livro.urlCapa} alt={`Capa do livro ${livro.nome}`}/>
        </div>

        <form onSubmit={handleSubmit(addLivro)} className={styles.conteudo}>
          <label htmlFor="nome">Titulo</label>
          <input type="text" id="nome" name="nome" {...register('nome')} />
          <p className={styles.erroMensagem}> {errors.nome?.message}</p>

          <label htmlFor="preco">Preço R$</label>
          <input type="text" id="preco" name="preco" {...register('preco')} />
          <p className={styles.erroMensagem}> {errors.preco?.message}</p>

          <div className={styles.botoes}>
            <Botao icone={<Check color="DarkGreen" />} type={"submit"} aria-label="Botão que salva as alterações do livro" />
            <Botao linkPagina="/" icone={<X color="brown" />} aria-label="Botão descartar as alterações do livro" />
            <Botao onClick={() => deletarLivro(id)} icone={<TrashSimple />} aria-label="Botão que exclui o livro" />
          </div>
        </form>
      </div >
    </>

  )
}
