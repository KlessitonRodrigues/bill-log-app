import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

// @ts-ignore
const AccountCtx = createContext<Hooks.UseAccountCtx>(null);

export const AccountProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState<any>();

  const context: Hooks.UseAccountCtx = {
    user,
    setUser,
  };

  const value = useMemo(() => context, [user]);
  return (
    <AccountCtx.Provider value={value}>{props.children}</AccountCtx.Provider>
  );
};

export default () => useContext(AccountCtx);
