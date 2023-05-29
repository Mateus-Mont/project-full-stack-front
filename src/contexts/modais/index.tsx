import { useState, createContext } from "react";
import { iCreateContactProps, iModalProviderProps } from "./types";

type NewType = iCreateContactProps;

export const ModalContext = createContext({} as NewType);

export const ModalProvider = ({ children }: iModalProviderProps) => {
  const [openModalCreateContact, setModalCreateContact] = useState(false);
  const [openModalEditContact, setModalEditContact] = useState(false);
  const [openModalDeleteContact, setModalDeleteContact] = useState(false);

  const [openModalEditProfile, setModalEditProfile] = useState(false);
  const [openModalDeleteProfile, setModalDeleteProfile] = useState(false);

  //   const { openModalLogout, setModalLogout } = useState(false);

  const modalCreateContact = () => {
    return setModalCreateContact(true);
  };
  const modalEditContact = () => {
    return setModalEditContact(true);
  };

  const modalEditProfile = () => {
    return setModalEditProfile(true);
  };

  const modalDeleteContact = () => {
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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
