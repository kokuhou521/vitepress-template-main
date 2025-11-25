// .vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN', // 站点默认语言
  title: "阿鲁米ARUMI",
  description: "欧标铝型材DIY玩家手册",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,

  themeConfig: {
    // 👇 新增：主题本地化配置（搜索翻译在这里！）
    locales: {
      // 键是语言路径（'/' 表示默认语言），值是该语言的配置
      '/': {
        // 站点名称（可选，会覆盖顶层的 title）
        label: '中文',
        // 搜索相关翻译（核心！）
        search: {
          placeholder: '输入关键词搜索',
          noResultsText: '无法找到相关结果',
          resetButtonTitle: '清除查询条件',
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    // 👇 保留你原来的 search 配置（只留 provider: 'local'，删掉 locales）
    search: {
      provider: 'local' // 必须是 local 才支持本地搜索
    },

    // 其他配置不变（outline/nav/sidebar）
    outline: {
      level: [2, 4],
      label: '内容导航'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '玩家手册', link: '/book/基础知识' },
      { text: '承重计算器', link: '/alm-tool.html', target: '_self' }
    ],
    sidebar: [
      {
        text: '入门',
        collapsed: false,
        items: [
          { text: '基础知识', link: '/book/基础知识' },
          { text: '连接方式', link: '/book/连接方式' },
          { text: 'DIY工具', link: '/book/DIY工具' },
          { text: '配件库', link: '/book/配件库' }
        ]
      },
      {
        text: '认识铝型材',
        collapsed: false,
        items: [
          { text: '欧标铝型材', link: '/advanced/欧标铝型材' },
          { text: '配件库', link: '/advanced/配件库' },
          { text: '非标', link: '/advanced/非标' }
        ]
      },
      {
        text: '连接方式',
        collapsed: false,
        items: [
          { text: '基础知识', link: '/connection/基础知识' },
          { text: '连接方式', link: '/connection/连接方式' },
          { text: '技巧', link: '/connection/技巧' }
        ]
      },
      {
        text: '工具',
        collapsed: false,
        items: [
          { text: '参考资料', link: '/examples/markdown-examples' },
          { text: '案例分享', link: '/examples/api-examples' }
        ]
      }
    ]
  }
})
