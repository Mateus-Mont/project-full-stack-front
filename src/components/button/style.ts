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
    }
  }}
`;
