import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 10px;
  height: auto;
  width: 450px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-2);
  background-color: var(--color-secondary);
  gap: 20px;
  label {
    color: var(--color-white);
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
`;
