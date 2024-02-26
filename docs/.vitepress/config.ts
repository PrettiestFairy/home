import {defineConfig} from 'vitepress'

import {
  DefaultHead,
  ChineseThemeConfig,
  EnglishThemeConfig
} from "./configs";

export default defineConfig(
  {
    outDir: "../dist",
    base: process.env.APP_BASE_PATH || "/",
    lastUpdated: true,
    cleanUrls: true,
    markdown: {
      lineNumbers: true,
    },
    locales: {
      root: {
        label: "English",
        lang: "en_US",
        title: "Lionel Johnson",
        description: "",
        head: DefaultHead,
        themeConfig: EnglishThemeConfig,
      },
      zh_CN: {
        label: "简体中文",
        lang: "zh_CN",
        title: "关于段主任的一切",
        description: "",
        head: DefaultHead,
        themeConfig: ChineseThemeConfig,
      },
    },
  }
)

