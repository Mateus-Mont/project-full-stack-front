import { useContext } from "react";
import { Button } from "../../../components/button";
import { Form } from "../../../components/form";
import { Input } from "../../../components/input";
import { MainModal } from "../../../components/mainModal";
import { ModalContext } from "../../../contexts/modais";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iFormRegisterContact } from "../../../contexts/user/types";
import { schemaContact } from "../../../schemas/addContactSchema";
import { UserContext } from "../../../contexts/user";

export const AddContactModal = () => {
  const { setModalCreateContact } = useContext(ModalContext);
  const { submitContact } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormRegisterContact>({
    resolver: yupResolver(schemaContact),
  });

  return (
    <MainModal>
      <Form noValidate={false} onSubmit={handleSubmit(submitContact)}>
        <header>
          <h3>Cadastrar contato</h3>
          <Button
            buttonVariation="closeModal"
            type={"button"}
            onClick={() => setModalCreateContact(false)}
          >
            X
          </Button>
        </header>
        <Input
          placeholder={"Digite o nome do contato..."}
          label={"Nome completo"}
          type={"text"}
          register={register("name")}
        />
        {errors.name?.message && (
          <span className="errorMessage">{errors.name.message}</span>
        )}
        <Input
          placeholder={"Digite o email do contato..."}
          label={"Email"}
          type={"email"}
          register={register("email")}
        />
        {errors.email?.message && (
          <span className="errorMessage">{errors.email.message}</span>
        )}
        <Input
          placeholder={"Digite o numero do contato..."}
          label={"Telefone"}
          type={"number"}
          register={register("tel")}
        />
        {errors.tel?.message && (
          <span className="errorMessage">{errors.tel.message}</span>
        )}
        <Button
          buttonVariation={"closeModalHigthButton"}
          type={"button"}
          onClick={() => setModalCreateContact(false)}
        >
          Cancelar
        </Button>
        <Button buttonVariation={"createContact"} type={"submit"}>
          Cadastrar
        </Button>
      </Form>
    </MainModal>
  );
};
