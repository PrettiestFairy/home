/*
@File: data.ts
@Editor: WebStorm
@Author: Lionel Johnson (From Chengdu.China) https://fairy.host
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
    title: "🎉 Site Navigation",
    items: [
      {
        icon: "https://minioshare.service.fairy.host/images/icon/github.svg",
        title: "Github",
        desc: "Explore the world of open source, discovering repositories full of creativity and a spirit of collaboration.",
        link: "https://github.com/PrettiestFairy",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/gitlab.svg",
        title: "GitLab",
        desc: "A multi-functional code hosting platform dedicated to efficient software development processes.",
        link: "https://gitlab.com/Lionel Johnson.D",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/gitee.svg",
        title: "Gitee",
        desc: "Gitee, China's leading open-source code hosting platform, focuses on high-speed downloads and localized services.",
        link: "https://gitee.com/AustinFairyland",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/gitbook.svg",
        title: "GitBook",
        desc: "A space for document and knowledge sharing, filled with useful technical guides and tutorials.",
        link: "https://gitbook.fairy.host",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/docker.svg",
        title: "DockerHub",
        desc: "Discover containerized applications and images on DockerHub for easy and rapid software deployment and scaling.",
        link: "https://hub.docker.com/u/austinfairyland",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/telegram.svg",
        title: "Telegram",
        desc: "Get instant access to the latest news and updates, interact with community members in real time, share your thoughts and feedback.",
        link: "/",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/twitter.svg",
        title: "Twitter",
        desc: "Keep up with the latest developments, participate in discussions on topics, and discover instant news and views on industry trends.",
        link: "/",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/youtube.svg",
        title: "YouTube",
        desc: "Watch content-rich videos, including tutorials, product reviews, and industry insights, to gain a deeper understanding of our world.",
        link: "/",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/instagram.svg",
        title: "Instagram",
        desc: "Enjoy a visual feast, exploring our stories and moments of innovation from a unique perspective.",
        link: "/",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/csdn.svg",
        title: "CSDN",
        desc: "CSDN's blog shares the latest programming techniques, IT information, and personal insights.",
        link: "https://alicehome.blog.csdn.net",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/cnblogs.svg",
        title: "Cnblogs",
        desc: "Cnblogs, delve into programming insights and solutions to technical challenges.",
        link: "https://www.cnblogs.com/alicehome",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/zhihu.svg",
        title: "Zhihu",
        desc: "Join the discussion on Zhihu to explore hot tech topics and industry trends.",
        link: "https://www.zhihu.com/people/lao-gong-da-da",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/OfficialAccount.svg",
        title: "WeChat Official Account",
        desc: "Follow our WeChat official account to get the latest technology trends, tutorials, and personal insights.",
        link: "https://minioshare.service.fairy.host/images/qrcode/qrcode_official_account_12x12.jpg",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/bilibili.svg",
        title: "Bilibili",
        desc: "Watch the latest video content, including exclusive tutorials, industry insights, and creative shares.",
        link: "/",
      },
    ],
  },
  {
    title: "🎉 Personal Service Site Navigation",
    items: [
      // {
      //   icon: "https://minioshare.service.fairy.host/images/icon/siyuan.svg",
      //   title: "Notebook",
      //   desc: "SiyuanNotebook - A Custom Digital Notebook for Recording Your Precious Thoughts and Inspirations.",
      //   link: "https://notebook.cloud.fairies.ltd",
      // },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/openwrt.svg",
        title: "OpenWRT",
        desc: "OpenWRT - An extremely flexible open-source router operating system that offers limitless possibilities for your network connections.",
        link: "https://openwrt.service.fairy.host",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/minio.jpeg",
        title: "MinIO",
        desc: "MinIO Cloud Storage - A secure and reliable file storage solution to safeguard your data.",
        link: "https://minio.service.fairy.host",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/nezha.svg",
        title: "Dashboard",
        desc: "NezhaDashboard - Monitor and manage your network services, ensuring performance and security.",
        link: "https://nezha.service.fairy.host",
      },
      // {
      //   icon: "https://minioshare.service.fairy.host/images/icon/jupyter.svg",
      //   title: "Jupyter Book",
      //   desc: "JupyterBook - A powerful tool for exploring data science and machine learning, inspiring innovative thinking.",
      //   link: "https://jupyterbook.cloud.fairies.ltd",
      // },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/portainer.svg",
        title: "Portainer",
        desc: "Portainer - Simplifies Docker container management, enhancing development and deployment efficiency.",
        link: "https://portainer.service.fairy.host",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/nginx.svg",
        title: "Tencent Cloud Nginx",
        desc: "NginxProxyManager - Easily manage and optimize your web server configurations.",
        link: "https://proxy.admin.fairy.host",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/nginx.svg",
        title: "Aliyun Nginx",
        desc: "NginxProxyManager - Easily manage and optimize your web server configurations.",
        link: "https://proxy.cloud.fairies.ltd",
      },
      // {
      //   icon: "https://minioshare.service.fairy.host/images/icon/nginx.svg",
      //   title: "NginxProxy(PVT)",
      //   desc: "NginxProxyManager - A private Nginx proxy that offers secure and reliable web proxy and acceleration services.",
      //   link: "https://privateproxy.cloud.fairies.ltd",
      // },
      // {
      //   icon: "https://minioshare.service.fairy.host/images/icon/redhat.svg",
      //   title: "RedHat WebUI",
      //   desc: "RedHat WebUI - A comprehensive Web interface that allows you to easily manage and automate your RHEL.",
      //   link: "https://redhat.cloud.fairies.ltd",
      // },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/image.svg",
        title: "Picsur",
        desc: "Picsur - An innovative online platform for sharing and editing photos, providing a convenient and quick way to share and edit images.",
        link: "https://picsur.service.fairy.host",
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/ittools.svg",
        title: "IT Tools",
        desc: "IT Tools - A comprehensive website collection of information technology tools, offering a variety of IT resources and tools to enhance efficiency.",
        link: "https://ittools.cloud.fairies.ltd",
      },
      {
        icon: "https://picsur.service.fairy.host/i/d6e01a35-490e-4bd0-abb5-9985fdee7bf4.webp",
        title: "Sub Converter",
        desc: "Proxy client sub url converter.",
        link: "https://subconverter.product.fairies.ltd"
      },
      // {
      //   icon: "https://cdn.minioshare.cloud.fairies.ltd/images/icon/pingvin.png",
      //   title: "Pingvin Share",
      //   desc: "Pingvin Share - A file sharing service focused on data security and efficient transmission.",
      //   link: "https://pingvin.cloud.fairies.ltd",
      // },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/bitwarden.svg",
        title: "Bitwarden",
        desc: "Password management tool, providing secure storage and cross-device synchronization for your passwords, login information, and other sensitive data.",
        link: "https://bitwarden.cloud.fairies.ltd",
      },
    ]
  },
  {
    title: "🎉 Personal Portfolio",
    items: [
      {
        icon: "https://minioshare.service.fairy.host/images/icon/homepage.ico",
        title: "Personal Homepage",
        desc: "Explore Lionel Johnson's personal homepage to learn more about his professional skills and project experience.",
        link: "/"
      },
      {
        icon: "https://douban.product.fairy.host/img/logo64.6a86f768.svg",
        title: "Douban Movie Data Visualization",
        desc: "Douban Movie Data Visualization - Explore trends and insights of the movie world through graphical representation of rich data.",
        link: "https://douban.product.fairy.host"
      },
      {
        icon: "https://picsur.service.fairy.host/i/d6e01a35-490e-4bd0-abb5-9985fdee7bf4.webp",
        title: "Sub Converter",
        desc: "Proxy client sub url converter.",
        link: "https://subconverter.product.fairy.host"
      },
    ]
  },
  {
    title: "Python Modules",
    items: [
      {
        icon: "https://minioshare.service.fairy.host/images/icon/python.svg",
        title: "Lionel Johnson's Framework",
        desc: "Lionel Johnson's Framework - A Flexible Python Framework for Rapid Development and Innovation.",
        link: "https://github.com/AustinFairyland/AustinFramework"
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/python.svg",
        title: "Lionel Johnson Daily Module - PyPI",
        desc: "Daily updated Python modules offering practical functions and tools.",
        link: "https://github.com/AustinFairyland/AustinModuleDaily"
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/python.svg",
        title: "Lionel Johnson Fairyland Module - PyPI",
        desc: "Lionel Johnson's Python module collection is full of innovation and practicality.",
        link: "https://github.com/AustinFairyland/AustinFairylandRepository"
      },
    ]
  },
  {
    title: "PyPI",
    items: [
      {
        icon: "https://minioshare.service.fairy.host/images/icon/pypi.svg",
        title: "Lionel Johnson Daily Module",
        desc: "Daily updated Python modules offering practical functions and tools.",
        link: "https://pypi.org/project/Lionel Johnson-module-daily/"
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/pypi.svg",
        title: "Lionel Johnson Fairyland Module",
        desc: "Lionel Johnson's Python module collection is full of innovation and practicality.",
        link: "https://pypi.org/project/pyfairyland/"
      },
    ]
  },
  {
    title: "Docker Image",
    items: [
      {
        icon: "https://minioshare.service.fairy.host/images/icon/docker.svg",
        title: "Auto commit git",
        desc: "Automatic Git Commit Tool, ensuring continuous integration and version control of code.",
        link: "https://hub.docker.com/r/austinfairyland/auto-git-commit"
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/docker.svg",
        title: "Douban API",
        desc: "Douban API - Access a wealth of movie and book information to expand your application's features.",
        link: "https://hub.docker.com/r/austinfairyland/douban-api"
      },
    ]
  },
  {
    title: "Python Project",
    items: [
      {
        icon: "https://minioshare.service.fairy.host/images/icon/python.svg",
        title: "Automatic Git Submission",
        desc: "Automate your Git commit process, optimizing your code management and collaboration.",
        link: "https://github.com/AustinFairyland/AustinPersAutoGitCommit"
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/python.svg",
        title: "Douban Movie Data Crawler",
        desc: "Efficiently crawls Douban movie data, providing strong support for data analysis and application development.",
        link: "https://github.com/AustinFairyland/AustinPersDoubanFilmSpider"
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/python.svg",
        title: "Douban Movie Data Visualization API",
        desc: "Provide a visual interface for Douban movie data to enhance the intuitiveness and interactivity of data presentation.",
        link: "https://github.com/AustinFairyland/AustinPersDoubanFilmAPI"
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/python.svg",
        title: "CTWing - Edge Cloud Computing",
        desc: "Explore the edge computing capabilities of Tianyi Cloud to provide efficient and reliable cloud services for applications.",
        link: "https://github.com/AustinFairyland/AceProjectCTCloudEOPAuth"
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/python.svg",
        title: "Weather Identification API",
        desc: "Real-time Weather Identification API, providing accurate meteorological information for your application.",
        link: "https://github.com/AustinFairyland/work_weather_identify_runnet_backend"
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/python.svg",
        title: "Airspace Safety Zone Mapping",
        desc: "Accurately delineate airspace safety zones to ensure aviation safety and flight route planning.",
        link: "https://github.com/AustinFairyland/work_safe_runnet_service"
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/python.svg",
        title: "Food Ordering WeChat Mini Program API",
        desc: "WeChat Mini Program API - Provides efficient and stable backend support for the ordering system.",
        link: "https://github.com/AustinFairyland/work_order_food_jid_service"
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/python.svg",
        title: "Order Data Cleaning, Analysis, and Visualization",
        desc: "Clean and analyze meal ordering data, provide intuitive visual reports and insights.",
        link: "https://github.com/AustinFairyland/work_order_food_data_clean_jid_service"
      }
    ]
  },
  {
    title: "GoLong Project",
    items: [
      {
        icon: "https://minioshare.service.fairy.host/images/icon/golang.svg",
        title: "Goland",
        desc: "Goland Project - Exploring Efficient Programming and Application Development with Go Language.",
        link: "https://github.com/AustinFairyland/other_none_golang_go1"
      },
    ]
  },
  {
    title: "Java Project",
    items: [
      {
        icon: "https://minioshare.service.fairy.host/images/icon/java.svg",
        title: "Based on HarmonyOS Accounting Book",
        desc: "Using the HarmonyOS-developed accounting app, managing finances becomes simpler and more efficient.",
        link: "https://github.com/AustinFairyland/other_none_harmony_android"
      },
    ]
  },
  {
    title: "Vue&Vite Project",
    items: [
      {
        icon: "https://minioshare.service.fairy.host/images/icon/vite.svg",
        title: "Personal Homepage",
        desc: "A personal homepage built with VitePress, showcasing Lionel Johnson's technical expertise and creativity.",
        link: "https://github.com/AustinFairyland/AustinHomePage"
      },
      {
        icon: "https://minioshare.service.fairy.host/images/icon/vue.svg",
        title: "Douban Movie Data Visualization",
        desc: "A Vue-based Douban Movie Data Visualization Project, graphically showcasing the diversity of the movie world.",
        link: "https://github.com/AustinFairyland/AustinPersDoubanFilmWeb"
      }
    ]
  },
  {
    title: "Mini Project",
    items: [
      {
        icon: "https://minioshare.service.fairy.host/images/icon/miniprogram.svg",
        title: "WeChat Mini Program - Ordering System",
        desc: "WeChat Mini Program - A convenient ordering system that offers fast food ordering and management features.",
        link: "https://github.com/AustinFairyland/work_order_food_jid_mini_program"
      },
    ]
  },
]
