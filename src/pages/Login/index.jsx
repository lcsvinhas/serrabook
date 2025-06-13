import HeaderLogin from "../../components/HeaderLogin";
import * as styles from "./Login.module.css";
import entrar from "../../img/entrar.png";
import vectorsvg from "../../assets/vectorsvg.svg";

export default function Login() {
  return (
    <div>
      <HeaderLogin />
      <div className={styles.body}>
        <div className={styles.container}>
          <img className={styles.vector} src={vectorsvg} alt="Vector Preto" />
          <form className={styles.form} action="">
            <label htmlFor="email" className={styles.label}>Email</label>
            <input className={styles.input} type="email" id="email" name="email" />

            <label htmlFor="password" className={styles.label}>Senha</label>
            <input className={styles.input} type="password" id="password" name="password" />

            <button className={styles.button} type="submit">Entrar
              <img className={styles.entrar} src={entrar} alt="Entrar" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
