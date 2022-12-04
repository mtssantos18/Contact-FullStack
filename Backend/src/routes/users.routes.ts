import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
} from "../controllers/users.controllers";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import checkOwnerMiddleware from "../middlewares/checkOwner.middleware";
import checkUsernameAvailability from "../middlewares/checkUsernameAvailability.middleware";

const usersRoutes = Router();

usersRoutes.post("", checkUsernameAvailability, createUserController);
usersRoutes.get("", authTokenMiddleware, listUsersController);
usersRoutes.delete(
  "/:userId",
  authTokenMiddleware,
  checkOwnerMiddleware,
  deleteUserController
);

export default usersRoutes;
