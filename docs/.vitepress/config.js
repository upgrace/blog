export default {
  title: 'Blog of Joly hou',
  description: 'Just playing around.',
  themeConfig: {
    nav: [
      { text: '技术分享', link: '/index' },
      { text: '个人学习', link: '/index' },
      { text: '关于作者', link: '/index' }
    ],
    sidebar: [
      {
        text: '分享内容',
        items: [
          { text: '广告类型', link: '/adType' },
          { text: '技术概览', link: '/schema' },
          { text: '前端迭代', link: '/iteration' },
          { text: '指导思想', link: '/growUp/think'},
          { text: '实践原则', link: '/growUp/principle'}
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present joly Hou'
    }
  }
}
