import { useContext } from "react";
import { Button } from "../../../components/button";
import { Form } from "../../../components/form";
import { Input } from "../../../components/input";
import { MainModal } from "../../../components/mainModal";
import { ModalContext } from "../../../contexts/modais";

export const UpdateProfile = () => {
  const { setModalEditProfile } = useContext(ModalContext);

  return (
    <MainModal>
      <Form>
        <header>
          <h3>Atualizar Perfil</h3>
          <Button
            buttonVariation="closeModal"
            type={"button"}
            onClick={() => setModalEditProfile(false)}
          >
            X
          </Button>
        </header>
        <Input
          placeholder={"Digite o seu  nome..."}
          label={"Nome completo"}
          type={"text"}
        />
        <Input
          placeholder={"Digite seu email..."}
          label={"Email"}
          type={"email"}
        />
        <Input
          placeholder={"Digite seu numero..."}
          label={"Telefone"}
          type={"number"}
        />
        <Button
          buttonVariation={"closeModalHigthButton"}
          type={"button"}
          onClick={() => setModalEditProfile(false)}
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
