import { useForm } from "react-hook-form";
import TextInput from "src/lib/base/inputs/TextInput";
import { ButtonMain } from "src/lib/base/styled/Buttons";
import { Row } from "src/lib/base/styled/Flex";
import { billLogForm } from "./form";
import { Form } from "src/lib/base/styled/Forms";
import toast from "react-hot-toast";
import { CardWhite } from "src/lib/base/styled/Card";
import DateInput from "src/lib/base/inputs/DateInput";
import SelectionInput from "src/lib/base/inputs/SelectionInput";
import billService from "src/services/bill";
import { useMutation } from "react-query";

const BIllLogForm = () => {
  const { handleSubmit, register, formState } = useForm(billLogForm);
  const submitQuery = useMutation({ mutationFn: billService.createBillLog });

  const onSubmit = async (data: Form.BillLog) => {
    await submitQuery.mutateAsync(data);
    toast.success("Registro de transação criado com sucesso");
  };

  return (
    <CardWhite>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <TextInput
            name="cpf"
            label="CPF"
            placeholder="Digite número de CPF"
            input={register("cpf")}
            error={formState.errors.cpf?.message}
          />
          <TextInput
            name="description"
            label="Descrição"
            placeholder="Digite a descrição"
            input={register("description")}
            error={formState.errors.description?.message}
          />
        </Row>
        <Row>
          <DateInput
            name="date"
            label="Data da transação"
            input={register("date")}
            error={formState.errors.date?.message}
          />
          <SelectionInput
            name="status"
            label="Data da transação"
            placeholder="Selecione o status"
            input={register("status")}
            error={formState.errors.status?.message}
            options={[
              { label: "Aprovado", value: "approved" },
              { label: "Reprovado", value: "rejected" },
              { label: "Em Avaliação", value: "pending" },
            ]}
          />
        </Row>
        <Row>
          <TextInput
            name="pointsAmount"
            label="Pontos"
            placeholder="0"
            input={register("pointsAmount")}
            error={formState.errors.pointsAmount?.message}
          />
          <TextInput
            name="amount"
            label="Valor"
            placeholder="0"
            input={register("amount")}
            error={formState.errors.amount?.message}
          />
        </Row>
        <Row>
          <ButtonMain>Salvar</ButtonMain>
        </Row>
      </Form>
    </CardWhite>
  );
};

export default BIllLogForm;
