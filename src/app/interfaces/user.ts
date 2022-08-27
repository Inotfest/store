export interface User {
  email: string;
  username: string;
  password: string;
}

export interface TokenKey {
  accessToken: string;
  user: User;
}

export interface TokenDate {
  token: string;
  date: Date;
  username: string;
}
