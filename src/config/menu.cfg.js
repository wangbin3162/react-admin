export default [
  {
    title: '首页',
    key: '/admin/home',
    icon: 'iconhome'
  },
  {
    title: '组件',
    key: '/admin/components',
    icon: 'icondashboard',
    children: [
      { title: '按钮', key: '/admin/components/buttons' },
      { title: '弹窗', key: '/admin/components/modal' },
      { title: 'Loading', key: '/admin/components/loading' }
    ]
  }
]