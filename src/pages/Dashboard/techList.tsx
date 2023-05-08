import { useContext } from "react";
import { GoTrashcan } from "react-icons/go";
import { BtnTrash } from "../../components/Buttons/styles";
import { TechContext } from "../../contexts/ContactsContext/ContactsContext";
import { MainList, TechItem } from "./styles";

export const UserTechList = () => {
    const { techs, DeleteTech } = useContext(TechContext);

    return (
        <MainList>
            {techs.length > 0 ? (
                techs.map((el) => (
                    <TechItem key={el.id}>
                        <p>{el.title}</p>
                        <div>
                            <span>{el.status}</span>
                            <BtnTrash onClick={() => DeleteTech(el)}>
                                <GoTrashcan />
                            </BtnTrash>
                        </div>
                    </TechItem>
                ))
            ) : (
                <span>Adicione tecnologias</span>
            )}
        </MainList>
    );
};
