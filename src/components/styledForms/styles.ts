import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  > h1 {
    color: var(--color-primary);
  }
`;

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 370px;
  height: 500px;
  height: fit-content;
  padding: 1rem 0 1rem 0;

  @media (max-width: 375px) {
    width: 300px;
    height: fit-content;
    /* overflow-y: scroll; */
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-color: var(--gray-3);
  border-radius: 8px;
  padding: 2rem 0 2rem 0;

  gap: 1rem;

  height: 100%;
  width: 100%;

  > span {
    color: var(--gray-1);
    font-size: var(--font-headline);
  }

  > div > input {
    background-color: var(--gray-2);
    height: 48px;
    border-radius: 4px;
    border: none;
    padding: 10px;
    color: var(--gray-0);
  }

  input:focus {
    border: 1px solid var(--gray-0);
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 90%;
  }

  &:-webkit-autofill,
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    transition-delay: 36000s;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;

  > span {
    color: var(--gray-1);
  }
`;

export const Label = styled.label`
  font-size: var(--font-headline);
  color: var(--gray-0);
`;

export const StyledSelect = styled.select`
  background-color: var(--gray-2);
  color: var(--gray-1);
  height: 48px;
  width: 100%;
  border-radius: 4px;
  border: none;
  padding: 10px;

  option {
    color: var(--gray-0);
    border: 1px solid var(--gray-2);
  }

  select {
    border: 1px solid var(--gray-2);
    color: var(--gray-1);
  }
`;
