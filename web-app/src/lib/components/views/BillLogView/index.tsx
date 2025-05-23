import Text from "src/lib/base/common/Text";
import { CardWhite } from "src/lib/base/styled/Card";
import { Hr } from "src/lib/base/styled/Divisors";
import { Row } from "src/lib/base/styled/Flex";
import { useQuery } from "react-query";
import billLogService from "src/services/bill";
import TableView from "../../common/Table";
import SelectionInput from "src/lib/base/inputs/SelectionInput";
import DateInput from "src/lib/base/inputs/DateInput";
import { billStatusOptions } from "src/constants/dataOptions";
import { billLogsTable } from "src/constants/dataTable";
import { ButtonMain } from "src/lib/base/styled/Buttons";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import NumberInput from "src/lib/base/inputs/NumberInput";
import { findOptionsLabel } from "src/utils/array";
import useAccount from "src/hooks/useAccount";
import If from "src/lib/base/common/If";
import { USER_RULE } from "src/constants/dataEnum";

const filters = { cpf: "", status: "", startDate: "", endDate: "" };

const BillLogsView = () => {
  const { user } = useAccount();
  const [filter, setFilters] = useState(filters);

  const { data, refetch, isLoading } = useQuery({
    queryKey: "getBillLogs",
    queryFn: () => billLogService.getBillLogs(filter),
  });

  const billLogs = data?.data || [];
  const billLogTable = useMemo(() => {
    return billLogs?.map((item: any) => ({
      ...item,
      status: findOptionsLabel(item.status, billStatusOptions),
    }));
  }, [billLogs]);

  useEffect(() => {
    if (filter.cpf && filter.cpf.length < 3) return;
    if (!isLoading) refetch();
  }, [filter]);

  useEffect(() => {
    if (user?.rule === USER_RULE.USER) {
      setFilters({ ...filter, cpf: user.cpf });
    }
  }, [user]);

  return (
    <CardWhite>
      <Text tag="h5">Registro de Transações</Text>
      <Hr />
      <Row responsive gap={4}>
        <If check={user?.rule === USER_RULE.ADMIN}>
          <NumberInput
            label="Pesquisar"
            placeholder="Buscar por CPF"
            value={filter.cpf}
            onChange={(cpf) => setFilters({ ...filter, cpf })}
          />
        </If>
        <DateInput
          label="De"
          value={filter.startDate}
          onChange={(startDate) => setFilters({ ...filter, startDate })}
        />
        <DateInput
          label="Até"
          value={filter.endDate}
          onChange={(endDate) => setFilters({ ...filter, endDate })}
        />
        <SelectionInput
          label="Status"
          placeholder="Tipo de status"
          value={filter.status}
          options={billStatusOptions}
          onChange={(option) => setFilters({ ...filter, status: option.value })}
        />
      </Row>
      <TableView headers={billLogsTable} rows={billLogTable} />
      <If check={user?.rule === USER_RULE.ADMIN}>
        <Link to="/bills/form">
          <ButtonMain>Adicionar Registro</ButtonMain>
        </Link>
      </If>
    </CardWhite>
  );
};

export default BillLogsView;
