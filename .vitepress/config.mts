// .vitepress/config.mts
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "阿鲁米ARUMI",
  description: "欧标铝型材DIY玩家手册",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,

  themeConfig: {
  search: {
    provider: 'local',
    // 语言key改为与站点lang一致的"zh-CN"
    locales: {
      'zh-CN': { 
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            placeholder: '输入关键词搜索', // 新增：搜索框的中文占位符
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  },

    // 2. outline, nav, sidebar 也都是 themeConfig 的直接子项
    //    它们与 search 是同级关系
    outline: {
      level: [2, 4],    // 显示 h2 到 h4 级别的标题
      label: '内容导航', // 大纲的标题
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
          // 注意：这里的链接需要与你实际的文件路径对应
          // 例如，如果你的文件是 pages/advanced/欧标铝型材.md，那么链接就是 /advanced/欧标铝型材
          { text: '欧标铝型材', link: '/advanced/欧标铝型材' }, 
          { text: '配件库', link: '/advanced/配件库' },
          { text: '非标', link: '/advanced/非标' }
        ]
      },
      {
        text: '连接方式',
        collapsed: false,
        items: [
          // 同样，这里的链接也需要修正
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

    // socialLinks 配置可以按需开启
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/your-repo' }
    // ]
  }
})
