
import Header from "../../components/Header";
import { useEffect } from 'react'
import * as styles from './Atualizar.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Botao from "../../components/Botao";
import { Check, TrashSimple, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationPost = yup.object().shape({
  titulo: yup
    .string()
    .required("O título tem que ser preenchido")
    .max(40, "Tamanho máximo permitido excedido"),
  preco: yup
    .string()
    .required("O preço tem que ser preenchido")
    .max(5, "Tamanho máximo permitido excedido")
});

export default function Atualizar() {
  const { id } = useParams();
  const { imgISBN } = useParams();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }, 
    reset
  } = useForm({ resolver: yupResolver(validationPost) });


  useEffect(() => {
    axios
      .get(`http://localhost:8080/produtos/${id}`)
      .then((response) => {
        reset(response.data);
      })
      .catch(() => {
        console.error("Deu problema na requisição");
      });
  }, []);

  const addLivro = data =>
    axios.put(`http://localhost:8080/produtos/${id}`, data)
      .then(() => {
        console.log("Deu certo");
        navigate("/")
      })
      .catch(() => console.error("Deu errado"));

  function deletarLivro(id){
    axios.delete(`http://localhost:8080/produtos/${id}`)
    .then(() => {
      console.log("Apagado");
      navigate("/");
    })
    .catch(() => {
      console.log("Não encontrado");
    });
  }

  return (
    <>
      <Header />
      <div className={styles.principal}>
        <div className={styles.imagem}>
          <img src={imgISBN} alt="Capa do livro" />
        </div>

          <form onSubmit={handleSubmit(addLivro)} className={styles.conteudo}>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" id="titulo" name="titulo" {...register('nome')}/>
            <p className={styles.erroMensagem}> {errors.titulo?.message}</p>

            <label htmlFor="preco">Preço R$</label>
            <input type="text" id="preco" name="preco" {...register('preco')}/>
            <p className={styles.erroMensagem}> {errors.preco?.message}</p>

              <div className={styles.botoes}>
                <Botao icone={<Check color="DarkGreen"/>} type={"submit"} aria-label="Botão que salva as alterações do livro"/>
                <Botao linkPagina="/" icone={<X color="brown"/>} aria-label="Botão reseta as alterações do livro"/>
                <Botao onClick={() => deletarLivro(id)} icone={<TrashSimple/>} aria-label="Botão que exclui o livro"/>
              </div>
          </form>
      </div >
    </>

  )
}
