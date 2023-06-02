import { useContext } from "react";
import { Button } from "../../../components/button";
import { Form } from "../../../components/form";
import { Input } from "../../../components/input";
import { MainModal } from "../../../components/mainModal";
import { ModalContext } from "../../../contexts/modais";
import { UserContext } from "../../../contexts/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { updateUserSchema } from "../../../schemas/updateUserSchema";
import { iFormRegisterUser } from "../../../contexts/user/types";

export const UpdateProfile = () => {
  const { setModalEditProfile } = useContext(ModalContext);
  const {
    userData,
    submitUpdateUser,
    setUpdateEmailExists,
    updateEmailExists,
  } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormRegisterUser>({
    mode: "onBlur",
    resolver: yupResolver(updateUserSchema),
  });

  return (
    <MainModal>
      <Form noValidate={true} onSubmit={handleSubmit(submitUpdateUser)}>
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
          defaultValue={userData?.name}
          register={register("name")}
        />
        {errors.name?.message && (
          <span className="errorMessage">{errors.name.message}</span>
        )}
        <Input
          placeholder={"Digite seu email..."}
          label={"Email"}
          type={"email"}
          defaultValue={userData?.email}
          register={register("email")}
          onChange={() => setUpdateEmailExists("")}
        />
        {errors.email?.message && (
          <span className="errorMessage">{errors.email.message}</span>
        )}
        {updateEmailExists && (
          <span className="errorMessage">{updateEmailExists}</span>
        )}
        <Input
          placeholder={"Digite seu numero..."}
          label={"Telefone"}
          type={"number"}
          defaultValue={userData?.tel}
          register={register("tel")}
        />
        {errors.tel?.message && (
          <span className="errorMessage">{errors.tel.message}</span>
        )}
        <Input
          placeholder={"Digite sua senha..."}
          label={"Senha"}
          type={"password"}
          register={register("password")}
        />
        {errors.password?.message && (
          <span className="errorMessage">{errors.password.message}</span>
        )}
        <Button
          buttonVariation={"closeModalHigthButton"}
          type={"button"}
          onClick={() => setModalEditProfile(false)}
        >
          Cancelar
        </Button>
        <Button buttonVariation={"createContact"} type={"submit"}>
          Atualizar
        </Button>
      </Form>
    </MainModal>
  );
};
