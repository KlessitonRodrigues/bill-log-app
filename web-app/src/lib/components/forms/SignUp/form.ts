import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";

const values: Form.SignUp = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  rule: "",
};

const resolver: Resolver<typeof values> = async (data, ctx, opt) => {
  const schema: Utils.ZodSchema<typeof values> = {};

  schema.name = z.string().nonempty("Nome é obrigatório");

  schema.email = z
    .string()
    .nonempty("Email é obrigatório")
    .email("Formato inválido");

  schema.password = z.string().nonempty("Senha é obrigatório");

  schema.confirmPassword = z
    .string()
    .nonempty("Senha de confirmação é obrigatório");

  schema.rule = z.string().nonempty("Tipo é obrigatório");

  return zodResolver(z.object(schema))(data, ctx, opt);
};

export const signUpform = {
  values,
  resolver,
};
