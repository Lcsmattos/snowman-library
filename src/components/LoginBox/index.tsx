import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaLoginUser } from "../../utils/yupValidations/login";

import { Input } from "../Input";

import {
  Button,
  ButtonText,
  InputContainer,
  LoginButton,
  LoginContainer,
  StyledDivider,
  TitleText,
} from "./styles";

type LoginFormData = {
  email: string;
  password: string;
};

export function LoginBox() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<LoginFormData>(SchemaLoginUser),
  });

  return (
    <LoginContainer>
      <TitleText>Acesse sua conta</TitleText>
      <InputContainer>
        <Input
          name="email"
          errorMessage={errors.email?.message}
          control={control}
          label="Email"
        />
        <Input
          name="password"
          errorMessage={errors.password?.message}
          control={control}
          label="Senha"
          passwordType
        />
      </InputContainer>

      <LoginButton
        onClick={handleSubmit((e: LoginFormData) => {
          alert(`Redireciona para o carrinho ${e.email}, ${e.password} `);
        })}
      >
        Login
      </LoginButton>

      <StyledDivider />

      <>
        <ButtonText>Login Com</ButtonText>
        <Button onClick={() => alert("Redireciona login com google")} />
      </>
    </LoginContainer>
  );
}
