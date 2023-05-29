import { StyledContainerButtonProfile } from "./style";
import { Button } from "../button";
import { StyledContainProfile } from "./style";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modais";

export const Profile = () => {
  const { modalEditProfile, modalDeleteProfile } = useContext(ModalContext);

  return (
    <StyledContainProfile>
      <p>Nome: Mateus Monteiro</p>
      <p>Mateus@gmail.com</p>
      <p>Contato: 999903859</p>
      <p>Criado em:</p>
      <StyledContainerButtonProfile>
        <div>
          <Button
            buttonVariation={"editProfile"}
            type={"button"}
            onClick={() => modalEditProfile()}
          >
            Editar perfil
          </Button>
        </div>
        <Button buttonVariation={"logoutProfile"} type={"button" } >
          Deslogar
        </Button>
        <Button
          buttonVariation={"deleteProfile"}
          type={"button"}
          onClick={() => modalDeleteProfile()}
        >
          Excluir perfil
        </Button>
      </StyledContainerButtonProfile>
    </StyledContainProfile>
  );
};
