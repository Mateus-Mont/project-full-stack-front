import { useContext } from "react";
import { Button } from "../../../components/button";
import { Form } from "../../../components/form";
import { MainModal } from "../../../components/mainModal";
import { ModalContext } from "../../../contexts/modais";
import { UserContext } from "../../../contexts/user";

export const DeleteProfileModal = () => {
  const { setModalDeleteProfile } = useContext(ModalContext);
  const { submitDeleteProfile } = useContext(UserContext);

  return (
    <MainModal>
      <Form>
        <h2>Você quer realmente excluir sua conta?</h2>
        <div className="containerButton">
          <Button
            buttonVariation={"buttonCancelDelete"}
            type={"button"}
            onClick={() => setModalDeleteProfile(false)}
          >
            Cancelar
          </Button>
          <Button
            buttonVariation={"buttonDanger"}
            type={"button"}
            onClick={() => submitDeleteProfile()}
          >
            Excluir
          </Button>
        </div>
      </Form>
    </MainModal>
  );
};
