import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";

const listSpecificUserService = async (userId: string) => {
  if (userId.length !== 36) {
    throw new AppError("Invalid id.", 400);
  }
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found.", 404);
  }

  return user;
};
export default listSpecificUserService;
