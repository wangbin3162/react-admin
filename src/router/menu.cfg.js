export default [
  {
    title: '首页',
    key: '/home',
    icon: 'iconhome'
  },
  {
    title: '组件',
    key: '/components',
    icon: 'icondashboard',
    children: [
      { title: '按钮', key: '/components/buttons' },
      { title: '弹窗', key: '/components/modal' },
      { title: 'Loading', key: '/components/loading' },
      { title: '通知提醒', key: '/components/notice' },
      { title: '标签页', key: '/components/tabs' },
      { title: '图片画廊', key: '/components/gallery' }
    ]
  }
]