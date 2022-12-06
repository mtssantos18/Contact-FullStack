import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import ContactForm from "../../components/ContactForm";
import UserInfo from "../../components/UserInfo";
import api from "../../services/api";
import { Container, Header } from "./styles";

function Home() {
  const history = useHistory();

  const fullName = JSON.parse(localStorage.getItem("@Contact:name"));

  const [user, setUser] = useState({});

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

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Contact:token"));

    if (token) {
      api
        .get(`/users/${JSON.parse(localStorage.getItem("@Contact:userId"))}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header>
        <h1>Bem vindo, {fullName} !</h1>

        <div>
          <button onClick={() => handleNavigation("/mycontacts")}>
            Meus Contatos
          </button>
          <button onClick={() => logout()}>Desconectar</button>
        </div>
      </Header>
      <UserInfo user={user} />
      <ContactForm />
    </Container>
  );
}

export default Home;
