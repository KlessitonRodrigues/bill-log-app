import { useState } from "react";
import BillChartAnimation from "src/lib/base/Animation/BillChart";
import If from "src/lib/base/Conditional/If";
import { CardMainBg, CardWhiteBg } from "src/lib/base/StyledComponents/Card";
import { Row, Box } from "src/lib/base/StyledComponents/Flex";
import SignInForm from "src/lib/forms/login/SignIn";
import SignUpForm from "src/lib/forms/login/SignUp";

const LoginSection = () => {
  const [newAccount, setNewAccount] = useState(true);
  const onChangeForm = () => setNewAccount(!newAccount);

  return (
    <Row h="100vh" responsive p={4} gap={4}>
      <Box maxw={200}>
        <If check={newAccount}>
          <CardWhiteBg p={12}>
            <SignInForm goAccountForm={onChangeForm} />
          </CardWhiteBg>
        </If>
        <If check={!newAccount}>
          <CardWhiteBg p={12}>
            <SignUpForm goLoginForm={onChangeForm} />
          </CardWhiteBg>
        </If>
      </Box>
      <Box h="100%">
        <CardMainBg h="100%">
          <Row center h="100%">
            <BillChartAnimation />
          </Row>
        </CardMainBg>
      </Box>
    </Row>
  );
};

export default LoginSection;
