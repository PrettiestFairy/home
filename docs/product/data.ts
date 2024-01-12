/*
@File: data.ts
@Editor: WebStorm
@Author: Austin (From Chengdu.China) https://fairy.host
@HomePage: https://github.com/AustinFairyland
@OperatingSystem: Windows 11 Professional Workstation 23H2 Canary Channel
@CreatedTime: 2024-01-12
*/

import {NavLink} from "../.vitepress/theme/types";

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '🎉作者站点导航',
    items: [
      {
        icon: '/logo.jpg',
        title: 'Github',
        desc: '',
        link: 'https://github.com/AustinFairyland',
      },
      {
        icon: '/logo.jpg',
        title: 'GitLab',
        desc: '',
        link: 'https://gitlab.com/Austin.D',
      },
      {
        icon: '/logo.jpg',
        title: 'Gitee',
        desc: '',
        link: 'https://github.com/AustinFairyland',
      },
      {
        icon: '/logo.jpg',
        title: 'GitBook',
        desc: '',
        link: 'https://gitbook.fairy.host',
      },
      {
        icon: '/logo.jpg',
        title: 'DockerHub',
        desc: '',
        link: 'https://hub.docker.com/repositories/austinfairyland',
      },
      {
        icon: '/logo.jpg',
        title: 'CSDN',
        desc: '',
        link: 'https://github.com/AustinFairyland',
      },
      {
        icon: '/logo.jpg',
        title: '博客园',
        desc: '',
        link: 'https://github.com/AustinFairyland',
      },
      {
        icon: '/logo.jpg',
        title: '知乎',
        desc: '',
        link: 'https://github.com/AustinFairyland',
      },
    ],
  },
  {
    title: "🎉个人服务站点导航",
    items: [
      {
        icon: '/logo.jpg',
        title: 'Notebook',
        desc: 'Notebook - 私人定制的数字记事本，记录您珍贵的思绪和灵感。',
        link: 'https://notebook.cloud.fairies.ltd',
      },
      {
        icon: '/logo.jpg',
        title: 'OpenWRT',
        desc: 'OpenWRT - 极致灵活的开源路由器操作系统，为您的网络连接提供无限可能。',
        link: 'https://openwrt.cloud.fairies.ltd',
      },
      {
        icon: '/logo.jpg',
        title: 'MinIO',
        desc: 'MinIO云存储 - 安全可靠的文件存储解决方案，守护您的数据安全。',
        link: 'https://minio.cloud.fairies.ltd/',
      },
      {
        icon: '/logo.jpg',
        title: 'ServerDashboard',
        desc: '',
        link: 'https://control.cloud.fairies.ltd',
      },
      {
        icon: '/logo.jpg',
        title: 'JupyterBook',
        desc: '',
        link: 'https://jupyterbook.cloud.fairies.ltd',
      },
      {
        icon: '/logo.jpg',
        title: 'PortainerDashboard',
        desc: '',
        link: 'https://portainer.cloud.fairies.ltd',
      },
      {
        icon: '/logo.jpg',
        title: 'NginxProxyManager',
        desc: '',
        link: 'https://proxy.cloud.fairies.ltd',
      },
      {
        icon: '/logo.jpg',
        title: 'PrivateServer-NginxProxyManager',
        desc: '',
        link: 'https://privateproxy.cloud.fairies.ltd',
      },
    ]
  },
  {
    title: "🎉个人作品展示",
    items: [
      {
        icon: "/logo.jpg",
        title: "个人主页",
        desc: "",
        link: "/"
      },
      {
        icon: "/logo.jpg",
        title: "豆瓣电影数据可视化",
        desc: "",
        link: "/"
      }
    ]
  },
  {
    title: "Python Modules",
    items: [
      {
        icon: "/logo.jpg",
        title: "Austin Framework",
        desc: "",
        link: "https://github.com/AustinFairyland/AustinFramework"
      },
      {
        icon: "/logo.jpg",
        title: "Austin Daily Module - PyPI",
        desc: "",
        link: "https://github.com/AustinFairyland/AustinModuleDaily"
      },
      {
        icon: "/logo.jpg",
        title: "Austin Fairyland Module - PyPI",
        desc: "",
        link: "https://github.com/AustinFairyland/AustinFairylandRepository"
      },
    ]
  },
  {
    title: "PyPI",
    items: [
      {
        icon: "/logo.jpg",
        title: "Austin Daily Module",
        desc: "",
        link: "https://pypi.org/project/austin-module-daily/"
      },
      {
        icon: "/logo.jpg",
        title: "Austin Fairyland Module",
        desc: "",
        link: "https://pypi.org/project/pyfairyland/"
      },
    ]
  },
  {
    title: "Python Project",
    items: [
      {
        icon: "/logo.jpg",
        title: "自动提交Git",
        desc: "",
        link: "https://github.com/AustinFairyland/AustinPersAutoGitCommit"
      },
      {
        icon: "/logo.jpg",
        title: "豆瓣电影数据爬虫",
        desc: "",
        link: "https://github.com/AustinFairyland/AustinPersDoubanFilmSpider"
      },
      {
        icon: "/logo.jpg",
        title: "豆瓣电影数据可视化API",
        desc: "",
        link: "https://github.com/AustinFairyland/AustinPersDoubanFilmAPI"
      },
      {
        icon: "/logo.jpg",
        title: "天翼云 - 边缘云计算",
        desc: "",
        link: "https://github.com/AustinFairyland/AceProjectCTCloudEOPAuth"
      },
      {
        icon: "/logo.jpg",
        title: "天气识别API",
        desc: "",
        link: "https://github.com/AustinFairyland/work_weather_identify_runnet_backend"
      },
      {
        icon: "/logo.jpg",
        title: "空域安全区域绘制",
        desc: "",
        link: "https://github.com/AustinFairyland/work_safe_runnet_service"
      },
      {
        icon: "/logo.jpg",
        title: "订餐微信小程序API",
        desc: "",
        link: "https://github.com/AustinFairyland/work_order_food_jid_service"
      },
      {
        icon: "/logo.jpg",
        title: "订餐数据清洗,分析与可视化",
        desc: "",
        link: "https://github.com/AustinFairyland/work_order_food_data_clean_jid_service"
      }
    ]
  },
  {
    title: "Go Project",
    items: [
      {
        icon: "/logo.jpg",
        title: "Goland",
        desc: "",
        link: "https://github.com/AustinFairyland/other_none_golang_go1"
      },
    ]
  },
  {
    title: "Java Project",
    items: [
      {
        icon: "/logo.jpg",
        title: "基于鸿蒙OS的记账本",
        desc: "",
        link: "https://github.com/AustinFairyland/other_none_harmony_android"
      },
    ]
  },
  {
    title: "Vue&Vite Project",
    items: [
      {
        icon: "/logo.jpg",
        title: "个人主页",
        desc: "",
        link: "https://github.com/AustinFairyland/AustinHomePage"
      },
      {
        icon: "/logo.jpg",
        title: "豆瓣电影数据可视化",
        desc: "",
        link: "https://github.com/AustinFairyland/AustinPersDoubanFilmWeb"
      }
    ]
  },
  {
    title: "Mini Project",
    items: [
      {
        icon: "/logo.jpg",
        title: "微信小程序 - 订餐系统",
        desc: "",
        link: "https://github.com/AustinFairyland/work_order_food_jid_mini_program"
      },
    ]
  },
]
