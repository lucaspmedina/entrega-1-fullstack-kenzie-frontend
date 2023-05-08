// import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import {
    BtnDefault,
    StyledLinkRegister,
} from "../../components/Buttons/styles";
import { InputErrors } from "../../components/InputErrors";
import {
    Footer,
    FormLogin,
    Label,
    StyledLogin,
} from "../../components/styledForms/styles";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { iLoginFormData } from "../../contexts/UserContext/types";
import { loginSchema } from "../../validations/schemas";

export const Login = () => {
    const { Login, user } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iLoginFormData>({
        resolver: yupResolver(loginSchema),
    });

    return (
        <>
            {!user ? (
                <>
                    <h1>Kenzie Kontacts</h1>
                    <StyledLogin>
                        <FormLogin onSubmit={handleSubmit(Login)}>
                            <h3>Login</h3>
                            <div>
                                <Label>Email</Label>
                                <input
                                    type="text"
                                    placeholder="Digite aqui seu email"
                                    {...register("email")}
                                />
                                {errors?.email?.type && (
                                    <InputErrors
                                        message={errors.email?.message}
                                        status={undefined}
                                    />
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
                                    <InputErrors
                                        message={errors.password?.message}
                                        status={undefined}
                                    />
                                )}
                            </div>

                            <BtnDefault type="submit">Entrar</BtnDefault>
                            <Footer>
                                <span>Ainda não possui uma conta?</span>
                                <StyledLinkRegister to="/clients">
                                    Cadastre-se
                                </StyledLinkRegister>
                            </Footer>
                        </FormLogin>
                    </StyledLogin>
                </>
            ) : (
                <Navigate to="/contacts" replace />
            )}
        </>
    );
};
