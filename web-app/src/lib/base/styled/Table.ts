import styled, { css } from "styled-components";

import { cssSize } from "src/styles/utils";

export const Table = styled.table(({}) => css``);

export const TableHeader = styled.thead(({}) => css``);

export const TableHeaderRow = styled.tr(
  ({ theme }) => css`
    border-bottom: ${theme.border.lg};
  `
);

export const TableHeaderData = styled.th(
  ({}) => css`
    padding: ${cssSize(2)};
    text-align: left;
  `
);

export const TableBody = styled.tbody(({}) => css``);

export const TableRow = styled.tr(
  ({ theme }) => css`
    border-bottom: ${theme.border.lg};
    background-color: ${theme.colors.bg3};
  `
);

export const TableData = styled.td(
  ({ theme }) => css`
    padding: ${cssSize(3)};
    text-align: left;
    border-radius: ${theme.radius.sm};
  `
);
