import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "larry's blog",
  description: "Hey! This is yujian(larry)'s blog. Welcome to visit.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'My Resume', link: 'https://resume.larryxue.dev/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/larry-xue' },
      { icon: 'linkedin', link: 'linkedin.com/in/yujay-xue-588386212/' },
      { icon: 'discord', link: 'https://discordapp.com/users/lopy6948'},
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      dir: 'en',
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '关于我', link: '/zh/about' },
          { text: '我的简历', link: 'https://resume.larryxue.dev/' }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/zh/markdown-examples' },
              { text: 'Runtime API 示例', link: '/zh/api-examples' }
            ]
          }
        ]
      }
    }
  },
})
