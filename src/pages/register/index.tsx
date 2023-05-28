import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Main } from "../../components/main";
import { StyledContainerButton } from "../login/style";
import { Link } from "react-router-dom";

export const Register = ({ navigate }: any) => {
  return (
    <Main>
      <Form>
        <header>
          <h3>Registrar-se</h3>
        </header>
        <Input
          label="Nome completo"
          placeholder={"Digite seu nome completo..."}
          type={"text"}
        />
        <Input
          label="Email"
          placeholder={"Digite seu email..."}
          type={"email"}
        />
        <Input
          label={"Telefone de contato"}
          placeholder={"Digite seu telefone..."}
          type={"number"}
        />
        <Input
          label={"Password"}
          placeholder={"Digite sua senha..."}
          type={"password"}
        />
        <Input
          label={"Confirmar senha"}
          placeholder={"Digite sua senha..."}
          type={"password"}
        />
        <StyledContainerButton>
          <Button buttonVariation={"Login"} type={"submit"}>
            Registrar
          </Button>
          <span>
            Já possui uma conta? <Link to={"/"}>login</Link>
          </span>
        </StyledContainerButton>
      </Form>
    </Main>
  );
};
