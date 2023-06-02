import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
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
});
