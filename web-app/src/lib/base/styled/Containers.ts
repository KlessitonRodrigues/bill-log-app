import styled, { css } from "styled-components";

import { animations, cssSize, screenSize } from "src/styles/utils";

export const PageContainer = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    z-index: 3;
  `
);

export const PageContent = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    margin: auto;
    margin-bottom: ${cssSize(10)};
    max-width: ${screenSize.laptopM}px;
    animation: 0.5s ${animations.fadeLeft} ease-out;
  `
);

export const Section = styled.section(
  ({ theme }) => css`
    margin: ${cssSize(4)} ${cssSize(2)};
    font-size: ${theme.fontSize.h4};
    color: ${theme.colors.text2};
  `
);
