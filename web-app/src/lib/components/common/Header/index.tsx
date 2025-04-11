import { CgLogOut } from "react-icons/cg";
import { PiHandCoins } from "react-icons/pi";
import Text from "src/lib/base/common/Text";
import { ButtonOutline } from "src/lib/base/styled/Buttons";
import { CardWhite } from "src/lib/base/styled/Card";
import { Row } from "src/lib/base/styled/Flex";
import { setToken } from "src/utils/localStorage";

const Header = () => {
  const onLogout = () => {
    setToken("");
    window.location.pathname = "/";
  };

  return (
    <CardWhite p={4}>
      <Row gap={4}>
        <PiHandCoins size={38} />
        <Text tag="h2">Dashboard</Text>
        <Row right>
          <ButtonOutline onClick={onLogout}>
            <CgLogOut size={24} />
          </ButtonOutline>
        </Row>
      </Row>
    </CardWhite>
  );
};

export default Header;
