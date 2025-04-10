import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";

const values: Form.SignIn = {
  email: "",
  password: "",
};

const resolver: Resolver<Form.SignIn> = async (data, ctx, opt) => {
  const schema: Record<keyof Form.SignIn, any> = {
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  };
  return zodResolver(z.object(schema))(data, ctx, opt);
};

export const signInform = {
  values,
  resolver,
};
