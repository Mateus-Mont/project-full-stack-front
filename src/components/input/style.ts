import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  height: 100%;

  input {
    width: 100%;
    height: 35px;
    border-radius: var(--radius-2);
    padding-left: 5px;
    border: none;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
