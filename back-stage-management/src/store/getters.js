export default {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  name: state => state.user.roles.name,
  avatar: state => state.user.roles.avatar,
  routes: state => state.user.roles.routes
}
