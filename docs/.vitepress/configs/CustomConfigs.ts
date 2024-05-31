import type {DefaultTheme, HeadConfig} from 'vitepress'

export const DefaultHead: HeadConfig[] = [
  ['meta', {name: 'theme-color', content: '#3eaf7c'}],
  ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
  ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
  ['link', {rel: 'apple-touch-icon', href: '/favicon.ico'}],
  ['link', {rel: 'mask-icon', href: '/favicon.ico', color: '#3eaf7c'}],
  ['meta', {name: 'msapplication-TileImage', content: '/favicon.ico'}],
  ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
]

const DefaultLogo: string = "https://txcos.service.fairy.host/logo/fairylnadfuture-logo-preview.png"

const DefaultSocialLinks: DefaultTheme.SocialLink[] = [
  {
    icon: 'github',
    link: 'https://github.com/PrettiestFairy'
  }
]

const ChineseNav: DefaultTheme.Config['nav'] = [
  {text: 'CSDN 博客', link: 'https://alicehome.blog.csdn.net'},
  {text: '博客园', link: 'https://www.cnblogs.com/alicehome'},
  {text: '衣带渐宽终不悔, 为伊消得人憔悴', link: ''}
]

const EnglishNav: DefaultTheme.Config['nav'] = [
  {text: 'CSDN', link: 'https://alicehome.blog.csdn.net'},
  {text: 'CNBLOGS', link: 'https://www.cnblogs.com/alicehome'},
]

const ChineseFooter: DefaultTheme.Config['footer'] = {
  message: 'Copyright © 2022 - 个人版权所有.',
  copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2022008414号</a>'
}

const EnglishFooter: DefaultTheme.Config['footer'] = {
  message: 'Copyright © 2023 - Lionel Johnson All Rights Reserved.',
}

const DefaultSidebar: DefaultTheme.Config['sidebar'] = {}

export const ChineseThemeConfig: DefaultTheme.Config = {
  i18nRouting: true,
  logo: DefaultLogo,
  nav: ChineseNav,
  sidebar: DefaultSidebar,
  socialLinks: DefaultSocialLinks,
  footer: ChineseFooter,
  darkModeSwitchLabel: '外观',
  returnToTopLabel: '返回顶部',
  // 右侧大纲配置
  outline: {
    level: 'deep',
    label: '目录',
  },
  docFooter: {
    prev: '上一篇',
    next: '下一篇',
  },
}

export const EnglishThemeConfig: DefaultTheme.Config = {
  i18nRouting: true,
  logo: DefaultLogo,
  nav: EnglishNav,
  sidebar: DefaultSidebar,
  socialLinks: DefaultSocialLinks,
  footer: EnglishFooter,
  darkModeSwitchLabel: 'Theme',
  returnToTopLabel: 'Top',
  // 右侧大纲配置
  outline: {
    level: 'deep',
    label: 'SUMMARY',
  },
  docFooter: {
    prev: 'Last',
    next: 'Next',
  },
}
