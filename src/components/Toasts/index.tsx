import { toast } from "react-toastify";

export const toastError = () => {
  toast.error("Algo deu errado, tente novamente");
};

export const toastSucess = () => {
  toast.success("Usuário criado com sucesso");
};

export const toastLogin = () => {
  toast.success("Login realizado com sucesso");
};

export const toastNewTech = () => {
  toast.success("Tecnologia cadastrada");
};

export const toastDeleteTech = () => {
  toast.info("Tecnologia apagada");
};
