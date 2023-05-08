import styled from "styled-components";

export const HeaderMain = styled.header`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 250px;

  width: 100%;
  height: 120px;
  border-bottom: 1px solid var(--gray-2);
  margin: 0;
  > span {
    font-size: var(--font-headline);
    color: var(--gray-1);
  }
  @media (max-width: 800px) {
    padding: 0 25px;
  }
`;

export const BodyMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 250px;

  width: 100%;
  @media (max-width: 800px) {
    padding: 0 25px;
  }
`;

export const HeaderBody = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

export const MainList = styled.ul`
  background-color: var(--gray-3);
  border-radius: 8px;

  min-height: 50px;
  max-height: 500px;
  overflow-y: scroll;
  padding: 15px;
`;

export const TechItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  height: 50px;
  background-color: var(--gray-4);
  border-radius: 8px;
  padding: 5px 15px;
  transition: ease-in 0.2s;

  > p {
    font-size: var(--font-title);
    font-weight: var(--font-weight-2);
  }

  > div {
    display: flex;
    align-items: center;
    gap: 15px;

    > span {
      font-size: var(--font-headline);
      font-weight: var(--font-weight-2);
      color: var(--gray-1);
    }
  }
  &:hover {
    background-color: var(--gray-2);
  }
`;
