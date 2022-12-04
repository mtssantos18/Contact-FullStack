export interface IUserRequest {
  fullName: string;
  username: string;
  password: string;
  emailsUser: string[];
  phonesUser: string[];
}

export interface IUserLogin {
  username: string;
  password: string;
}
