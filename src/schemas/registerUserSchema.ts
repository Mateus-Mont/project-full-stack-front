import * as yup from "yup";

export const registerUserSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  tel: yup
    .string()
    .required("Número obrigatório")
    .min(8, "Número inválido")
    .max(9, "Número inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
  confirm_password: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([yup.ref("password")], "As senhas não são idênticas"),
});
