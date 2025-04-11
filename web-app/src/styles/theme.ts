import { antColors } from "src/styles/colors";

import { cssSize } from "./utils";

export const getTheme = (dark: boolean) => {
  const theme: Styles.Theme = {
    colors: {
      main: antColors.geekblue["300"],
      mainBg: antColors.geekblue["500"],
      mainText: antColors.gray["100"],
      bg1: antColors.gray["100"],
      bg2: antColors.gray["200"],
      bg3: antColors.gray["400"],
      bg4: antColors.gray["500"],
      text1: antColors.gray["900"],
      text2: antColors.gray["800"],
      text3: antColors.gray["700"],
      text4: antColors.gray["600"],
      gray: antColors.gray["500"],
      yellow: antColors.gold["600"],
      red: antColors.red["700"],
      blue: antColors.blue["500"],
      green: antColors.green["800"],
      white: antColors.gray["200"],
      black: antColors.gray["900"],
    },
    fontSize: {
      h1: "1.5rem",
      h2: "1.4rem",
      h3: "1.3rem",
      h4: "1.2rem",
      h5: "1.1rem",
      h6: "1rem",
      md: "1rem",
      sm: "0.95rem",
      xs: "0.9rem",
      label: "0.8rem",
    },
    shadow: {
      lg: "0 1px 7px 0 #0007",
      md: "0 1px 5px 0 #0005",
      sm: "0 1px 3px 0 #0003",
    },
    border: {
      lg: `solid 1px ${antColors.gray["800"]}`,
      md: `solid 1px ${antColors.gray["600"]}`,
      sm: `solid 1px ${antColors.gray["500"]}`,
      red: `solid 1px ${antColors.red["700"]}`,
    },
    radius: {
      full: "50%",
      xl: cssSize(6),
      lg: cssSize(4),
      md: cssSize(3),
      sm: cssSize(2),
    },
  };

  if (dark) {
    theme.colors.bg1 = antColors.gray["1300"];
    theme.colors.bg2 = antColors.gray["1200"];
    theme.colors.bg3 = antColors.gray["1000"];
    theme.colors.bg4 = antColors.gray["900"];
    theme.colors.text1 = antColors.gray["500"];
    theme.colors.text2 = antColors.gray["600"];
    theme.colors.text3 = antColors.gray["700"];
    theme.colors.text4 = antColors.gray["800"];
    theme.colors.gray = antColors.gray["600"];
    theme.colors.white = antColors.gray["300"];
    theme.border.lg = `solid 1px ${antColors.gray["800"]}`;
    theme.border.md = `solid 1px ${antColors.gray["900"]}`;
    theme.border.sm = `solid 1px ${antColors.gray["900"]}`;
  }

  return theme;
};
