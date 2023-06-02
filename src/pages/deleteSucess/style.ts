import styled from "styled-components";

export const StyledContainerDeleteSucess = styled.div`
  justify-content: center;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  .containerImg {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  img {
    width: 150px;
    height: 150px;
  }

  a {
    font-size: 15px;
    color: var(--color-gray);
    background-color: var(--color-secondary);
    padding: 10px;
    border-radius: var(--radius-1);
    text-decoration: none;

  }
`;
