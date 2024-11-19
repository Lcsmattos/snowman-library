import { InputHTMLAttributes, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  ErrorMessage,
  InputBox,
  InputContainer,
  InputContent,
  InputLabel,
} from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  passwordType?: boolean;
  control: Control<any, any>;
  name: string;
  errorMessage?: string;
};

export function Input({
  name,
  control,
  label,
  errorMessage,
  passwordType,
  ...rest
}: Props) {
  const [HidePassword, setHidePassword] = useState<boolean>(true);

  const togglePasswordVisibility = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputBox>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputContent
              name={name}
              value={value}
              onChange={onChange}
              type={passwordType && HidePassword ? "password" : "text"}
              {...rest}
            />
          )}
        />

        {passwordType ? (
          HidePassword ? (
            <Visibility onClick={togglePasswordVisibility} />
          ) : (
            <VisibilityOff onClick={togglePasswordVisibility} />
          )
        ) : null}
      </InputBox>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </InputContainer>
  );
}
