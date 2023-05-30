import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 15px;
  height: auto;
  width: 450px;
  color: var(--color-gray);
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-2);
  background-color: var(--color-secondary);
  gap: 20px;
  label {
    color: var(--color-white);
  }
  animation: animateModal 0.4s;

  @keyframes animateModal {
    0% {
      transform: translateY(-10%);
      opacity: 0;
    }
    100% {
      transform: translateY();
      opacity: 1;
    }
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 25px;
      color: var(--color-white);
    }
  }

  .containerButton {
    display: flex;
    justify-content: space-between;
  }

  .errorMessage {
    background-color: var(--color-danger);
    font-size: 12px;
    padding: 1px;
    width: max-content;
    padding: -10;
  }
`;
