import { StyledMain } from "./style";

interface iMainProps {
  children?: React.ReactNode;
}

export const Main = ({ children }: iMainProps) => {
  return <StyledMain>{children}</StyledMain>;
};
