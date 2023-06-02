import { ChangeEvent } from "react";
import { StyledInput } from "./style";
import { UseFormRegisterReturn } from "react-hook-form";

interface iInputProps {
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  hidden?: boolean;
  type: string;
  register?: UseFormRegisterReturn;
  defaultValue?: string | undefined;
}

export const Input = ({
  placeholder,
  label,
  hidden,
  type,
  register,
  onChange,
  defaultValue,
}: iInputProps) => {
  return (
    <StyledInput placeholder={placeholder}>
      <label hidden={hidden}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        {...register}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </StyledInput>
  );
};
