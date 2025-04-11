import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";

const values: Form.SignIn = {
  email: "",
  password: "",
};

const resolver: Resolver<Form.SignIn> = async (data, ctx, opt) => {
  const schema: Utils.ZodSchema<typeof data> = {};

  schema.email = z
    .string()
    .nonempty("Email is required")
    .email("Invalid email format");

  schema.password = z.string().nonempty("Password is required");

  return zodResolver(z.object(schema))(data, ctx, opt);
};

export const signInform = {
  values,
  resolver,
};
