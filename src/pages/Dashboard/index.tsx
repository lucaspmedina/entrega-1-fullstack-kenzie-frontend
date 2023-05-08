import { useContext } from "react";
import { GoPlus } from "react-icons/go";
import { AddModal } from "../../components/AddModal/AddModal";
import { BtnLogout } from "../../components/Buttons/styles";
import { ContactsContext } from "../../contexts/ContactsContext/ContactsContext";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { Nav } from "./Header";
import { BodyMain, HeaderBody, HeaderMain } from "./styles";
import { UserTechList } from "./techList";

export const Dashboard = () => {
    const { user } = useContext(UserContext);
    const { setModal } = useContext(ContactsContext);

    return (
        <>
            {user ? (
                <>
                    <AddModal />
                    <Nav />
                    <HeaderMain>
                        <h2>{`Olá, ${user.name}`}</h2>
                    </HeaderMain>

                    <BodyMain>
                        <HeaderBody>
                            <h3>Contatos</h3>
                            <BtnLogout onClick={() => setModal(true)}>
                                <GoPlus />
                            </BtnLogout>
                        </HeaderBody>
                        <UserTechList />
                    </BodyMain>
                </>
            ) : (
                <>
                    <h1>ALOU</h1> {/* <Navigate to="/" replace /> */}
                </>
            )}
        </>
    );
};
