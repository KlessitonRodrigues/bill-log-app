import { cssSize } from "src/styles/utils";
import styled, { css } from "styled-components";

export const Label = styled.label(
  () => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: ${cssSize(2)};
  `
);

export const ErrorLabel = styled.div(
  ({ theme }) => css`
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors.red};
  `
);

export const Input = styled.input<{ error?: boolean }>(
  ({ theme, error }) => css`
    width: 100%;
    padding: ${cssSize(2.5)};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text1};
    border: ${theme.border.sm};
    border-radius: ${theme.radius.sm};
    font-size: ${theme.fontSize.md};
    transition: opacity 0.3s;

    ${error && `border: ${theme.border.red};`}
  `
);

export const InputIconRight = styled.div(
  () => css`
    display: flex;
    margin-left: -${cssSize(12)};
  `
);
