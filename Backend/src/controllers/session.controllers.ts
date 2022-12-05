import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/user";
import createSessionService from "../services/session/createSession.service";

export const createSessionController = async (req: Request, res: Response) => {
  const { username, password }: IUserLogin = req.body;

  const token = await createSessionService({ username, password });

  return res.status(200).send(token);
};
