import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "阿鲁米ARUMI",
  description: "欧标铝型材DIY玩家手册",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [2, 4],    // 显示 h2 到 h4 级别的标题
			label: '内容导航', // 大纲的标题
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '玩家手册', link: '/quick-start/quick-start' },
      { <a href="/alm-tool.html" rel="external">承重计算器</a> }
    ],

    sidebar: [
      {
        text: '入门',
        collapsed: true,
        items: [
          { text: '基础知识', link: '/quick-start/基础知识' },
          { text: '连接方式', link: '/quick-start/quick-start#installation' },
          { text: 'DIY工具', link: '/quick-start/quick-start#basic-setup' },
          { text: '配件库', link: '/quick-start/quick-start#configuration' }
        ]
      },
      {
        text: '认识铝型材',
        collapsed: true,
        items: [
          { text: '欧标铝型材', link: '/advanced/custom-theme' },
          { text: '配件库', link: '/advanced/markdown-extensions' },
          { text: '非标', link: '/advanced/code-highlighting' }
        ]
      },
      {
        text: '连接方式',
        collapsed: true,
        items: [
          { text: '基础知识', link: '/quick-start/quick-start#build-for-production' },
          { text: '连接方式', link: '/quick-start/quick-start#deploy-to-github-pages' },
          { text: '技巧', link: '/quick-start/quick-start#netlify-deployment' }
        ]
      },
      {
        text: '工具',
        items: [
          { text: '参考资料', link: '/examples/markdown-examples' },
          { text: '案例分享', link: '/examples/api-examples' }
        ]
      }
    ],

//    socialLinks: [
//      { icon: 'github', link: 'https://github.com/TencentEdgeOne/pages-templates/tree/main/examples/vitepress-template' }
//    ]
  }
})
