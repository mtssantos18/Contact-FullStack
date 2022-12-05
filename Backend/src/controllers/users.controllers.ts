import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listUsersService from "../services/users/listUsers.service";
import { IUserRequest } from "../interfaces/user";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listContactsFromUserService from "../services/users/listContactsFromUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const newUserInfo: IUserRequest = req.body;

  const newUser = await createUserService(newUserInfo);

  return res.status(201).json(instanceToPlain(newUser));
};

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.status(200).json(instanceToPlain(users));
};

export const listContactsFromUserController = async (
  req: Request,
  res: Response
) => {
  const userId = req.user.idUser;

  const userContacts = await listContactsFromUserService(userId);

  return res.status(200).json(userContacts);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const deleteUser = await deleteUserService(userId);

  return res.status(204).json(deleteUser);
};
