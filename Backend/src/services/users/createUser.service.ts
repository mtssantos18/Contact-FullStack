import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { EmailUser } from "../../entities/emailsUser.entity";
import { PhoneUser } from "../../entities/phonesUser.entity";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/user";

const createUserService = async (newUserInfo: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const emailsUserRepository = AppDataSource.getRepository(EmailUser);
  const phonesUserRepository = AppDataSource.getRepository(PhoneUser);

  if (newUserInfo.emailsUser.length > 3 || newUserInfo.phonesUser.length > 3) {
    throw new AppError(
      "You can't add more than 3 phone numbers or emails to a User"
    );
  }

  const { fullName, password, username } = newUserInfo;

  const hashedPassword = await hash(password, 10);

  const newUser = userRepository.create({
    fullName,
    username,
    password: hashedPassword,
  });

  await userRepository.save(newUser);

  if (newUserInfo.emailsUser.length != 0) {
    newUserInfo.emailsUser.map(async (email) => {
      const newEmail = emailsUserRepository.create({ email, user: newUser });

      await emailsUserRepository.save(newEmail);
    });
  }

  if (newUserInfo.phonesUser.length != 0) {
    newUserInfo.phonesUser.map(async (number) => {
      const newPhone = phonesUserRepository.create({ number, user: newUser });

      await phonesUserRepository.save(newPhone);
    });
  }

  return newUser;
};

export default createUserService;
