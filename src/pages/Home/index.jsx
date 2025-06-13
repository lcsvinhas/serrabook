import banner from "../../img/banner-1.png";
import * as styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <img
        className={styles.banner}
        src={banner}
        alt="Banner sobre o Serrabook Day. Possui três livros de programação em pé e em perspectiva."
      />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa,
          cupiditate voluptas officia accusamus esse placeat commodi, quae
          explicabo temporibus laborum, similique perspiciatis? Voluptatum culpa
          nam, voluptatibus repudiandae officia iusto?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa,
          cupiditate voluptas officia accusamus esse placeat commodi, quae
          explicabo temporibus laborum, similique perspiciatis? Voluptatum culpa
          nam, voluptatibus repudiandae officia iusto?
        </p>
      </div>

      <div className={styles.verMais}>
        <Link to={"/produtos"}>
          <button>Ver mais</button>
        </Link>
      </div>
    </div>
  );
}
