import { StyledContainerButtonProfile } from "./style";
import { Button } from "../button";
import { StyledContainProfile } from "./style";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modais";
import { UserContext } from "../../contexts/user";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const Profile = () => {
  const { modalEditProfile, modalDeleteProfile } = useContext(ModalContext);
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  const exitAccount = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  return (
    <StyledContainProfile>
      <p>Nome: {userData?.name}</p>
      <p>Email: {userData?.email}</p>
      <p>tel: {userData?.tel}</p>
      <p>
        Criado em: {moment(userData?.created_at).format("DD/MM/YYYY HH:mm:ss")}
      </p>
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
        <Button
          buttonVariation={"logoutProfile"}
          type={"button"}
          onClick={() => exitAccount()}
        >
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
