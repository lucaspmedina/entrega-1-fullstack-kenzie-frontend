import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContactsContext } from "../../contexts/ContactsContext/ContactsContext";
import { iModalFormData } from "../../contexts/UserContext/types";
import { modalSchema } from "../../validations/schemas";
import { BtnDefault, BtnLogout } from "../Buttons/styles";
import { InputErrors } from "../InputErrors";
import { FormLogin, Label, StyledSelect } from "../styledForms/styles";
import {
    StyledModalBackground,
    StyledModalHeader,
    StyledModalMain,
} from "./style";

export const AddModal = () => {
    const { NewContact, modal, setModal } = useContext(ContactsContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iModalFormData>({
        resolver: yupResolver(modalSchema),
    });

    return modal ? (
        <StyledModalBackground>
            <StyledModalMain>
                <StyledModalHeader>
                    <h3>Cadastrar Tecnologia</h3>
                    <BtnLogout onClick={() => setModal(false)}>X</BtnLogout>
                </StyledModalHeader>
                <FormLogin>
                    <div>
                        <Label>Nome</Label>
                        <input
                            type="text"
                            placeholder="Digite aqui sua tecnologia"
                            {...register("title")}
                        />
                        {errors?.title?.type && (
                            <InputErrors
                                message={errors.title?.message}
                                status={undefined}
                            />
                        )}
                    </div>
                    <div>
                        <Label>Selecionar seu nível</Label>
                        <StyledSelect {...register("status")}>
                            <option value="" hidden>
                                Selecionar seu nível
                            </option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </StyledSelect>
                        {errors?.status?.type && (
                            <InputErrors
                                message={errors.status?.message}
                                status={undefined}
                            />
                        )}
                    </div>
                    <BtnDefault onClick={handleSubmit(NewContact)}>
                        Cadastrar
                    </BtnDefault>
                </FormLogin>
            </StyledModalMain>
        </StyledModalBackground>
    ) : (
        <></>
    );
};
