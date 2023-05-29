import styled from "styled-components";

export const StyledMainModal = styled.main`
  background-color: red;
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  background-color: var(--color-background-modal);
  display: flex;
  align-items: center;
  
  justify-content: center;

  form {
    
    background-color: var(--color-primary);
    header {
      display: flex;
      justify-content: space-between;
    }
  }
`;
