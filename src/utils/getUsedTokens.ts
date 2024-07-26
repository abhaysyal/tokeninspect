// src/utils/tokenUtil.ts

import { typography, colors, spacing } from '../tokens';

const tokenMap = {
  ...typography,
  ...colors,
  ...spacing,
};

export const collectTokens = (styles: React.CSSProperties): string[] => {
  const usedTokens: string[] = [];

  Object.entries(styles).forEach(([key, value]) => {
    Object.entries(tokenMap).forEach(([tokenName, tokenValue]) => {
      if (tokenValue === value) {
        usedTokens.push(tokenName);
      }
    });
  });

  return usedTokens;
};
