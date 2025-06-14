import { Link } from "react-router-dom";
import * as styles from "./Botao.module.css";

export default function Botao({linkPagina, imagem}) {
    return (
        <div className={styles.btnIcon}>
            {/* <Link to={linkPagina}> */}
                <button>
                    <img src={imagem.url} alt={imagem.descricao}/>
                </button>
            {/* </Link> */}
        </div>
    )
}


{/* import Botao from "../../components/Botao";
    
    <Botao
                    linkPagina={`/`}
                    imagem={
                        {
                            url: foto,
                            descricao: 'teste'
                        }
                    }
    /> */}