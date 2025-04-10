import { cssSize } from "src/styles/utils";
import styled, { css } from "styled-components";

export const Card = styled.div<Props.CardField>(
  ({ theme, w, h, p, m, noRounded }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${cssSize(4)};
    padding: ${cssSize(8)};
    box-shadow: ${theme.shadow.sm};
    border-radius: ${theme.radius.md};
    ${w && `width: ${cssSize(w)};`}
    ${h && `height: ${cssSize(h)};`}
    ${p && `padding: ${cssSize(p)};`}
    ${m && `margin: ${cssSize(m)};`}
    ${noRounded && `border-radius: 0;`}
  `
);

export const CardWhite = styled(Card)(
  ({ theme }) => css`
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text1};
  `
);

export const CardMain = styled(Card)(
  ({ theme }) => css`
    background-color: ${theme.colors.main};
    color: ${theme.colors.white};
  `
);
