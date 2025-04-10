import styled, { css } from "styled-components";

import { cssSize, screenSize } from "src/styles/utils";

export const Box = styled.div<Props.BoxField>(
  ({ w, h, maxw, maxh, p, m, fit }) => css`
    width: 100%;
    ${w && `width: ${cssSize(w)};`}
    ${h && `height: ${cssSize(h)};`}
    ${p && `padding: ${cssSize(p)};`}
    ${m && `margin: ${cssSize(m)};`}
    ${maxw && `max-width: ${cssSize(maxw)};`}
    ${maxh && `max-height: ${cssSize(maxh)};`}
    ${fit && `width: fit-content;`}
  `
);

export const Row = styled(Box)(
  ({ gap, left, right, top, bottom, center, wrap, between, responsive }) => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(gap ?? 2)};
    ${left && "justify-content: flex-start;"}
    ${right && "justify-content: flex-end;"}
    ${center && "justify-content: center;"}
    ${between && "justify-content: space-between;"}
    ${top && "align-items: flex-start;"}
    ${bottom && "align-items: flex-end;"}
    ${wrap && "flex-wrap: wrap;"}

    @media (max-width: ${screenSize.laptopS}px) {
      ${responsive && "flex-direction: column;"}
      ${responsive && top && "justify-content: flex-start;"}
      ${responsive && bottom && "justify-content: flex-end;"}
      ${responsive && left && "align-items: flex-start;"}
      ${responsive && right && "align-items: flex-end;"}
    }
  `
);

export const Column = styled(Box)(
  ({ gap, left, right, top, bottom, center }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${cssSize(gap ?? 2)};
    ${top && "justify-content: flex-start;"}
    ${bottom && "justify-content: flex-end;"}
    ${center && "justify-content: center;"}
    ${left && "align-items: flex-start;"}
    ${right && "align-items: flex-end;"}
  `
);

export const Grid = styled.div<Props.CssProps>(
  ({ gap, rows, cols }) => css`
    width: 100%;
    display: grid;
    gap: ${cssSize(gap ?? 4)};
    grid-template-columns: repeat(${cols}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);

    @media (max-width: ${screenSize.laptopM}px) {
      grid-template-columns: 1fr;
    }
  `
);
