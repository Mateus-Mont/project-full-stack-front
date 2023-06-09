import { useState, createContext } from "react";
import { iModalProps, iModalProviderProps } from "./types";
import { iContactsUser } from "../user/types";

export const ModalContext = createContext({} as iModalProps);

export const ModalProvider = ({ children }: iModalProviderProps) => {
  const [openModalCreateContact, setModalCreateContact] = useState(false);
  const [openModalEditContact, setModalEditContact] = useState(false);
  const [openModalDeleteContact, setModalDeleteContact] = useState(false);

  const [openModalEditProfile, setModalEditProfile] = useState(false);
  const [openModalDeleteProfile, setModalDeleteProfile] = useState(false);

  const [contacts, setContacts] = useState<iContactsUser>();
  const [idDeleteContact, setIdContact] = useState("");

  const modalCreateContact = () => {
    return setModalCreateContact(true);
  };
  const modalEditContact = (contact: iContactsUser) => {
    setContacts(contact);
    return setModalEditContact(true);
  };

  const modalEditProfile = () => {
    return setModalEditProfile(true);
  };

  const modalDeleteContact = (contact: string) => {
    setIdContact(contact);
    return setModalDeleteContact(true);
  };

  const modalDeleteProfile = () => {
    return setModalDeleteProfile(true);
  };
  return (
    <ModalContext.Provider
      value={{
        modalCreateContact,
        openModalCreateContact,
        setModalCreateContact,

        openModalEditContact,
        modalEditContact,
        setModalEditContact,

        openModalEditProfile,
        modalEditProfile,
        setModalEditProfile,

        openModalDeleteContact,
        modalDeleteContact,
        setModalDeleteContact,

        openModalDeleteProfile,
        modalDeleteProfile,
        setModalDeleteProfile,

        contacts,

        idDeleteContact
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
