import * as yup from "yup";

export const phoneNumValidation = /\([1-9]{2}9[1-9]\d{4}-\d{4}\)/;

export const registerSchema = yup.object().shape({
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Ao menos uma letra maiúscula")
    .matches(/[a-z]/, "Ao menos uma letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter ao menos um caracter especial")
    .matches(/.{8,}/, "No mínimo 8 dígitos")
    .required("Senha obrigatória"),
  checkPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Cheque sua senha, devem ser iguais"),
  name: yup.string().required("Nome é obrigatório"),
  phone: yup.string().required("Contato é obrigatório"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export const modalSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  phone: yup.string().required("Contato é obrigatório"),
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  
});
