import React, { SetStateAction } from "react";
import { iContactsUser } from "../user/types";

export interface iModalProps {
  openModalCreateContact: boolean;
  setModalCreateContact: React.Dispatch<SetStateAction<boolean>>;
  modalCreateContact: () => void;

  openModalEditContact: boolean;
  modalEditContact: (contact: iContactsUser) => void;
  contacts: iContactsUser | undefined;
  setModalEditContact: React.Dispatch<SetStateAction<boolean>>;

  openModalEditProfile: boolean;
  modalEditProfile: () => void;
  setModalEditProfile: React.Dispatch<SetStateAction<boolean>>;

  openModalDeleteContact: boolean;
  modalDeleteContact: () => void;
  setModalDeleteContact: React.Dispatch<SetStateAction<boolean>>;

  openModalDeleteProfile: boolean;
  modalDeleteProfile: () => void;
  setModalDeleteProfile: React.Dispatch<SetStateAction<boolean>>;
}

export interface iModalProviderProps {
  children: React.ReactNode;
}
