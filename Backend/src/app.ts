import express from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import contactsRoutes from "./routes/contacts.routes";
import sessionRoutes from "./routes/session.routes";
import usersRoutes from "./routes/users.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/login", sessionRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrorMiddleware);

export default app;
