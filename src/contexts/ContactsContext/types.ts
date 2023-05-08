import React, { Dispatch } from "react";
import { iContacts } from "../UserContext/types";

export interface iContactsProviderProps {
    children: React.ReactNode;
}

export interface iNewTechFormData {
    title: string;
    status: string;
}

export interface iDeleteTechData {
    id: string;
}

export interface iContactsContext {
    NewTech: (data: iNewTechFormData) => void;
    DeleteTech: (data: iDeleteTechData) => void;
    contacts: iContacts[];
    setContacts: Dispatch<React.SetStateAction<iContacts[]>>;
    modal: boolean;
    setModal: Dispatch<React.SetStateAction<boolean>>;
}
