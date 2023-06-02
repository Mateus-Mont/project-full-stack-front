import { useContext, useState } from "react";
import { Button } from "../../../components/button";
import { Form } from "../../../components/form";
import { Input } from "../../../components/input";
import { MainModal } from "../../../components/mainModal";
import { ModalContext } from "../../../contexts/modais";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaContact } from "../../../schemas/addContactSchema";
import { UserContext } from "../../../contexts/user";
import { iFormRegisterContact } from "../../../contexts/user/types";

export const UpdateContactModal = () => {
  const { setModalEditContact, contacts } = useContext(ModalContext);
  const { submitUpdateContact, setIdContact } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormRegisterContact>({
    resolver: yupResolver(schemaContact),
  });

  const updateContact = (idContact: string | undefined) => {
    return setIdContact(idContact);
  };

  return (
    <MainModal>
      <Form noValidate={true} onSubmit={handleSubmit(submitUpdateContact)}>
        <header>
          <h3>Atualizar contato</h3>
          <Button
            buttonVariation="closeModal"
            type={"button"}
            onClick={() => setModalEditContact(false)}
          >
            X
          </Button>
        </header>
        <Input
          placeholder={"Digite o nome do contato..."}
          label={"Nome completo"}
          type={"text"}
          defaultValue={contacts?.name}
          register={register("name")}
        />
        {errors.name?.message && (
          <span className="errorMessage">{errors.name.message}</span>
        )}
        <Input
          placeholder={"Digite o email do contato..."}
          label={"Email"}
          type={"email"}
          defaultValue={contacts?.email}
          register={register("email")}
        />
        {errors.email?.message && (
          <span className="errorMessage">{errors.email.message}</span>
        )}
        <Input
          placeholder={"Digite o numero do contato..."}
          label={"Telefone"}
          type={"number"}
          defaultValue={contacts?.tel}
          register={register("tel")}
        />
        {errors.tel?.message && (
          <span className="errorMessage">{errors.tel.message}</span>
        )}
        <Button
          buttonVariation={"closeModalHigthButton"}
          type={"button"}
          onClick={() => setModalEditContact(false)}
        >
          Cancelar
        </Button>
        <Button
          buttonVariation={"createContact"}
          type={"submit"}
          onClick={() => updateContact(contacts?.id)}
        >
          Atualizar
        </Button>
      </Form>
    </MainModal>
  );
};
