import { PiHandCoins } from "react-icons/pi";
import Text from "src/lib/base/common/Text";
import { CardWhite } from "src/lib/base/styled/Card";
import { Row } from "src/lib/base/styled/Flex";

const Header = () => {
  return (
    <CardWhite p={4}>
      <Row gap={4}>
        <PiHandCoins size={32} />
        <Text tag="h2">Registro de Transações</Text>
      </Row>
    </CardWhite>
  );
};

export default Header;
