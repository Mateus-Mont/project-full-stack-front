import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Main } from "../../components/main";
import { StyledContainerButton } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iFormLogin } from "../../contexts/user/types";
import { formSchema } from "../../schemas/loginSchema";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { ToastContainer } from "react-toastify";

export const Login = () => {
  const { submitLogin, notAuthorized, setNotAuthorized } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({
    mode: "onSubmit",
    resolver: yupResolver(formSchema),
  });

  return (
    <Main>
      <ToastContainer />
      <Form noValidate={true} onSubmit={handleSubmit(submitLogin)}>
        <header>
          <h3>Login</h3>
        </header>
        <Input
          label="Email"
          placeholder={"Digite seu email..."}
          type={"email"}
          register={register("email")}
        />

        {errors.email?.message && (
          <span className="errorMessage">{errors.email.message}</span>
        )}

        <Input
          label={"Password"}
          placeholder={"Digite sua senha..."}
          type={"password"}
          register={register("password")}
          onChange={() => setNotAuthorized("")}
        />
        {errors.password?.message && (
          <span className="errorMessage">{errors.password.message}</span>
        )}
        {notAuthorized && <span className="errorMessage">{notAuthorized}</span>}
        <StyledContainerButton>
          <Button buttonVariation={"Login"} type={"submit"}>
            Login
          </Button>
          <span>
            Não possui uma conta? <Link to={"/register"}>registrar-se</Link>
          </span>
        </StyledContainerButton>
      </Form>
    </Main>
  );
};
