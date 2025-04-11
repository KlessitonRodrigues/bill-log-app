import { userRuleOptions } from "src/constants/dataOptions";
import useAccount from "src/hooks/useAccount";
import Text from "src/lib/base/common/Text";
import { CardWhite } from "src/lib/base/styled/Card";
import { Hr } from "src/lib/base/styled/Divisors";
import { Row } from "src/lib/base/styled/Flex";
import { findOptionsLabel } from "src/utils/array";

const UserWalletView = () => {
  const { user } = useAccount();

  return (
    <CardWhite>
      <Text tag="h5">
        Dados do {findOptionsLabel(user?.rule, userRuleOptions)}
      </Text>
      <Hr />
      <Row responsive left gap={6}>
        <Row left fit>
          <Text tag="h6">Nome:</Text>
          <Text tag="p">{user?.name}</Text>
        </Row>
        <Row left fit>
          <Text tag="h6">Email:</Text>
          <Text tag="p">{user?.email}</Text>
        </Row>
      </Row>
      <Row responsive left gap={6}>
        <Row left fit>
          <Text tag="h6">Saldo:</Text>
          <Text tag="p">4000</Text>
        </Row>
      </Row>
    </CardWhite>
  );
};

export default UserWalletView;
