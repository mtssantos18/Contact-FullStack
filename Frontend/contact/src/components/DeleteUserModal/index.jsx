import React from "react";
import { Container } from "./styles";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

function DeleteUserModal({ setShowModalDeleteUser }) {
  const history = useHistory();

  const userId = JSON.parse(localStorage.getItem("@Contact:userId"));

  const onDeleteClick = () => {
    api
      .delete(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@Contact:token")
          )}`,
        },
      })
      .then((res) => {
        toast.success("Usuário deletado com sucesso!");

        localStorage.clear();

        setShowModalDeleteUser(false);

        setTimeout(() => {
          return history.push("/");
        }, 2000);
      })
      .catch((err) =>
        toast.error("Algo deu errado, tente novamente mais tarde!")
      );
  };
  return (
    <Container>
      <div className="modal">
        <header>
          <h2>Confirmação</h2>
          <MdClose onClick={() => setShowModalDeleteUser(false)} />
        </header>
        <p>Deseja realmente deletar sua conta?</p>
        <div className="buttons">
          <button className="buttonYes" onClick={() => onDeleteClick()}>
            Sim
          </button>
          <button
            className="buttonNo"
            onClick={() => setShowModalDeleteUser(false)}
          >
            Não
          </button>
        </div>
      </div>
    </Container>
  );
}

export default DeleteUserModal;
