import { Main } from "../../components/main";

import deleteSucess from "../../assets/delete_sucess.png";
import { StyledContainerDeleteSucess } from "./style";
import { Link } from "react-router-dom";

export const DeleteSucess = () => {
  return (
    <Main>
      <StyledContainerDeleteSucess>
        <div className="containerImg">
          <div>
            {" "}
            <img src={deleteSucess} alt="" />
          </div>
          <h1>Conta excluida com sucesso</h1>
        </div>
        <div>
          <Link to={"/"}>voltar</Link>
        </div>
      </StyledContainerDeleteSucess>
    </Main>
  );
};
