import { Button } from "../../components/button";
import { List } from "../../components/listContacts";
import { Profile } from "../../components/profile";
import {
  StyledContainerList,
  StyledContainerProfile,
  StyledMainDashBoard,
} from "./style";

export const DashBoard = ({ navigate }: any) => {
  return (
    <StyledMainDashBoard>
      <section>
        <header>
          <h1>Contatos</h1>
          <Button buttonVariation={"addContact"} type={"submit"}>
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
