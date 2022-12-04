import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        phonesUser: string[];
        emailsUser: string[];
        idUser: string;
      };
    }
  }
}
