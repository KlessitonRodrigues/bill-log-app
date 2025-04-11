import { Column } from "src/lib/base/styled/Flex";
import Header from "src/lib/components/common/Header";
import Page from "src/lib/components/common/Page";

const BillFormPage = () => {
  return (
    <Page>
      <Column p={4} gap={4}>
        <Header />
      </Column>
    </Page>
  );
};

export const Component = BillFormPage;
