import { PropsWithChildren, useEffect } from "react";
import { useQuery } from "react-query";
import useAccount from "src/hooks/useAccount";
import If from "src/lib/base/common/If";
import Loading from "src/lib/base/common/Loading";

import { PageContainer, PageContent } from "src/lib/base/styled/Containers";
import userService from "src/services/user";

const Page = (props: PropsWithChildren) => {
  const { children } = props;
  const { setUser } = useAccount();

  const { data, isLoading } = useQuery({
    queryKey: "getUserData",
    queryFn: userService.getUserData,
    onError: () => (location.pathname = "/"),
  });
  const user = data?.data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (user.email) setUser(user);
  }, [user]);

  return (
    <PageContainer>
      <If
        check={isLoading}
        true={<Loading type="fullScreen" show title="Carregando Usuário" />}
        false={<PageContent>{children}</PageContent>}
      />
    </PageContainer>
  );
};

export default Page;
