import styled from "styled-components";

export const StyledModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  overflow: auto;
`;

export const StyledModalMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 90%;
  max-width: 370px;
  border-radius: 8px;
  border: 1px solid var(--gray-1);
  background-color: var(--gray-3);
`;

export const StyledModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px 8px 0 0;
  align-content: center;
  background-color: var(--gray-2);
`;

// export const StyledFormNewTech = styled.form``;
