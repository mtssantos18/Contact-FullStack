import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import AppError from "../errors/AppError";
import { IUserRequest } from "../interfaces/user";

const checkUsernameAvailability = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user: IUserRequest = req.body;

  const userRepository = AppDataSource.getRepository(User);

  const checkUser = await userRepository.findOneBy({ username: user.username });

  if (checkUser) {
    throw new AppError("Username already exist.", 409);
  }

  next();
};

export default checkUsernameAvailability;
