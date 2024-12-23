import * as yup from "yup";

export const SchemaLoginUser = yup.object().shape({
  email: yup.string().email("email_invalid").required("email_required"),
  password: yup.string().required("password_required"),
});
