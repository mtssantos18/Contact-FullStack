import { NextFunction, Request, Response } from "express";

const checkOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ownerId = req.user.idUser;

  const { userId } = req.params;

  if (ownerId !== userId) {
    return res
      .status(401)
      .json({ message: "You must be owner to delete this." });
  }

  next();
};

export default checkOwnerMiddleware;
