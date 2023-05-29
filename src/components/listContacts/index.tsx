import { useContext } from "react";
import { ModalContext } from "../../contexts/modais";
import { Button } from "../button";
import { StyledListContacts } from "./style";

export const List = () => {
  const { modalEditContact, modalDeleteContact } = useContext(ModalContext);
  return (
    <StyledListContacts>
      <p>Nome: Mateus Monteiro</p>
      <p>Email: Mateus@gmail.com</p>
      <p>Celular:999903859</p>
      <p>Registrado em: 2023-05-27</p>
      <Button
        buttonVariation={"editContact"}
        type={"button"}
        onClick={() => modalEditContact()}
      >
        Editar contato
      </Button>
      <Button
        buttonVariation={"deleteContact"}
        type={"button"}
        onClick={() => modalDeleteContact()}
      >
        Excluir contato
      </Button>
    </StyledListContacts>
  );
};
