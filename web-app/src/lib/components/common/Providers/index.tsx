import isValidProp from "@emotion/is-prop-valid";
import { PropsWithChildren } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import useTheme from "src/hooks/useTheme";
import GlobalCSS from "src/styles/global";
import { getTheme } from "src/styles/theme";

import toast, { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { AccountProvider } from "src/hooks/useAccount";

const toastOptions = { duration: 8000, style: { minWidth: "20rem" } };

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: 1000,
      onError: (error: any) => {
        toast.error(error.response?.data?.message);
      },
    },
    mutations: {
      onError: (error: any) => {
        toast.error(error.response?.data?.message);
      },
    },
  },
});

const Providers = (props: PropsWithChildren) => {
  const { isDark } = useTheme();
  const theme = getTheme(isDark);

  return (
    <QueryClientProvider client={queryClient}>
      <StyleSheetManager disableCSSOMInjection shouldForwardProp={isValidProp}>
        <ThemeProvider theme={theme}>
          <AccountProvider>
            <GlobalCSS />
            <Toaster toastOptions={toastOptions} />
            {props.children}
          </AccountProvider>
        </ThemeProvider>
      </StyleSheetManager>
    </QueryClientProvider>
  );
};

export default Providers;
