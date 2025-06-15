import HeaderLogin from "../../components/HeaderLogin";
import * as styles from "./Login.module.css";
import entrar from "../../img/entrar.png";
import vectorsvg from "../../assets/vectorsvg.svg";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const validationPost = yup.object().shape({
  username: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().min(6, "Senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
});

export default function Login() {
  let navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationPost) })
  const login = (data => {
    axios.post("http://localhost:8080/login", data)
      .then((response) => {
        const token = response.headers.get("Authorization");
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch((error) => console.log("Deu ruim!", error, data));
  })


  return (
    <div>
      <HeaderLogin />
      <div className={styles.body}>
        <div className={styles.container}>
          <img className={styles.vector} src={vectorsvg} alt="Vector Preto" />
          <form onSubmit={handleSubmit(login)} className={styles.form}>
            <label htmlFor="username" className={styles.label}>Email</label>
            <input className={styles.input} type="email" id="username" name="username" {...register("username")} />
            {errors.username && <span className={styles.error}>{errors.username.message}</span>}

            <label htmlFor="password" className={styles.label}>Senha</label>
            <input className={styles.input} type="password" id="password" name="password" {...register("password")} />
            {errors.password && <span className={styles.error}>{errors.password.message}</span>}

            <button className={styles.button} type="submit">Entrar
              <img className={styles.entrar} src={entrar} alt="Entrar" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
