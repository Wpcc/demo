<template>
  <div class="c-container">
    <Sidebar class="sidebar"></Sidebar>
    <div class="rightbar">
      <NavBar class="navbar"></NavBar>
      <Main class="main"></Main>
    </div>
  </div>
</template>
<script>
  import NavBar from './components/NavBar'
  import Sidebar from './components/Sidebar'
  import Main from './components/Main'

  export default {
    components:{
      NavBar,
      Main,
      Sidebar
    }
  }
</script>
<style lang="less">
  @sidebar-bg : rgb(48, 65, 86);
  @navbar-bg : #ccc;

  html,body {
    height: 100%;
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  .c-container {
    width: 100%;
    height: 100%;
  }
  .sidebar {
    width: 200px;
    height: 100%;
    position: fixed;
    background-color: @sidebar-bg;
  }
  .rightbar {
    margin-left: 200px;
    width: calc(100% - 200px);
    height: 100%;

    .navbar {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #e6e6e6;
    }
    .main {
      width: 100%;
    }
  }

</style>
