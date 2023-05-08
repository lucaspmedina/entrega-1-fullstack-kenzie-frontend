import { AxiosError } from "axios";
import { createContext, useState } from "react";
import {
    toastDeleteTech,
    toastError,
    toastNewTech,
} from "../../components/Toasts/index";
import api from "../../services";
import { iApiError, iContacts } from "../UserContext/types";
import {
    iContactsContext,
    iContactsProviderProps,
    iDeleteTechData,
    iNewTechFormData,
} from "./types";

export const ContactsContext = createContext({} as iContactsContext);

export const ContactsContextProvider = ({
    children,
}: iContactsProviderProps) => {
    const token = localStorage.getItem("kenzieHubAuthToken");

    const [contacts, setContacts] = useState([] as iContacts[]);

    const [modal, setModal] = useState(false);

    async function NewContact(data: iNewTechFormData) {
        try {
            const response = await api.post<iContacts>("/user/techs", data);
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            setContacts([...contacts, response.data]);
            toastNewTech();
        } catch (error) {
            const requestError = error as AxiosError<iApiError>;
            console.error(requestError.response?.data.message);
            toastError();
        }
    }

    async function DeleteTech(clickedItem: iDeleteTechData) {
        try {
            const newTechList = contacts.filter(
                (el) => el.id !== clickedItem.id
            );
            await api.delete(`/contacts/${clickedItem.id}`);
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            setContacts(newTechList);
            toastDeleteTech();
        } catch (error) {
            const requestError = error as AxiosError<iApiError>;
            console.error(requestError.response?.data.message);

            console.error(error);
            toastError();
        }
    }

    return (
        <ContactsContext.Provider
            value={{
                NewContact,
                DeleteTech,
                contacts,
                setContacts,
                modal,
                setModal,
            }}
        >
            {children}
        </ContactsContext.Provider>
    );
};
