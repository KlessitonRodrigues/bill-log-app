import styled, { css } from "styled-components";

import { cssSize } from "src/styles/utils";

export const Button = styled.button(
  ({ theme }) => css`
    max-width: fit-content;
    min-width: fit-content;
    font-family: "Roboto", sans-serif;
    min-width: fit-content;
    font-size: ${theme.fontSize.md};
    padding: ${cssSize(2)} ${cssSize(4)};
    transition: opacity 0.3s;
    box-shadow: ${theme.shadow.md};
    text-decoration: none;

    &:hover {
      opacity: 0.75;
    }
  `
);

export const ButtonMain = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.colors.main};
    color: ${theme.colors.white};
  `
);

export const ButtonWhite = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.main};
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
