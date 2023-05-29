import { useContext } from "react";
import { Button } from "../../../components/button";
import { Form } from "../../../components/form";
import { Input } from "../../../components/input";
import { MainModal } from "../../../components/mainModal";
import { ModalContext } from "../../../contexts/modais";

export const UpdateContactModal = () => {
  const { setModalEditContact } = useContext(ModalContext);

  return (
    <MainModal>
      <Form>
        <header>
          <h3>Atualizar contato</h3>
          <Button
            buttonVariation="closeModal"
            type={"button"}
            onClick={() => setModalEditContact(false)}
          >
            X
          </Button>
        </header>
        <Input
          placeholder={"Digite o nome do contato..."}
          label={"Nome completo"}
          type={"text"}
        />
        <Input
          placeholder={"Digite o email do contato..."}
          label={"Email"}
          type={"email"}
        />
        <Input
          placeholder={"Digite o numero do contato..."}
          label={"Telefone"}
          type={"number"}
        />
        <Button
          buttonVariation={"closeModalHigthButton"}
          type={"button"}
          onClick={() => setModalEditContact(false)}
        >
          Cancelar
        </Button>
        <Button buttonVariation={"createContact"} type={"button"}>
          Atualizar
        </Button>
      </Form>
    </MainModal>
  );
};
