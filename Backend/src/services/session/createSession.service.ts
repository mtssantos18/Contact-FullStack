import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserLogin } from "../../interfaces/user";
import "dotenv/config";
import AppError from "../../errors/AppError";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const createSessionService = async ({ username, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ username });

  if (!user) {
    throw new AppError("Invalid username or password", 403);
  }

  const checkPassword = await compare(password, user.password);

  if (!checkPassword) {
    throw new AppError("Invalid username or password", 403);
  }

  const token = jwt.sign(
    {
      emails: user.emailsUser,
      phones: user.phonesUser,
    },
    process.env.SECRET_KEY as string,
    { subject: user.id, expiresIn: "10h" }
  );

  return {
    token,
    user: { fullName: user.fullName, username: user.username, userId: user.id },
  };
};

export default createSessionService;
