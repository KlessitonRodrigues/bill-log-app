import { useState } from "react";
import BillChartAnimation from "src/lib/base/animations/BillChart";
import If from "src/lib/base/common/If";
import { CardMain, CardWhite } from "src/lib/base/styled/Card";
import { Row, Box } from "src/lib/base/styled/Flex";
import SignInForm from "src/lib/forms/login/SignIn";
import SignUpForm from "src/lib/forms/login/SignUp";

const LoginPage = () => {
  const [newAccount, setNewAccount] = useState(true);
  const onChangeForm = () => setNewAccount(!newAccount);

  return (
    <Row h="100vh" responsive p={4} gap={4}>
      <Box maxw={200}>
        <If check={newAccount}>
          <CardWhite p={12}>
            <SignInForm goAccountForm={onChangeForm} />
          </CardWhite>
        </If>
        <If check={!newAccount}>
          <CardWhite p={12}>
            <SignUpForm goLoginForm={onChangeForm} />
          </CardWhite>
        </If>
      </Box>
      <Box h="100%">
        <CardMain h="100%">
          <Row center h="100%">
            <BillChartAnimation />
          </Row>
        </CardMain>
      </Box>
    </Row>
  );
};

export const Component = LoginPage;
