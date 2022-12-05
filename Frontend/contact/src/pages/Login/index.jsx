import { useHistory } from "react-router-dom";

import { Container, FormBox } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";

import { toast } from "react-toastify";

function Login() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const formSchema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    api
      .post("/login", data)
      .then((res) => {
        const token = res.data.token;

        localStorage.setItem("@Contact:token", JSON.stringify(token));

        toast.success("Usuário logado com sucesso.");

        setTimeout(() => {
          return history.push("/home");
        }, 1500);
      })
      .catch((err) => toast.error("Usuário ou senha inválidos."));
  };

  return (
    <Container>
      <FormBox>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label>
              Usuário
              {!!errors.username && <span>{errors.username.message}</span>}
            </label>
            <input
              type="text"
              placeholder="Digite seu usuário"
              {...register("username")}
            />
          </fieldset>

          <fieldset>
            <label>
              Senha
              {!!errors.password && <span>{errors.password.message}</span>}
            </label>
            <input
              type="password"
              autoComplete="off"
              placeholder="Digite sua senha"
              {...register("password")}
            />
          </fieldset>

          <button type="submit">Entrar</button>
        </form>

        <div>
          <small>Ainda não possui uma conta?</small>
          <button onClick={() => handleNavigation("/register")}>
            Cadastre-se
          </button>
        </div>
      </FormBox>
    </Container>
  );
}

export default Login;
