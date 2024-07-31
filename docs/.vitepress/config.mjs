import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "晨曦工作室",
  description: "Chenxi Studio's homepage",

  themeConfig: {

    logo: '/logo.png',

    outline: {
      label: '目录'
    },

    nav: [
      { text: '项目', link: '/pages/projects' },
      { text: '动态', link: '/pages/latest' },
      { text: '公告', link: '/pages/bulletin' },
      { text: '关于', link: '/pages/about' },
      { text: 'GitHub', link: 'https://github.com/Chenxi-Studio'},
      { text: '友情链接', 
        items: [
          { text: 'FDCS', link: 'https://cs.fudan.edu.cn' },
        ]
      }
    ],

  }
})
