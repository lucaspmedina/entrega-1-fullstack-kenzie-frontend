import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastError, toastLogin, toastSucess } from "../../components/Toasts";
import api from "../../services/index";
import { ContactsContext } from "../ContactsContext/ContactsContext";
import {
    iApiError,
    iLoginFormData,
    iLoginUserResponse,
    iRegisterFormData,
    iRegisterUserResponse,
    iUser,
    iUserContext,
    iUserProviderProps,
} from "./types";

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const AuthProvider = ({ children }: iUserProviderProps) => {
    const [user, setUser] = useState<iUser | null>(null);
    // const [loading, setLoading] = useState(true);

    const { contacts, setContacts } = useContext(ContactsContext);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("kenzieHubAuthToken");
            if (token) {
                try {
                    api.defaults.headers.common.authorization = `Bearer ${token}`;

                    const { data } = await api.get<iUser>("/clients");
                    setUser(data);
                    setContacts(data.contacts);
                } catch (error) {
                    const requestError = error as AxiosError<iApiError>;
                    console.error(requestError.response?.data.message);
                    localStorage.removeItem("kenzieHubAuthToken");
                    localStorage.removeItem("kenzieHubUserId");
                    navigate("/");
                } /* finally {
          setLoading(false);
        } */
            }
        }
        loadUser();
    }, [navigate, setContacts]);

    const Logout = () => {
        localStorage.removeItem("kenzieHubAuthToken");
        localStorage.removeItem("kenzieHubUserId");
        navigate("/login");
        setUser(null);
    };

    async function RegisterNewUser(data: iRegisterFormData): Promise<void> {
        try {
            const response = await api.post<iRegisterUserResponse>(
                "/contacts",
                data
            );
            const { user: userResponse, token } = response.data;
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            if (response.status === 201) {
                setUser(userResponse);
                navigate("/contacts", { replace: true });
                toastSucess();
            }
        } catch (error) {
            const requestError = error as AxiosError<iApiError>;
            console.error(requestError.response?.data.message);
            toastError();
            localStorage.removeItem("kenzieHubAuthToken");
            localStorage.removeItem("kenzieHubUserId");
        }
    }

    async function Login(data: iLoginFormData): Promise<void> {
        try {
            const response = await api.post<iLoginUserResponse>(
                "/sessions",
                data
            );
            const { user: userResponse } = response.data;
            if (response.status === 200) {
                setUser(userResponse);
                localStorage.setItem("kenzieHubAuthToken", response.data.token);
                localStorage.setItem("kenzieHubUserId", response.data.user.id);
                navigate("/profile", { replace: true });
                toastLogin();
            }
        } catch (error) {
            const requestError = error as AxiosError<iApiError>;
            console.error(requestError.response?.data.message);
            localStorage.removeItem("kenzieHubAuthToken");
            localStorage.removeItem("kenzieHubUserId");
            navigate("/", { replace: true });
            toastError();
        } /* finally {
      setLoading(false);
    } */
    }

    return (
        <UserContext.Provider
            value={{
                Login,
                RegisterNewUser,
                Logout,
                user,
                contacts,
                setContacts,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
