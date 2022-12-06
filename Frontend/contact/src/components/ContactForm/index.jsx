import React from "react";
import { Container, FormBox } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function ContactForm() {
  const formSchema = yup.object().shape({
    fullName: yup.string().required("Campo obrigatório!"),
    emailsContact: yup.string().required("Campo obrigatório!"),
    phonesContact: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    const formattedEmails = data.emailsContact.split(",");
    const formattedPhones = data.phonesContact.split(",");

    const newData = {
      ...data,
      emailsContact: formattedEmails,
      phonesContact: formattedPhones,
    };

    api
      .post("/contacts", newData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@Contact:token")
          )}`,
        },
      })
      .then((res) => {
        toast.success("Contato adicionado com sucesso!");
      })
      .catch((err) =>
        toast.error(
          "Certifique que está passando as informações de maneira correta."
        )
      );
  };

  return (
    <Container>
      <h2>Adicionar um novo contato</h2>

      <FormBox>
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
              Emails
              {!!errors.emailsContact && (
                <span>{errors.emailsContact.message}</span>
              )}
            </label>
            <input
              type="text"
              placeholder="Digite seus emails"
              {...register("emailsContact")}
            />
            <span>* Cadastre até 3 emails, separados por vírgula.</span>
          </fieldset>

          <fieldset>
            <label>
              Telefones
              {!!errors.phonesContact && (
                <span>{errors.phonesContact.message}</span>
              )}
            </label>
            <input
              type="text"
              placeholder="Digite seu usuário"
              {...register("phonesContact")}
            />
            <span>* Cadastre até 3 telefones, separados por vírgula.</span>
          </fieldset>
          <button type="submit">Adicionar contato</button>
        </form>
      </FormBox>
    </Container>
  );
}

export default ContactForm;
