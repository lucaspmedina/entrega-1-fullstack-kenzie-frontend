import { useContext } from "react";
import { toast } from "react-toastify";
import { BtnLogout } from "../../../components/Buttons/styles";
import { UserContext } from "../../../contexts/UserContext/UserContext";
import { StyledNav } from "./styles";

export function Nav() {
  const { Logout } = useContext(UserContext);

  return (
    <StyledNav>
      <h1>Kenzie Hub</h1>
      <BtnLogout
        onClick={() => {
          Logout();
          toast.info("Logout realizado");
        }}
      >
        Sair
      </BtnLogout>
    </StyledNav>
  );
}
