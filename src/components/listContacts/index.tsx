import { useContext, useEffect } from "react";
import { ModalContext } from "../../contexts/modais";
import { Button } from "../button";
import { StyledListContacts, StyledTitleMessage } from "./style";
import { UserContext } from "../../contexts/user";
import moment from "moment";
import { iUserState } from "../../contexts/user/types";
import { AxiosError } from "axios";
import { api } from "../../services";

export const List = () => {
  const { modalEditContact, modalDeleteContact } = useContext(ModalContext);
  const { userData, setLoading, loading, setUserData } =
    useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
      const id = JSON.parse(localStorage.getItem("@USERID") || "");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await api.get<iUserState>(`/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
      } catch (error) {
        const currentError = error as AxiosError;
        console.log(currentError.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userData, setLoading, loading, setUserData]);

  if (loading) {
    return null;
  }

  return (
    <>
      {userData?.contacts.length === 0 ? (
        <StyledTitleMessage>
          Você não possui nenhum contato no momento...
        </StyledTitleMessage>
      ) : (
        userData?.contacts.map((contact, index) => (
          <StyledListContacts key={index}>
            <p>Nome: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Celular: {contact.tel}</p>
            <p>
              Registrado em:{" "}
              {moment(contact.created_at).format("DD/MM/YYYY")}
            </p>
            <Button
              buttonVariation={"editContact"}
              type={"button"}
              onClick={() => modalEditContact()}
            >
              Editar contato
            </Button>
            <Button
              buttonVariation={"deleteContact"}
              type={"button"}
              onClick={() => modalDeleteContact()}
            >
              Excluir contato
            </Button>
          </StyledListContacts>
        ))
      )}
    </>
  );
};
