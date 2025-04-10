import styled, { css } from "styled-components";

export const Image = styled.img<Props.CssProps>(
  ({ w, h }) => css`
    display: block;
    margin: auto;
    width: 100%;
    max-height: ${h ?? "100%"};
    max-width: ${w ?? "unset"};
  `
);

export const ImageContainer = styled.div<Props.CssProps>(
  ({ theme, w, h }) => css`
    width: 100%;
    max-height: ${h ?? "100%"};
    max-width: ${w ?? "unset"};
    box-shadow: ${theme.shadow.md};
    border-radius: ${theme.radius.sm};
    overflow: hidden;
  `
);
