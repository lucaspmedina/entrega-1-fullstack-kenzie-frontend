import { Link } from "react-router-dom";
import styled from "styled-components";

export const BtnDefault = styled.button`
  font-size: 16px;

  border-radius: 8px;
  padding: 0%;
  border: none;

  background-color: var(--color-primary);
  color: var(--gray-0);

  height: 40px;
  width: 330px;
  transition: ease-in 0.2s;
  @media (max-width: 375px) {
    width: 90%;
  }

  :hover {
    background-color: var(--color-primary-focus);
  }
`;

export const BtnLogout = styled.button`
  font-size: var(--font-headline);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 50px;
  border-radius: 8px;
  border: none;

  background-color: var(--gray-3);
  color: var(--gray-0);

  transition: ease-in 0.2s;

  :hover {
    background-color: var(--color-primary-focus);
  }
`;

export const StyledLink = styled(Link)`
  font-size: var(--font-headline);
  text-decoration: none;

  text-align: center;

  border-radius: 8px;
  padding: 10px 15px;
  border: none;

  background-color: var(--gray-3);
  color: var(--gray-0);

  transition: ease-in 0.2s;

  :hover {
    background-color: var(--color-primary-focus);
  }
`;

export const StyledLinkRegister = styled(Link)`
  font-size: var(--font-headline);
  text-decoration: none;
  text-align: center;
  display: block;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  border: none;

  background-color: var(--color-primary);
  color: var(--gray-0);

  transition: ease-in 0.2s;

  :hover {
    background-color: var(--color-primary-focus);
  }
`;

export const BtnTrash = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 8px;
  border: none;

  background-color: transparent;
  color: var(--gray-0);

  transition: ease-in 0.2s;

  :hover {
    background-color: var(--color-primary-focus);
  }
`;
