import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

import ContactsList from "../../components/ContactsList";

import { Container, Header } from "./styles";

function MyContacts() {
  const history = useHistory();

  const fullName = JSON.parse(localStorage.getItem("@Contact:name"));

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const logout = () => {
    localStorage.clear();

    toast.success("Desconectado com sucesso!");

    setTimeout(() => {
      return history.push("/");
    }, 2000);
  };

  return (
    <Container>
      <Header>
        <h1>Bem vindo, {fullName} !</h1>

        <div>
          <button onClick={() => handleNavigation("/home")}>
            Página Inicial
          </button>
          <button onClick={() => logout()}>Desconectar</button>
        </div>
      </Header>

      <ContactsList />
    </Container>
  );
}

export default MyContacts;
