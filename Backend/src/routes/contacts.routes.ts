import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsController,
} from "../controllers/contacts.controllers";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import checkContactOwnerMiddleware from "../middlewares/checkContactOwner.middleware";

const contactsRoutes = Router();

contactsRoutes.post("", authTokenMiddleware, createContactController);
contactsRoutes.get("", authTokenMiddleware, listContactsController);
contactsRoutes.delete(
  "/:contactId",
  authTokenMiddleware,
  checkContactOwnerMiddleware,
  deleteContactController
);

export default contactsRoutes;
