import { Column } from "src/lib/base/styled/Flex";
import Header from "src/lib/components/common/Header";
import Page from "src/lib/components/common/Page";
import BillLogsView from "src/lib/components/view/BillLogView";

const DashboardPage = () => {
  return (
    <Page>
      <Column p={4} gap={4}>
        <Header />
        <BillLogsView />
      </Column>
    </Page>
  );
};

export const Component = DashboardPage;
