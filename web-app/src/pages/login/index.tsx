import { useState } from "react";
import BillChartAnimation from "src/lib/base/animations/BillChart";
import If from "src/lib/base/common/If";
import Text from "src/lib/base/common/Text";
import { CardWhite } from "src/lib/base/styled/Card";
import { Row, Box, Column } from "src/lib/base/styled/Flex";
import SignInForm from "src/lib/components/forms/SignIn";
import SignUpForm from "src/lib/components/forms/SignUp";

const LoginPage = () => {
  const [newAccount, setNewAccount] = useState(true);
  const onChangeForm = () => setNewAccount(!newAccount);

  return (
    <Row h="100vh" responsive p={8} gap={8}>
      <Box h="100%">
        <CardWhite h="100%">
          <Column center h="100%" gap={8}>
            <Text tag="h1" size={30}>
              Aplicativo de registro
            </Text>
            <BillChartAnimation />
            <Box m="0 auto" maxw="30rem">
              <Text tag="p" size={20} className="text-center">
                Verique que seu relatório de transações agora mesmo! Faça login
                ou crie uma conta para acessar o sua tabela de registro.
              </Text>
            </Box>
          </Column>
        </CardWhite>
      </Box>
      <Box maxw={180}>
        <If check={newAccount}>
          <SignInForm goAccountForm={onChangeForm} />
        </If>
        <If check={!newAccount}>
          <SignUpForm goLoginForm={onChangeForm} />
        </If>
      </Box>
    </Row>
  );
};

export const Component = LoginPage;
