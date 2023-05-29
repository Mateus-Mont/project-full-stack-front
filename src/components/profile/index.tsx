import { StyledContainerButtonProfile } from "./style";
import { Button } from "../button";
import { StyledContainProfile } from "./style";

export const Profile = () => {
  return (
    <StyledContainProfile>
      <p>Nome: Mateus Monteiro</p>
      <p>Mateus@gmail.com</p>
      <p>Contato: 999903859</p>
      <p>Criado em:</p>
      <StyledContainerButtonProfile>
        <div>
          <Button buttonVariation={"editProfile"} type={"button"}>
            Editar perfil
          </Button>
        </div>
        <Button buttonVariation={"logoutProfile"} type={"button"}>
          Deslogar
        </Button>
        <Button buttonVariation={"deleteProfile"} type={"button"}>
          Excluir perfil
        </Button>
      </StyledContainerButtonProfile>
    </StyledContainProfile>
  );
};
