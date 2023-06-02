import { createContext, useContext, useState } from "react";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import {
  iFormLogin,
  iFormRegisterContact,
  iFormRegisterUser,
  iUserProviderProps,
  iUserProviderValue,
  iUserState,
} from "./types";
import jwtDecode from "jwt-decode";
import { ModalContext } from "../modais";

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const { setModalCreateContact, setModalEditProfile } =
    useContext(ModalContext);
  const [emailExists, setEmailExists] = useState("");
  const [updateEmailExists, setUpdateEmailExists] = useState("");
  const [notAuthorized, setNotAuthorized] = useState("");

  const [userData, setUserData] = useState<null | iUserState>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const createUser = async (formData: iFormRegisterUser) => {
    try {
      await api.post<iFormRegisterUser>("/users", formData);

      toast.success("Registro feito com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      const currentError = error as AxiosError;

      if (currentError.message === "Request failed with status code 409") {
        setNotAuthorized("Email já em uso");
      }
    }
  };

  const submitUserRegister = async (data: iFormRegisterUser) => {
    const { name, email, tel, password } = data;
    const newUser = {
      name: name,
      email: email,
      tel: tel,
      password: password,
    };

    createUser(newUser);
  };

  const loginUser = async (formData: iFormLogin) => {
    try {
      const response = await api.post("/login", formData);

      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));

      const decodedToken: { sub: string } = jwtDecode(response.data.token);
      const userId = decodedToken.sub;
      localStorage.setItem("@USERID", JSON.stringify(userId));

      setTimeout(() => {
        if (decodedToken && userId) {
          navigate("/dashboard");
        }
      }, 2000);

      toast.success("Tudo certo");
    } catch (error) {
      const currentError = error as AxiosError;
      if (currentError.message === "Request failed with status code 401") {
        setNotAuthorized("Email ou senha inválido");
      }
    }
  };

  const submitLogin = async (data: iFormLogin) => {
    const { email, password } = data;

    const login = {
      email: email,
      password: password,
    };
    loginUser(login);
  };

  const createContact = async (formData: iFormRegisterContact) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    try {
      toast.success("Contato criado com sucesso");
      setModalCreateContact(false);
      await api.post<iFormRegisterContact>("/contacts/", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      const currentError = error as AxiosError;
      console.log(currentError);
    }
  };

  const submitContact = (data: iFormRegisterContact) => {
    const { name, email, tel } = data;
    const newContact = {
      name: name,
      email: email,
      tel: tel,
    };

    createContact(newContact);
  };

  const updateUser = async (formData: iFormRegisterUser) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    const id = JSON.parse(localStorage.getItem("@USERID") || "");

    try {
      await api.patch(`/users/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setModalEditProfile(false);
      toast.success("Perfil editado com sucesso!");
    } catch (error) {
      const currentError = error as AxiosError;
      console.log(currentError.message);
      if (currentError.message === "Request failed with status code 409") {
        setUpdateEmailExists("Email em uso");
      }
    }
  };

  const submitUpdateUser = (data: iFormRegisterUser) => {
    const { name, email, tel, password } = data;
    const updatedUserData = {
      name: name,
      email: email,
      tel: tel,
      password: password,
    };

    updateUser(updatedUserData);
  };

  const submitDeleteProfile = async () => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    const id = JSON.parse(localStorage.getItem("@USERID") || "");
    try {
      await api.delete(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
    } catch (error) {}
  };
  return (
    <UserContext.Provider
      value={{
        submitUserRegister,

        emailExists,
        setEmailExists,

        notAuthorized,
        setNotAuthorized,

        submitLogin,

        userData,
        setUserData,
        loading,

        setLoading,

        submitContact,

        submitUpdateUser,
        updateUser,

        updateEmailExists,
        setUpdateEmailExists,

        submitDeleteProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
