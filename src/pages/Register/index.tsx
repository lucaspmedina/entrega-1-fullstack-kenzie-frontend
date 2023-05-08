import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { BtnDefault, StyledLink } from "../../components/Buttons/styles";
import { InputErrors } from "../../components/InputErrors";
import {
  FormLogin,
  Header,
  Label,
  StyledLogin,
  StyledSelect,
} from "../../components/styledForms/styles";
import { toastError } from "../../components/Toasts";
import { iRegisterFormData } from "../../contexts/UserContext/types";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { registerSchema } from "../../validations/schemas";

export const Register = () => {
  const { RegisterNewUser, user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <>
      {!user ? (
        <StyledLogin>
          <Header>
            <h1>Kenzie Hub</h1>
            <StyledLink to="/">Voltar</StyledLink>
          </Header>
          <FormLogin onSubmit={handleSubmit(RegisterNewUser, toastError)}>
            <h3>Crie sua conta</h3>
            <span>Rapido e grátis, vamos nessa</span>

            <div>
              <Label>Nome</Label>
              <input placeholder="Digite aqui seu nome" {...register("name")} />
              {errors?.name?.type && (
                <InputErrors message={errors.name?.message} />
              )}
            </div>

            <div>
              <Label>Email</Label>
              <input
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
              {errors?.email?.type && (
                <InputErrors message={errors.email?.message} />
              )}
            </div>

            <div>
              <Label>Senha</Label>
              <input
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              {errors?.password?.type && (
                <InputErrors message={errors.password?.message} />
              )}{" "}
            </div>
            <div>
              <Label>Confirmar Senha</Label>
              <input
                type="password"
                placeholder="Digite novamente sua senha"
                {...register("checkPassword")}
              />
              {errors?.checkPassword?.type && (
                <InputErrors message={errors.checkPassword?.message} />
              )}{" "}
            </div>

            <div>
              <Label>Bio</Label>
              <input placeholder="Fale sobre você" {...register("bio")} />
              {errors?.bio?.type && (
                <InputErrors message={errors.bio?.message} />
              )}{" "}
            </div>

            <div>
              <Label>Contato</Label>
              <input placeholder="Opção de contato" {...register("contact")} />
              {errors?.contact?.type && (
                <InputErrors message={errors.contact?.message} />
              )}{" "}
            </div>
            <div>
              <Label>Selecionar módulo</Label>
              <StyledSelect {...register("course_module")}>
                <option value="" hidden>
                  Selecione seu módulo
                </option>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro módulo (Introdução ao Frontend)
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo módulo (Frontend Avançado)
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro módulo (Introdução ao Backend)
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo (Backend Avançado)
                </option>
              </StyledSelect>
              {errors?.course_module?.type && (
                <InputErrors message={errors.course_module?.message} />
              )}
            </div>
            <BtnDefault type="submit">Cadastrar</BtnDefault>
          </FormLogin>
        </StyledLogin>
      ) : (
        <Navigate to="/profile" replace />
      )}
    </>
  );
};
