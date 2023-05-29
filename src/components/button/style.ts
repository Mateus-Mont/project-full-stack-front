import styled, { css } from "styled-components";

export interface iStyledButtonProps {
  buttonVariation?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  ${({ buttonVariation }) => {
    switch (buttonVariation) {
      case "Login":
        return css`
        background-color: var(--color-primary);
        width: 100%;
        height: 35px;
        color: var(--color-white);
        font-size: 18px;
        border: none;
        border-radius: var(--radius-1);
        :hover{
            background-colo;
        }
        `;
      case "addContact":
        return css`
          background-color: var(--color-primary);
          color: var(--color-white);
          border-radius: var(--radius-1);
          padding: 10px;
          font-size: 15px;
          border: none;
        `;
      case "editContact":
        return css`
          background-color: var(--color-primary);
          color: var(--color-white);
          border-radius: var(--radius-1);
          padding: 5px;
          font-size: 15px;
          border: none;
        `;
      case "deleteContact":
        return css`
          background-color: var(--color-danger);
          color: var(--color-white);
          border-radius: var(--radius-1);
          padding: 5px;
          font-size: 15px;
          border: none;
          :hover {
            background-color: #a4161a;
          }
        `;
      case "editProfile":
        return css`
          background-color: var(--color-primary);
          width: 100%;
          color: var(--color-white);
          border-radius: var(--radius-1);
          padding: 5px;
          font-size: 15px;
          border: none;
        `;
      case "logoutProfile":
        return css`
          background-color: var(--color-primary);
          color: var(--color-white);
          border-radius: var(--radius-1);
          padding: 5px;
          font-size: 15px;
          border: none;
        `;

      case "deleteProfile":
        return css`
          background-color: var(--color-danger);
          color: var(--color-white);
          border-radius: var(--radius-1);
          width: 100%;
          padding: 5px;
          font-size: 15px;
          border: none;
          :hover {
            background-color: #a4161a;
          }
        `;
      case "closeModal":
        return css`
          font-size: 15px;
          color: var(--color-white);
          background-color: var(--color-primary);
          font-size: 20px;
          border: none;
        `;
      case "createContact":
        return css`
          font-size: 15px;
          color: var(--color-gray);
          background-color: var(--color-secondary);
          border-radius: var(--radius-1);
          padding: 5px;
          font-size: 20px;
          border: none;
        `;
      case "closeModalHigthButton":
        return css`
          font-size: 15px;
          border-radius: var(--radius-1);
          padding: 5px;
          font-size: 20px;
          border: none;
        `;
      case "buttonDanger":
        return css`
          color: var(--color-white);
          background-color: var(--color-danger);
          font-size: 15px;
          border-radius: var(--radius-1);
          width: 200px;
          font-size: 20px;
          border: none;
        `;
      case "buttonCancelDelete":
        return css`
          font-size: 15px;
          border-radius: var(--radius-1);
          width: 200px;
          font-size: 20px;
          border: none;
        `;
    }
  }}
`;
