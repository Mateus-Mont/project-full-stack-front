import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Main } from "../../components/main";
import { StyledContainerButton } from "./style";

export const Login = () => {
  return (
    <Main>
      <Form>
        <header>
          <h3>Login</h3>
        </header>
        <Input label="Email" placeholder={"Digite seu email..."} type={"email"} />
        <Input label={"Password"} placeholder={"Digite sua senha..."} type={"password"} />
        <StyledContainerButton>
          <Button buttonVariation={"Login"} type={"submit"}>
            Login
          </Button>
          <span>
            Não possui uma conta? <a href="/register">registrar-se</a>
          </span>
        </StyledContainerButton>
      </Form>
    </Main>
  );
};
