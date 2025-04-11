import Text from "src/lib/base/common/Text";
import { CardWhite } from "src/lib/base/styled/Card";
import { Hr } from "src/lib/base/styled/Divisors";
import { Row } from "src/lib/base/styled/Flex";

const UserWalletView = () => {
  return (
    <CardWhite>
      <Text tag="h5">Dados do Usuário</Text>
      <Hr />
      <Row responsive left gap={6}>
        <Row left fit>
          <Text tag="h6">Nome:</Text>
          <Text tag="p">Tester</Text>
        </Row>
        <Row left fit>
          <Text tag="h6">Email:</Text>
          <Text tag="p">tester@email.com</Text>
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
