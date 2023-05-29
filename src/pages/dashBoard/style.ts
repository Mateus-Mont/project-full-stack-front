import styled from "styled-components";

export const StyledMainDashBoard = styled.main`
  background-color: var(--color-primary);
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100vw;
  max-height: 100%;
  height: 100vh;
  display: flex;
  gap: 30px;
  justify-content: center;

  section {
    width: 60%;
    background-color: var(--color-white);
    height: 100%;
    background-color: var(--color-secondary);
    border-radius: var(--radius-2);
    padding-right: 30px;

    header {
      padding: 30px;
      display: flex;
      justify-content: space-between;
      h1 {
        color: var(--color-white);
      }
    }
  }
`;

export const StyledContainerList = styled.ul`
  height: 500px;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-primary);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary);
    border-radius: 20px;
    border: 3px solid var(--color-primary);
  }
`;

export const StyledContainerProfile = styled.div`
  width: 20%;
  height: 360px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  color: var(--color-gray);
  background-color: var(--color-secondary);
  border-radius: var(--radius-2);
`;
