import styled, { css } from "styled-components";

import { cssSize } from "src/styles/utils";

export const Button = styled.button(
  ({ theme }) => css`
    max-width: fit-content;
    min-width: fit-content;
    font-family: "Roboto", sans-serif;
    min-width: fit-content;
    font-size: ${theme.fontSize.md};
    padding: ${cssSize(2.5)} ${cssSize(4)};
    box-shadow: ${theme.shadow.sm};
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.75;
    }
  `
);

export const ButtonMain = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
  `
);

export const ButtonWhite = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.mainBg};
  `
);

export const ButtonBlue = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  `
);

export const ButtonGreen = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
  `
);

export const ButtonOutline = styled(Button)(
  ({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors.text1};
    border: ${theme.border.md};
    box-shadow: none;
    padding: ${cssSize(1)} ${cssSize(3)};
  `
);
