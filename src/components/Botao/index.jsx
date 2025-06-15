import { Link } from "react-router-dom";
import * as styles from "./Botao.module.css";

export default function Botao(props) {
    const botaoHTML = (
        <button className={styles.btBotao} type={props.type || "button"} onClick={props.onClick}>
            <div className={styles.btIcone}>{props.icone}</div>
        </button>
    )

    return props.linkPagina ? (
        <div className={styles.btPrincipal}>
            <Link to={props.linkPagina}>
                {botaoHTML}
            </Link>
        </div>
    ) : (
        <div className={styles.btPrincipal}>
            {botaoHTML}
        </div>
    );
}

{/* 1. Botão que navega
    <Botao linkPagina="/" icone={</>} />

    2. Botão que executa ação local
    <Botao
        icone={< />}
        onClick={() => console.log("Apagado!")}
        aria-label="Apagar item"
    />
*/}