import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { EmailContact } from "../../entities/emailsContact.entity";
import { PhoneContact } from "../../entities/phonesContact.entity";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import { IContactRequest } from "../../interfaces/contact";

const createContactService = async (
  newContactInfo: IContactRequest,
  userId: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);
  const emailContactRepository = AppDataSource.getRepository(EmailContact);
  const phoneContactRepository = AppDataSource.getRepository(PhoneContact);

  const { fullName, emailsContact, phonesContact } = newContactInfo;

  if (emailsContact.length > 3 || phonesContact.length > 3) {
    throw new AppError(
      "You can't add more than 3 phone numbers or emails to a Contact."
    );
  }

  const userOwner = await userRepository.findOneByOrFail({ id: userId });

  const contact = contactRepository.create({ fullName, user: userOwner });

  await contactRepository.save(contact);

  if (emailsContact.length != 0) {
    emailsContact.map(async (email) => {
      const newEmail = emailContactRepository.create({ email, contact });

      await emailContactRepository.save(newEmail);
    });
  }

  if (phonesContact.length != 0) {
    phonesContact.map(async (number) => {
      const newPhone = phoneContactRepository.create({ number, contact });

      await phoneContactRepository.save(newPhone);
    });
  }

  return contact;
};

export default createContactService;
