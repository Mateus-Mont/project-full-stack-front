import { StyledButton } from "./style";

interface iButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  buttonVariation?: string;
  id?: any;
}

export const Button = ({
  children,
  buttonVariation,
  onClick,
  type,
}: iButtonProps) => {
  return (
    <StyledButton
      type={type}
      buttonVariation={buttonVariation}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
