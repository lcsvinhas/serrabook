import Header from "../../components/Header";
import * as styles from "./Error.module.css";
import castle from "../../img/castle.png";
import Botao from "../../components/Botao";
import { HouseLine } from "phosphor-react";

export default function Error() {
  return (
    <>
      <Header />
      <div className={styles.conteudo}>
        <div className={styles.principal}>
          <div className={styles.imagem} >
            <img src={castle} alt="Imagem castelo" />
          </div>
          <div className={styles.titulos}>
            <h1 className={styles.titulo} >Acho que você está muito longe de casa...</h1>
            <Botao linkPagina="/" icone={<HouseLine color="#021024" />} aria-label="Botão para retornar para o ínicio"></Botao>
          </div>
        </div>
      </div>
    </>
  )
}
