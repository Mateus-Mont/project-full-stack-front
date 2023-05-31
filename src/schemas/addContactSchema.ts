import * as yup from "yup";

export const schemaContact = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(3, "No minímo 3 caraters"),
  email: yup.string().required("Email  obrigatório").email("Email inválido"),
  tel: yup
    .string()
    .required("Numero obrigatório")
    .min(8, "Número inválido")
    .max(9, "Número inválido"),
});
