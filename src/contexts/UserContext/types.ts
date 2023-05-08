import { Dispatch } from "react";

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iContacts {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  contact: string;
  contacts: iContacts[];
}

// export interface iNewUserResponse {

// }

export interface iModalFormData {
  title: string;
  status: string;
}

export interface iLoginFormData {
  email: string;
  password: string;
}
export interface iLoginUserResponse {
  user: iUser;
  token: string;
}

export interface iRegisterFormData {
  email: string;
  password: string;
  checkPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export type iRegisterUserResponse = {
  user: iUser;
  token: string;
};
export interface iApiError {
  status?: string;
  message?: string | [];
}

export interface iUserContext {
  user: iUser | null;
  contacts: iContacts[] | [];
  Login: (data: iLoginFormData) => Promise<void>;
  RegisterNewUser: (data: iRegisterFormData) => Promise<void>;
  Logout: () => void;
  setContacts: Dispatch<React.SetStateAction<iContacts[]>>;
}
