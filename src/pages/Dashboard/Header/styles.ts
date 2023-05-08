import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 250px;

  width: 100%;
  
  height: 70px;
  border-bottom: 1px solid var(--gray-2);
  margin: 0;
  > h1 {
    color: var(--color-primary);
  }
  @media (max-width: 800px) {
    padding: 0 25px;   
  }
`;
