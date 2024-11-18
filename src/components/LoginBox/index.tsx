import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<LoginFormData>(SchemaLoginUser),
  });

  return (
    <LoginContainer>
      <TitleText>{t("loginBox.header")}</TitleText>
      <InputContainer>
        <Input
          name="email"
          errorMessage={
            errors.email?.message
              ? t(`errorMessages.${errors.email?.message}`)
              : undefined
          }
          control={control}
          label="Email"
        />
        <Input
          name="password"
          errorMessage={
            errors.password?.message
              ? t(`errorMessages.${errors.password?.message}`)
              : undefined
          }
          control={control}
          label={t("loginBox.password")}
          passwordType
        />
      </InputContainer>

      <LoginButton
        onClick={handleSubmit((e: LoginFormData) => {
          alert(`Redireciona para o carrinho ${e.email}, ${e.password} `);
        })}
      >
        {t("loginBox.login")}
      </LoginButton>

      <StyledDivider />

      <>
        <ButtonText>{t("loginBox.login_with")}</ButtonText>
        <Button onClick={() => alert("Redireciona login com google")} />
      </>
    </LoginContainer>
  );
}
