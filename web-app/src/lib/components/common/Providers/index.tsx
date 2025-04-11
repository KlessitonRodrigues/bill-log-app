import isValidProp from "@emotion/is-prop-valid";
import { PropsWithChildren } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import useTheme from "src/hooks/useTheme";
import GlobalCSS from "src/styles/global";
import { getTheme } from "src/styles/theme";

import toast, { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

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
          <GlobalCSS />
          <Toaster toastOptions={toastOptions} />
          {props.children}
        </ThemeProvider>
      </StyleSheetManager>
    </QueryClientProvider>
  );
};

export default Providers;
