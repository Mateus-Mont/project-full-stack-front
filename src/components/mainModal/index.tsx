import { StyledMainModal } from "./style";

interface iMainModalProps {
  children?: React.ReactNode;
}

export const MainModal = ({ children }: iMainModalProps) => {
  return <StyledMainModal>{children}</StyledMainModal>;
};
