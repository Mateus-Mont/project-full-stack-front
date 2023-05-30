import React, { SetStateAction } from "react";

export interface iUserProviderValue {
  submitUserRegister: (data: iFormRegisterUser) => void;

  submitLogin: (data: iFormLogin) => void;

  emailExists: string;
  setEmailExists: React.Dispatch<SetStateAction<string>>;

  notAuthorized: string;
  setNotAuthorized: React.Dispatch<SetStateAction<string>>;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iFormRegisterUser {
  name: string;
  email: string;
  password: string;
  tel: string;
  confirm_password?: string;
}

export interface iFormLogin {
  email: string;
  password: string;
}
