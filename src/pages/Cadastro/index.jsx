import HeaderLogin from "../../components/HeaderLogin";
import * as styles from "./Cadastro.module.css";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const validationPost = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  telefone: yup.string().required("Telefone é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
  senha: yup.string().required("Senha é obrigatória"),
  salario: yup.number().required("Salário é obrigatório"),
  dataAdmissao: yup
    .string()
    .required("Data de admissão é obrigatória")
    //testando se o porbelam é a formatação
    .matches(/^\d{4}-\d{2}-\d{2}$/),

  cep: yup
    .string()
    .required("CEP é obrigatório")
    //forçando formatação de novo :)
    .matches(/^\d{8}$/),
  perfisIds: yup
    .array()
    .of(yup.number())
    .min(1, "Selecione pelo menos um perfil")
    .required("Perfis são obrigatórios"),
});

export default function Cadastro() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });
  // Tentando resolver o bad request do salario
  const cadastrar = (data) => {
    //data.salario = Number(data.salario);
    data.perfisIds = data.perfisIds.map(Number);
    //stackoverflow
    console.log(JSON.stringify(data));

    // estava como setItem, corrigido para getItem
    const token = localStorage.getItem("token");

    axios
      .post("http://localhost:8080/funcionarios", data, {
        headers: {
          // adicionamos
          Authorization: token,
        },
      })
      .then(() => {
        console.log("Funcionou!");
        navigate("/login");
      })
      .catch((error) => console.log("Deu ruim!", error, data));
  };

  return (
    <div>
      <HeaderLogin />
      <div className={styles.body}>
        <div className={styles.container}>
          <h2 className={styles.titulo}>Cadastro de Funcionário</h2>
          <form onSubmit={handleSubmit(cadastrar)} className={styles.form}>
            <label className={styles.label}>Nome:</label>
            <input className={styles.input} type="text" {...register("nome")} />
            {errors.nome && (
              <span className={styles.error}>{errors.nome.message}</span>
            )}

            <label className={styles.label}>Telefone:</label>
            <input
              className={styles.input}
              type="text"
              {...register("telefone")}
            />
            {errors.telefone && (
              <span className={styles.error}>{errors.telefone.message}</span>
            )}

            <label className={styles.label}>Email:</label>
            <input
              className={styles.input}
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}

            <label className={styles.label}>CPF:</label>
            <input className={styles.input} type="text" {...register("cpf")} />
            {errors.cpf && (
              <span className={styles.error}>{errors.cpf.message}</span>
            )}

            <label className={styles.label}>Senha:</label>
            <input
              className={styles.input}
              type="password"
              {...register("senha")}
            />
            {errors.senha && (
              <span className={styles.error}>{errors.senha.message}</span>
            )}

            <label className={styles.label}>Salário:</label>
            <input
              className={styles.input}
              type="text"
              {...register("salario")}
            />
            {errors.salario && (
              <span className={styles.error}>{errors.salario.message}</span>
            )}

            <label className={styles.label}>Data de Admissão:</label>
            <input
              className={styles.input}
              type="date"
              {...register("dataAdmissao")}
            />
            {errors.dataAdmissao && (
              <span className={styles.error}>
                {errors.dataAdmissao.message}
              </span>
            )}

            <label className={styles.label}>CEP:</label>
            <input className={styles.input} type="text" {...register("cep")} />
            {errors.cep && (
              <span className={styles.error}>{errors.cep.message}</span>
            )}

            <label className={styles.label}>Perfis:</label>
            <div className={styles.perfis}>
              <label>
                <input type="checkbox" value="1" {...register("perfisIds")} />{" "}
                ADMIN
              </label>
              <label className={styles.user}>
                <input type="checkbox" value="2" {...register("perfisIds")} />{" "}
                USER
              </label>
            </div>
            {errors.perfisIds && (
              <span className={styles.error}>{errors.perfisIds.message}</span>
            )}

            <button className={styles.button} type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
