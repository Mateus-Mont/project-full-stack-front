import { useContext } from "react";
import { Button } from "../../../components/button";
import { Form } from "../../../components/form";
import { MainModal } from "../../../components/mainModal";
import { ModalContext } from "../../../contexts/modais";

export const DeleteModalContact = () => {
  const { setModalDeleteContact } = useContext(ModalContext);

  return (
    <MainModal>
      <Form>
        <h2>Você quer realmente excluir esse contato?</h2>
        <div className="containerButton">
          <Button
            buttonVariation={"buttonCancelDelete"}
            type={"button"}
            onClick={() => setModalDeleteContact(false)}
          >
            Cancelar
          </Button>
          <Button buttonVariation={"buttonDanger"} type={"submit"}>
            Excluir
          </Button>
        </div>
      </Form>
    </MainModal>
  );
};
