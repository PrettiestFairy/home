import {defineConfig} from 'vitepress'

import {head, austinHeaders, sidebar} from './configs'

export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '',
  lang: 'zh-CN',
  title: '关于段主任的一切',
  description: '',
  head: head,
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    i18nRouting: false,
    logo: "https://minioshare.cloud.fairies.ltd/images/headers/logo.jpg",
    nav: austinHeaders,
    sidebar: sidebar,
    // 右侧大纲配置
    outline: {
      level: 'deep',
      label: '目录',
    },
    socialLinks: [{icon: 'github', link: 'https://github.com/AustinFairyland'}],
    footer: {
      message: 'Copyright © 2023 - Person Austin 版权所有.',
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2022008414号</a>',
      // copyright: 'Copyright © 2023 - Person Austin <a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2022008414号</a>',
    },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
})
