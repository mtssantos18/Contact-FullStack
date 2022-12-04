import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const listContactService = async () => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find();

  return contacts;
};

export default listContactService;
