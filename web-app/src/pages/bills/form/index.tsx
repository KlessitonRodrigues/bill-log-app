import { Column } from "src/lib/base/styled/Flex";
import Header from "src/lib/components/common/Header";
import Page from "src/lib/components/common/Page";
import BIllLogForm from "src/lib/components/forms/bills/BillLog";

const BillFormPage = () => {
  return (
    <Page>
      <Column p={4} gap={4}>
        <Header />
        <BIllLogForm />
      </Column>
    </Page>
  );
};

export const Component = BillFormPage;
