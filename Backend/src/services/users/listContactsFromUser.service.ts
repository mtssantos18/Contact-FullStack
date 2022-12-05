import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";

const listContactsFromUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userContacts = await userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });

  if (!userContacts) {
    throw new AppError("User not found.", 404);
  }

  return userContacts;
};

export default listContactsFromUserService;
