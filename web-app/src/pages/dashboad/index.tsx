import { Column } from "src/lib/base/styled/Flex";
import Header from "src/lib/components/common/Header";
import Page from "src/lib/components/common/Page";
import BillLogsView from "src/lib/components/views/BillLogView";
import UserWalletView from "src/lib/components/views/UserWalletView";

const DashboardPage = () => {
  return (
    <Page>
      <Column p={4} gap={4}>
        <Header />
        <UserWalletView />
        <BillLogsView />
      </Column>
    </Page>
  );
};

export const Component = DashboardPage;
