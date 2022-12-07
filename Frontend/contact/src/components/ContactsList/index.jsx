import React, { useEffect, useState } from "react";
import api from "../../services/api";
import ContactCard from "../ContactCard";
import EmptyCard from "../EmptyCard";
import { ContactInfo, Ul } from "./styles";

function ContactsList() {
  const [myContactsList, setMyContactsList] = useState([]);

  const [myContactsFormatted, setMyContactsFormatted] = useState([]);

  const formatEmailAndPhones = () => {
    const formattedContacts = myContactsList.map((contact) => {
      const emailFormatted = contact.emailsContact.map((email) => email.email);
      const phoneFormatted = contact.phonesContact.map(
        (number) => number.number
      );
      contact.emailsContact = emailFormatted.join(", ");
      contact.phonesContact = phoneFormatted.join(", ");

      return contact;
    });

    setMyContactsFormatted(formattedContacts);
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Contact:token"));

    if (token) {
      api
        .get(`/users/contacts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setMyContactsList(res.data.contacts);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    formatEmailAndPhones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myContactsList]);

  return (
    <ContactInfo>
      <h2>Meus Contatos</h2>

      <p className="quantityPara">
        Quantidade Total: {myContactsFormatted.length}
      </p>

      <Ul>
        {myContactsFormatted.length === 0 ? (
          <EmptyCard />
        ) : (
          myContactsFormatted.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))
        )}
      </Ul>
    </ContactInfo>
  );
}

export default ContactsList;
