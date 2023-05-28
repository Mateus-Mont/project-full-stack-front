import { ChangeEvent } from "react";
import { StyledInput } from "./style";

interface iInputProps {
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  hidden?: boolean;
  type: string;
}

export const Input = ({ placeholder, label, hidden, type }: iInputProps) => {
  return (
    <StyledInput placeholder={placeholder}>
      <label hidden={hidden}>{label}</label>
      <input placeholder={placeholder} type={type} />
    </StyledInput>
  );
};
