import { Request, Response } from "express";
import { IContactRequest } from "../interfaces/contact";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import listContactService from "../services/contacts/listContacts.service";

export const createContactController = async (req: Request, res: Response) => {
  const newContactsInfo: IContactRequest = req.body;

  const userId: string = req.user.idUser;

  const newContact = await createContactService(newContactsInfo, userId);

  return res.status(201).json(newContact);
};

export const listContactsController = async (req: Request, res: Response) => {
  const contacts = await listContactService();

  return res.status(200).json(contacts);
};

export const deleteContactController = async (req: Request, res: Response) => {
  const contactId = req.params.contactId;

  const deleteContact = await deleteContactService(contactId);

  return res.status(204).json(deleteContact);
};
