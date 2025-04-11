import Text from "src/lib/base/common/Text";
import { CardWhite } from "src/lib/base/styled/Card";
import { Hr } from "src/lib/base/styled/Divisors";
import { Row } from "src/lib/base/styled/Flex";
import { useQuery } from "react-query";
import billLogService from "src/services/bill";
import TableView from "../../common/Table";
import { ButtonMain } from "src/lib/base/styled/Buttons";
import TextInput from "src/lib/base/inputs/TextInput";
import SelectionInput from "src/lib/base/inputs/SelectionInput";
import DateInput from "src/lib/base/inputs/DateInput";

const options = [
  { value: "APPROVED", label: "Aprovado" },
  { value: "REPROVED", label: "Reprovado" },
  { value: "IN_AVALIATION", label: "Em Avaliação" },
];

const billLogsTable = [
  { key: "cpf", label: "CPF" },
  { key: "description", label: "Descrição da transação" },
  { key: "date", label: "Data da transação" },
  { key: "pointsAmount", label: "Pontos" },
  { key: "amount", label: "Valor" },
  { key: "status", label: "Status" },
];

const BillLogsView = () => {
  const query = useQuery({ queryFn: billLogService.getBillLogs });
  const [billLogs = []] = [query.data?.data, query.isLoading];

  return (
    <CardWhite>
      <Text tag="h3">Registro de Transações</Text>
      <Hr />
      <Row responsive gap={4}>
        <TextInput label="Pesquisar" placeholder="Buscar por CPF" />
        <DateInput label="De" placeholder="Nenhum" />
        <DateInput label="Até" />
        <SelectionInput
          label="Status"
          placeholder="Tipo de status"
          options={options}
        />
      </Row>
      <TableView headers={billLogsTable} rows={billLogs} />
    </CardWhite>
  );
};

export default BillLogsView;
