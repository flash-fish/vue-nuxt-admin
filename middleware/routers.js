export default function({ route, redirect }) {
  // 重定向到首页
  if (route.path === '/' || route.path === '') redirect({ path: '/home' })

  // 构建页面面包屑信息
  route.matched.forEach((s, i) => (s.meta = route.meta[i]))

  window.scrollTo(0, 0)
}
