import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";

const values: Form.BillLog = {
  cpf: "",
  date: "",
  description: "",
  pointsAmount: "",
  amount: "",
  status: "",
};

const resolver: Resolver<typeof values> = async (data, ctx, opt) => {
  const schema: Utils.ZodSchema<typeof values> = {};
  schema.cpf = z
    .string()
    .min(11, "CPF deve ter 11 dígitos")
    .max(11, "CPF deve ter 11 dígitos");
  schema.date = z.string().nonempty("Data é obrigatória");
  schema.description = z.string().nonempty("Descrição é obrigatória");
  schema.pointsAmount = z.string().nonempty("Pontos são obrigatórios");
  schema.amount = z.string().nonempty("Valor é obrigatório");
  schema.status = z.string().nonempty("Status é obrigatório");

  return zodResolver(z.object(schema))(data, ctx, opt);
};

export const billLogForm = {
  values,
  resolver,
};
