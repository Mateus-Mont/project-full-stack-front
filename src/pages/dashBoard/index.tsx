import { useContext } from "react";
import { Button } from "../../components/button";
import { List } from "../../components/listContacts";
import { Profile } from "../../components/profile";
import { AddContactModal } from "./modais/addContact";
import {
  StyledContainerList,
  StyledContainerProfile,
  StyledMainDashBoard,
} from "./style";
import { ModalContext } from "../../contexts/modais";
import { UpdateContactModal } from "./modais/updateContact";
import { UpdateProfile } from "./modais/updateProfile";
import { DeleteModalContact } from "./modais/deleteContact";
import { DeleteProfileModal } from "./modais/deleteProfile";

export const DashBoard = ({ navigate }: any) => {
  const {
    modalCreateContact,
    openModalCreateContact,
    openModalEditContact,
    openModalEditProfile,
    openModalDeleteContact,
    openModalDeleteProfile,
  } = useContext(ModalContext);

  return (
    <StyledMainDashBoard>
      {openModalCreateContact && <AddContactModal />}
      {openModalEditContact && <UpdateContactModal />}
      {openModalEditProfile && <UpdateProfile />}
      {openModalDeleteContact && <DeleteModalContact />}
      {openModalDeleteProfile && <DeleteProfileModal />}
      <section>
        <header>
          <h1>Contatos</h1>
          <Button
            buttonVariation={"addContact"}
            type={"submit"}
            onClick={() => modalCreateContact()}
          >
            Adicionar contato
          </Button>
        </header>
        <StyledContainerList>
          <List />
          <List />
        </StyledContainerList>
      </section>
      <StyledContainerProfile>
        <h2>Perfil</h2>
        <Profile />
      </StyledContainerProfile>
    </StyledMainDashBoard>
  );
};
