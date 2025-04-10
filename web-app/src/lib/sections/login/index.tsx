import { useState } from "react";
import If from "src/lib/base/Conditional/If";
import { CardMainBg, CardWhiteBg } from "src/lib/base/StyledComponents/Card";
import { Row, Box } from "src/lib/base/StyledComponents/Flex";
import SignInForm from "src/lib/forms/login/SignIn";
import SignUpForm from "src/lib/forms/login/SignUp";

const LoginSection = () => {
  const [newAccount, setNewAccount] = useState(true);

  return (
    <Row h="100vh" responsive>
      <Box maxw={200} p={12}>
        <If check={newAccount}>
          <CardWhiteBg p={12}>
            <SignInForm onClick={() => setNewAccount(!newAccount)} />
          </CardWhiteBg>
        </If>
        <If check={!newAccount}>
          <CardWhiteBg p={12}>
            <SignUpForm onClick={() => setNewAccount(!newAccount)} />
          </CardWhiteBg>
        </If>
      </Box>
      <Box h="100%">
        <CardMainBg h="100%" noRounded>
          IMAGE
        </CardMainBg>
      </Box>
    </Row>
  );
};

export default LoginSection;
