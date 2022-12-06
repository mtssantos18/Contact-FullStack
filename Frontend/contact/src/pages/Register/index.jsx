import { useHistory } from "react-router-dom";

import { Container, FormBox } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";

import { toast } from "react-toastify";

function Register() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const formSchema = yup.object().shape({
    fullName: yup.string().required("Campo obrigatório!"),
    username: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório!")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    emailsUser: yup.string().required("Campo obrigatório!"),
    phonesUser: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    const formattedEmails = data.emailsUser.split(",");
    const formattedPhones = data.phonesUser.split(",");

    const newData = {
      ...data,
      emailsUser: formattedEmails,
      phonesUser: formattedPhones,
    };

    api
      .post("/users", newData)
      .then((res) => {
        toast.success("Cadastro efetuado com sucesso.");

        setTimeout(() => {
          return history.push("/");
        }, 1500);
      })
      .catch((err) => {
        if (err.response.data.message === "Username already exist.") {
          toast.error(
            "Nome de usuário já cadastrado, escolha outro diferente."
          );
        } else if (
          err.response.data.message ===
          "You can't add more than 3 phone numbers or emails to a User."
        ) {
          toast.error("Cadastre no máximo 3 emails/telefones diferentes.");
        } else {
          toast.error("Cadastro não efetuado, revise suas informações.");
        }
      });
  };

  return (
    <Container>
      <FormBox>
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label>
              Nome {!!errors.fullName && <span>{errors.fullName.message}</span>}
            </label>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              {...register("fullName")}
            />
          </fieldset>

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
              placeholder="Digite sua senha"
              autoComplete="off"
              {...register("password")}
            />
          </fieldset>

          <fieldset>
            <label>
              Confirmação de Senha
              {!!errors.passwordConfirm && (
                <span>{errors.passwordConfirm.message}</span>
              )}
            </label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              autoComplete="off"
              {...register("passwordConfirm")}
            />
          </fieldset>

          <fieldset>
            <label>
              Emails
              {!!errors.emailsUser && <span>{errors.emailsUser.message}</span>}
            </label>
            <input
              type="text"
              placeholder="Digite seus emails"
              {...register("emailsUser")}
            />
            <span>* Cadastre até 3 emails, separados por vírgula.</span>
          </fieldset>

          <fieldset>
            <label>
              Telefones
              {!!errors.phonesUser && <span>{errors.phonesUser.message}</span>}
            </label>
            <input
              type="text"
              placeholder="Digite seu usuário"
              {...register("phonesUser")}
            />
            <span>* Cadastre até 3 telefones, separados por vírgula.</span>
          </fieldset>

          <button type="submit">Cadastrar</button>
        </form>

        <div>
          <small>Já é cadastrado? Faça seu login.</small>
          <button onClick={() => handleNavigation("/")}>Login</button>
        </div>
      </FormBox>
    </Container>
  );
}

export default Register;
