
import Header from "../../components/Header";
import { useEffect, useState } from 'react'
import * as styles from './Atualizar.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineDeleteOutline } from "react-icons/md";
import Botao from "../../components/Botao";


export default function Atualizar() {
  const [livro, setLivro] = useState({});
  const { id } = useParams();

  // useEffect(() => {
  //   axios
  //   .get(`http://localhost:8080/`)
  // })

  return (
    <>
      <Header />
      <div className={styles.principal}>
        <div className={styles.imagem}>
          <img src="https://ia902309.us.archive.org/view_archive.php?archive=/20/items/l_covers_0008/l_covers_0008_17.zip&file=0008172473-L.jpg" alt="Capa do livro {livro.nome}" />
        </div>

        <div className={styles.conteudo}>
          <form onSubmit={handleSubmit(addLivro)}>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" id="titulo" name="titulo" />

            <label htmlFor="preco">Preço R$</label>
            <input type="text" id="preco" name="preco" />
              <div className={styles.botoes}>

              </div>
          </form>
        </div>
      </div >
    </>

  )
}
