import * as Yup from "yup";

export const LoginSchema = Yup.object({
  username: Yup.string().required("username is required"),
  password: Yup.string().required("Password is required"),
});
