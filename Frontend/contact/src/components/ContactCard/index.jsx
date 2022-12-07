import { ContactLi } from "./styles";

function ContactCard({ contact }) {
  return (
    <ContactLi>
      <p>
        Nome Completo: <span>{contact.fullName}</span>
      </p>

      <p>
        Emails: <span>{contact.emailsContact}</span>
      </p>

      <p>
        Phones: <span>{contact.phonesContact}</span>
      </p>
    </ContactLi>
  );
}

export default ContactCard;
