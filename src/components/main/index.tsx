import { StyledMain } from "./style";

interface iMain {
  children?: React.ReactNode;
}

export const Main = ({ children }: iMain) => {
  return <StyledMain>{children}</StyledMain>;
};
