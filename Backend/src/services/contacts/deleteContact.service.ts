import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import AppError from "../../errors/AppError";

const deleteContactService = async (contactId: string) => {
  if (contactId.length !== 36) {
    throw new AppError("Invalid id.", 400);
  }

  const contactRepository = AppDataSource.getRepository(Contact);

  const checkContact = contactRepository.findOneBy({ id: contactId });

  if (!checkContact) {
    throw new AppError("Contact not found.", 404);
  }

  await contactRepository.delete({ id: contactId });

  return true;
};

export default deleteContactService;
