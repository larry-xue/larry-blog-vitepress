import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "larry's blog",
  description: "Hey! This is yujian(larry)'s blog. Welcome to visit.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/larry-xue' },
      { icon: 'linkedin', link: 'linkedin.com/in/yujay-xue-588386212/' },
      { icon: 'discord', link: 'https://discordapp.com/users/lopy6948' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Larry Xue'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        },
      }
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '关于我', link: '/about' },
          { text: '文章', link: '/posts/index.md' },
          { text: '我的简历', link: 'https://resume.larryxue.dev/' }
        ],
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      dir: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About', link: '/en/about' },
          { text: 'My Resume', link: 'https://resume.larryxue.dev/' }
        ],
      }
    },
  }
})
