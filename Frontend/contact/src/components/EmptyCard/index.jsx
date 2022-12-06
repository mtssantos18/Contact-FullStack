import React from "react";
import { useHistory } from "react-router-dom";
import { EmptyDiv } from "./styles";

function EmptyCard() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <EmptyDiv>
      <h2>Você ainda não possui contatos.</h2>
      <p>
        Adicione novos contatos na{" "}
        <button onClick={() => handleNavigation("/home")}>
          Página Inicial
        </button>
      </p>
    </EmptyDiv>
  );
}

export default EmptyCard;
