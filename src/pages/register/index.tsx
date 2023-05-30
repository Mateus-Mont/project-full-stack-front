import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Main } from "../../components/main";
import { StyledContainerButton } from "../login/style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iFormRegisterUser } from "../../contexts/user/types";
import { registerUserSchema } from "./formSchema";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { ToastContainer } from "react-toastify";

export const Register = ({ navigate }: any) => {
  const { submitUserRegister, emailExists, setEmailExists } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterUser>({
    resolver: yupResolver(registerUserSchema),
  });

  return (
    <Main>
      <ToastContainer />
      <Form noValidate={true} onSubmit={handleSubmit(submitUserRegister)}>
        <header>
          <h3>Registrar-se</h3>
        </header>
        <Input
          label="Nome completo"
          placeholder={"Digite seu nome completo..."}
          type={"text"}
          register={register("name")}
        />
        {errors.name?.message && (
          <span className="errorMessage">{errors.name.message}</span>
        )}

        <Input
          label="Email"
          placeholder={"Digite seu email..."}
          type={"email"}
          register={register("email")}
          onChange={() => setEmailExists("")}
        />
        {errors.email?.message && (
          <span className="errorMessage">{errors.email.message}</span>
        )}
        {emailExists && <span className="errorMessage">{emailExists}</span>}

        <Input
          label={"Telefone de contato"}
          placeholder={"Digite seu telefone..."}
          type={"number"}
          register={register("tel")}
        />
        {errors.tel?.message && (
          <span className="errorMessage">{errors.tel.message}</span>
        )}

        <Input
          label={"Password"}
          placeholder={"Digite sua senha..."}
          type={"password"}
          register={register("password")}
        />
        {errors.password?.message && (
          <span className="errorMessage">{errors.password.message}</span>
        )}

        <Input
          label={"Confirmar senha"}
          placeholder={"Digite sua senha..."}
          type={"password"}
          register={register("confirm_password")}
        />
        {errors.confirm_password?.message && (
          <span className="errorMessage">
            {errors.confirm_password.message}
          </span>
        )}

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
