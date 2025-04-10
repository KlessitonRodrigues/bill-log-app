import styled, { css } from "styled-components";

import { cssSize } from "src/styles/utils";

export const Form = styled.form(
  () => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${cssSize(4)};
    padding: ${cssSize(6)} ${cssSize(4)};
  `
);
