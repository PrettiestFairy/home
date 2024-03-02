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
    title: 'Commonly Used Tools',
    items: [
      {
        icon: 'https://qwerty.fe-mm.com/apple-touch-icon.png',
        title: 'Qwerty Learner',
        desc: 'Software Designed for Keyboard Workers: Word Memory and English Muscle Memory Training',
        link: 'https://qwerty.fe-mm.com',
      },
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: 'Front-end API Compatibility Inquiry',
        link: 'https://caniuse.com',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: 'Online Image Compression Tool',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: 'Developer\'s Arsenal',
        desc: 'Developer\'s Arsenal: The Most Professional and Useful Toolkit for Developers',
        link: 'https://devtool.tech',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: 'Online Tools',
        desc: 'Developer\'s Toolbox',
        link: 'https://tool.lu',
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'JSON Chinese Network',
        desc: 'JSON Online Parsing and Format Validation',
        link: 'https://www.json.cn',
      },
    ],
  },
  {
    title: 'AI Navigation',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT（The Strongest）',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI（Notes）',
        link: 'https://www.notion.so',
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney（Painting）',
        link: 'https://www.midjourney.com',
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai（PPT）',
        link: 'https://www.beautiful.ai',
      },
    ],
  },
  {
    title: 'React ecosystem',
    items: [
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        desc: 'JavaScript library for building user interfaces',
        link: 'https://zh-hans.reactjs.org',
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'Declarative Routing in React',
        link: 'https://reactrouter.com',
      },
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        desc: 'A React framework for the Web',
        link: 'https://nextjs.org',
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: 'UmiJS',
        desc: 'Pluggable Enterprise-Level Frontend Application Framework',
        link: 'https://umijs.org',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: 'A set of enterprise-grade UI design language and React component library.',
        link: 'https://ant.design',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        title: 'Ant Design Mobile',
        desc: 'React Component Library for Building Mobile Web Applications',
        link: 'https://mobile.ant.design',
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: 'A small, fast, and scalable React state management solution.',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: 'Valtio',
        desc: 'makes proxy-state simple for React and Vanilla',
        link: 'https://valtio.pmnd.rs',
      },
      {
        icon: 'https://jotai.org/favicon.svg',
        title: 'Jotai',
        desc: 'primitive and flexible state management for React',
        link: 'https://jotai.org',
      },
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        desc: 'State container for JavaScript applications, providing predictable state management.',
        link: 'https://cn.redux.js.org',
      },
      {
        icon: 'https://zh.mobx.js.org/assets/mobx.png',
        title: 'MobX',
        desc: 'A Small, Fast, and Scalable State Management Solution for React',
        link: 'https://zh.mobx.js.org',
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: 'A high-quality, reliable library of React Hooks',
        link: 'https://ahooks.js.org/zh-CN',
      },
    ],
  },
  {
    title: 'Vue Ecosystem',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: 'Progressive JavaScript Framework',
        link: 'https://cn.vuejs.org',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 2',
        desc: 'Progressive JavaScript Framework',
        link: 'https://v2.cn.vuejs.org',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Official Routing for Vue.js\nEmpowering Vue.js with Expressive, Configurable, and Convenient Routing',
        link: 'https://router.vuejs.org/zh',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: 'Intuitive State Management Library for Vue.js',
        link: 'https://pinia.vuejs.org/zh',
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        desc: 'A Universal App Framework Based on Vue.js',
        link: 'https://nuxt.com',
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'A Toolkit for Vue Composition API',
        link: 'https://vueuse.org',
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: 'A Component Library for Designers and Developers Based on Vue 3',
        link: 'https://element-plus.org',
      },
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design\'s Vue Implementation for Enterprise-Level Backstage Products',
        link: 'https://antdv.com',
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        desc: 'A Lightweight and Customizable Mobile Vue Component Library',
        link: 'https://vant-ui.github.io/vant',
      },
      {
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
        title: 'Cube UI',
        desc: 'A Refined Mobile UI Component Library Based on Vue.js',
        link: 'https://didi.github.io/cube-ui',
      },
      {
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
        title: 'NutUI',
        desc: 'A Lightweight Mobile Component Library with JD Style',
        link: 'https://nutui.jd.com',
      },
    ],
  },
  {
    title: 'JavaScript Frameworks and Libraries',
    items: [
      {
        icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
        title: 'Svelte',
        desc: 'Converting Declarative Components to Precise and Efficient DOM-updating JavaScript Code',
        link: 'https://svelte.dev',
      },
      {
        // icon: 'https://simpleicons.org/icons/jquery.svg',
        icon: '/icons/jquery.svg',
        title: 'jQuery API Documentation in Chinese',
        desc: 'A Cross-browser JavaScript Framework',
        link: 'https://jquery.cuishifeng.cn',
      },
    ],
  },
  {
    title: 'CSS Related',
    items: [
      {
        icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
        title: 'PostCSS',
        desc: 'A JavaScript Tool for Converting CSS',
        link: 'https://postcss.org',
      },
      {
        icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        title: 'Sass',
        desc: 'A Mature, Stable, and Powerful Professional-grade CSS Extension Language',
        link: 'https://sass-lang.com',
      },
      {
        icon: 'https://www.tailwindcss.cn/apple-touch-icon.png',
        title: 'TailwindCSS Chinese',
        desc: 'A Utility-first CSS Framework',
        link: 'https://www.tailwindcss.cn',
      },
    ],
  },
  {
    title: 'Mini Program Related',
    items: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: 'WeChat Mini Program Documentation',
        desc: 'Official WeChat Mini Program Developer Documentation',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
      },
      {
        icon: '/icons/taro.svg',
        title: 'Taro',
        desc: 'Multi-platform Unified Development Solution',
        link: 'https://taro.jd.com',
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        desc: 'A Framework for Developing All Frontend Applications with Vue.js',
        link: 'https://uniapp.dcloud.net.cn',
      },
      {
        icon: 'https://mpxjs.cn/favicon.ico',
        title: 'Mpx',
        desc: 'Enhanced Cross-platform Mini Program Framework',
        link: 'https://mpxjs.cn',
      },
    ],
  },
  {
    title: 'Node Related',
    items: [
      {
        icon: '/icons/nodejs.svg',
        title: 'Node.js',
        desc: 'Node.js is a JavaScript runtime environment built on the Chrome V8 engine.',
        link: 'https://nodejs.org/zh-cn',
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        desc: 'A Fast, Open, and Minimalist Web Development Framework on the Node.js Platform',
        link: 'https://expressjs.com',
      },
      {
        icon: '/icons/koa.svg',
        title: 'Koa',
        desc: 'The Next Generation of Web Development Frameworks on the Node.js Platform',
        link: 'https://koajs.com',
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        desc: 'Built for Enterprise-grade Frameworks and Applications',
        link: 'https://www.eggjs.org/zh-CN',
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js Chinese Documents',
        desc: 'A Progressive Node.js Framework for Building High-performance and Scalable Server-side Applications',
        link: 'https://docs.nestjs.cn',
      },
    ],
  },
  {
    title: 'Visualization',
    items: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: 'A JavaScript-based open-source charting library',
        link: 'https://echarts.apache.org/zh/index.html',
      },
      {
        icon: 'https://antv.vision/icons/icon-72x72.png',
        title: 'AntV',
        desc: 'Ant Group\'s cutting-edge data visualization solution, leveraging innovative technologies to empower users with powerful and flexible data visualization capabilities.',
        link: 'https://antv.vision/zh/',
      },
      {
        icon: 'https://d3js.org/favicon.png',
        title: 'D3.js',
        desc: 'A JavaScript library for data visualization that follows web standards',
        link: 'https://d3js.org',
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: 'A simple and flexible JavaScript charting library',
        link: 'https://www.chartjs.org',
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: 'Three.js',
        desc: 'JavaScript 3d Libs',
        link: 'https://threejs.org',
      },
    ],
  },
  {
    title: 'Compile & Build & Package',
    items: [
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack Chinese Website',
        desc: 'A static module bundler for modern JavaScript applications',
        link: 'https://www.webpackjs.com',
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite Chinese Documents',
        desc: ' The next generation of frontend toolchains',
        link: 'https://cn.vitejs.dev',
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        desc: 'Rollup is a JavaScript module bundler',
        link: 'https://www.rollupjs.com',
      },
      {
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        title: 'Turbo',
        desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
        link: 'https://turbo.build',
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: 'Babel is a JavaScript compiler',
        link: 'https://www.babeljs.cn',
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        desc: 'An extremely fast bundler for the web',
        link: 'https://esbuild.github.io',
      },
      {
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        title: 'SWC',
        desc: 'Rust-based platform for the Web',
        link: 'https://swc.rs',
      },
    ],
  },
  {
    title: 'Site generator',
    items: [
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: 'A modern, lightweight static site generator',
        link: 'https://astro.build',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: 'A static site generator powered by Vite and Vue',
        link: 'https://vitepress.dev',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        desc: 'A Vue-powered static site generator',
        link: 'https://vuepress.vuejs.org/zh',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: 'A static site framework for component development based on Umi',
        link: 'https://d.umijs.org',
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        desc: 'A React-based static site generator',
        link: 'https://docusaurus.io/zh-CN',
      },
    ],
  },
  {
    title: 'Icon library',
    items: [
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        desc: 'A powerful domestic vector icon library with rich icon content, providing functions such as vector icon download, online storage, and format conversion.',
        link: 'https://www.iconfont.cn',
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        title: 'IconPark Icon library',
        desc: 'IconPark is an open-source icon library that uses technology to drive vector icon styles',
        link: 'https://iconpark.oceanengine.com/official',
      },
      {
        icon: 'https://emoji.muan.co/appicon.png',
        title: 'Emoji searcher',
        desc: 'Emoji Collection',
        link: '',
      },
    ],
  },
  {
    title: 'Front-end Development Materials',
    items: [
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN | Web Developer Manual',
        desc: 'Mozilla Developer Network (MDN): A comprehensive resource for web developers, providing detailed documentation on HTML, CSS, JavaScript, and a wide range of Web APIs.',
        link: 'https://developer.mozilla.org/zh-CN',
      },
      {
        icon: 'https://static.runoob.com/images/favicon.ico',
        title: 'Runoob',
        desc: 'Dreams are made possible with technology!',
        link: 'https://www.runoob.com',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Github',
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        desc: 'A hosting platform for open source and private software projects',
        link: 'https://github.com',
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: 'The largest tech Q&A website in the world',
        link: 'https://stackoverflow.com',
      },
      {
        title: 'Juejin',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: 'A platform for sharing and exchanging technical content for Chinese developers worldwide.',
        link: 'https://juejin.cn',
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: 'A place for sharing and discovery.',
        link: 'https://www.v2ex.com',
      },
      {
        title: 'SegmentFault',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: 'Technical Q&A Developer Community',
        link: 'https://segmentfault.com',
      },
      {
        title: 'CnBlogs',
        // icon: 'https://common.cnblogs.com/favicon.ico',
        icon: '/icons/cnblogs.svg',
        desc: 'CnBlogs is a knowledge-sharing community aimed at developers.',
        link: 'https://www.cnblogs.com',
      },
      {
        title: 'Zhihu',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: 'A high-quality Q&A community and original content platform for creators on the Chinese Internet.',
        link: 'https://juejin.cn',
      },
    ],
  },
  {
    title: 'Slacking Off Tool',
    items: [
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: 'Momoyu',
        desc: 'Aggregate daily hot, funny, and interesting news.',
        link: 'https://momoyu.cc',
      },
      {
        icon: 'https://v.qq.com/favicon.ico',
        title: 'Tencent Video',
        desc: 'China\'s leading online video media platform with a massive library of high-definition videos for online viewing.',
        link: 'https://v.qq.com',
      },
      {
        icon: 'https://static.hdslb.com/mobile/img/512.png',
        title: 'BiliBili',
        // desc: '',
        link: 'https://www.bilibili.com',
      },
      {
        icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
        title: 'YouTube',
        // desc: '',
        link: 'https://www.youtube.com',
      },
      {
        icon: '/icons/twitter.svg',
        title: 'Twitter',
        // desc: '',
        link: 'https://twitter.com',
      },
      {
        icon: '/icons/pixiv.png',
        title: 'Pixiv',
        // desc: '',
        link: 'https://www.pixiv.net',
      },
    ],
  },
]
