import isValidProp from "@emotion/is-prop-valid";
import { PropsWithChildren } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import useTheme from "src/hooks/useTheme";
import GlobalCSS from "src/styles/global";
import { getTheme } from "src/styles/theme";

import { Toaster } from "react-hot-toast";

const toastOptions = { duration: 8000, style: { minWidth: "20rem" } };

const AppProviders = (props: PropsWithChildren) => {
  const { isDark, color } = useTheme();
  const theme = getTheme(isDark, color);

  return (
    <StyleSheetManager disableCSSOMInjection shouldForwardProp={isValidProp}>
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <Toaster toastOptions={toastOptions} />
        {props.children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default AppProviders;
