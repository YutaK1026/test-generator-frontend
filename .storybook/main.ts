import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  framework: {
    name: "@storybook/experimental-nextjs-vite",
    options: {}
  },
  staticDirs: [
    "..\\public"
  ],
  viteFinal: async (viteConfig, { configType }) => {
    return {
      ...viteConfig,
      resolve: {
        ...viteConfig.resolve,
        alias: {
          ...viteConfig.resolve?.alias,
          "@": resolve(__dirname, "../")
        }
      }
    };
  }
};

export default config;
