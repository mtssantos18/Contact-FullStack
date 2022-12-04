import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";

const checkContactOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userLoggedId = req.user.idUser;

  const { contactId } = req.params;

  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id: contactId });

  if (!contact) {
    return res.status(404).json({ message: "Contact not found." });
  }

  if (userLoggedId !== contact.user.id) {
    return res
      .status(401)
      .json({ message: "You must be contact owner to delete this." });
  }

  next();
};

export default checkContactOwnerMiddleware;
