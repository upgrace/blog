export default {
  title: 'Blog of Joly hou',
  description: 'Just playing around.',
  themeConfig: {
    nav: [
      { text: '首页', link: '/index' },
      { text: '开始', link: '/start' },
      {
        text: '内容',
        items: [
          { text: '现象', link: '/appearance/index' },
          { text: '原理', link: '/principle/index' }
        ]
      }
    ],
    sidebar: [
      {
        text: '引导',
        items: [
          { text: '首页', link: '/sidebar/guid/index' },
          { text: '使用组件', link: '/sidebar/guid/useComponent' }
        ]
      },
      {
        text: '思路',
        items: [
          { text: '首页', link: '/sidebar/solution/index' }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present joly Hou'
    }
  }
}
