import { useForm } from "react-hook-form";
import TextInput from "src/lib/base/inputs/TextInput";
import { ButtonMain, ButtonWhite } from "src/lib/base/styled/Buttons";
import { Row } from "src/lib/base/styled/Flex";
import { billLogForm } from "./form";
import { Form } from "src/lib/base/styled/Forms";
import toast from "react-hot-toast";
import { CardWhite } from "src/lib/base/styled/Card";
import DateInput from "src/lib/base/inputs/DateInput";
import SelectionInput from "src/lib/base/inputs/SelectionInput";
import billService from "src/services/bill";
import { useMutation } from "react-query";
import { Hr } from "src/lib/base/styled/Divisors";
import Text from "src/lib/base/common/Text";
import { billStatusOptions } from "src/constants/dataOptions";
import { Link } from "react-router-dom";
import NumberInput from "src/lib/base/inputs/NumberInput";

const BIllLogForm = () => {
  const { register, formState, ...form } = useForm(billLogForm);
  const submitQuery = useMutation({ mutationFn: billService.createBillLog });

  const onSubmit = async (data: Form.BillLog) => {
    await submitQuery.mutateAsync(data);
    toast.success("Registro de transação criado com sucesso");
  };

  return (
    <CardWhite>
      <Text tag="h3">Novo registro de transação</Text>
      <Hr />
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <Row top>
          <NumberInput
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
        <Row top>
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
            error={formState.errors.status?.message}
            options={billStatusOptions}
            onChange={(option) => form.setValue("status", option?.value)}
          />
        </Row>
        <Row top>
          <NumberInput
            name="pointsAmount"
            label="Pontos"
            placeholder="0"
            input={register("pointsAmount")}
            error={formState.errors.pointsAmount?.message}
          />
          <NumberInput
            name="amount"
            label="Valor"
            placeholder="0"
            input={register("amount")}
            error={formState.errors.amount?.message}
          />
        </Row>
        <Row>
          <ButtonMain>Salvar</ButtonMain>
          <Link to="/dashboard">
            <ButtonWhite type="button">Voltar</ButtonWhite>
          </Link>
        </Row>
      </Form>
    </CardWhite>
  );
};

export default BIllLogForm;
