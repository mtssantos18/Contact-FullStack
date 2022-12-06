import React, { useState } from "react";
import DeleteUserModal from "../DeleteUserModal";
import { MyInfo } from "./styles";

function UserInfo({ user }) {
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

  const formatUserDate = () => {
    const formattedDate = user.createdAt.slice(0, 10);
    const splitDate = formattedDate.split("-");
    const date = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    return date;
  };

  const getEmails = () => {
    const emails = user?.emailsUser.map((item) => item.email);

    const emailsString = emails.join(", ");

    return emailsString;
  };

  const getPhones = () => {
    const emails = user?.phonesUser.map((item) => item.number);

    const phonesString = emails.join(", ");

    return phonesString;
  };
  return (
    <MyInfo>
      {showModalDeleteUser && (
        <DeleteUserModal setShowModalDeleteUser={setShowModalDeleteUser} />
      )}
      <h2>Minhas informações:</h2>

      <p>
        Nome completo: <span>{user.fullName}</span>
      </p>

      <p>
        Usuário: <span>{user.username}</span>
      </p>

      <p>
        Emails: <span>{user?.emailsUser && getEmails()}</span>
      </p>

      <p>
        Phones: <span>{user?.phonesUser && getPhones()}</span>
      </p>

      <p>
        Data de Registro: <span>{user?.createdAt && formatUserDate()}</span>
      </p>

      <button
        className="buttonDel"
        onClick={() => setShowModalDeleteUser(true)}
      >
        Deletar minha conta
      </button>
    </MyInfo>
  );
}

export default UserInfo;
