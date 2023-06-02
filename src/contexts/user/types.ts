import React, { SetStateAction } from "react";

export interface iUserProviderValue {
  submitUserRegister: (data: iFormRegisterUser) => void;

  submitLogin: (data: iFormLogin) => void;

  emailExists: string;
  setEmailExists: React.Dispatch<SetStateAction<string>>;

  notAuthorized: string;
  setNotAuthorized: React.Dispatch<SetStateAction<string>>;

  userData: iUserState | null;
  setUserData: React.Dispatch<SetStateAction<iUserState | null>>;

  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;

  submitContact: (data: iFormRegisterContact) => void;

  submitUpdateUser: (data: iFormRegisterUser) => void;
  updateUser: (data: iFormRegisterUser) => void;

  updateEmailExists: string;
  setUpdateEmailExists: React.Dispatch<SetStateAction<string>>;

  submitDeleteProfile: () => void;

  submitUpdateContact: (data: iFormRegisterContact) => void;
  setIdContact: React.Dispatch<SetStateAction<string | undefined>>;
  idContact: string | undefined;

  submiteDeleteContact: () => void;
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

export interface iFormRegisterContact {
  name: string;
  email: string;
  tel: string;
}

export interface iFormLogin {
  email: string;
  password: string;
}

export interface iContactsUser {
  id: string;
  name: string;
  tel: string;
  userId: string;
  created_at: string;
  email: string;
}

export interface iUserState {
  map(
    arg0: (contact: any, index: any) => import("react/jsx-runtime").JSX.Element
  ): React.ReactNode;
  id: string;
  name: string;
  email: string;
  tel: string;
  created_at: string;
  contacts: iContactsUser[];
}
