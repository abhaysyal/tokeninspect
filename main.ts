// .storybook/main.ts
import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials',],
  framework: '@storybook/react-vite', // Adjust if using a different framework
  viteFinal: (config) => {
    return {
      ...config,
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    };
  },
};

export default config;
