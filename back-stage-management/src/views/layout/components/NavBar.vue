<template>
  <div>
    <Hamburger class="c-hamburger" :isActive="true" :toggleClick="toggleClick"></Hamburger>
    <div class="c-userInfo">
      <el-dropdown trigger="click">
      <div class="el-dropdown-link c-admin-box">
        <img class="c-avatar" :src="avatar" alt="">
        <span class="c-name">{{ name }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item><span @click="exit">退出</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  import Hamburger from '@/components/Hamburger.vue'
  import { logout } from '@/api/login'
  import { getToken, removeToken } from '@/utils/auth.js'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      Hamburger
    },
    computed: {
      ...mapGetters(['name', 'avatar'])
    },
    methods: {
      toggleClick () {
        console.log('hello')
      },
      exit () {
        logout(getToken())
          .then(response => { // 由于axios做了封住，故能直接使用返回数据
            if (response.code === 20000) {
              removeToken()
              window.location.reload()
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
<style lang="less">
  .c-hamburger{
    display: inline-block;
    margin-top: 15px;
    margin-left: 20px;
  }
  .c-userInfo{
    float: right;
    height: 50px;
    line-height: 50px;
    margin-right: 10px;
    cursor: pointer;

    .c-avatar{
      margin-top: 5px;
      margin-right:5px;
      width:40px;
      height:40px;
      border-radius: 20px;
      display: block;
      float: left;
    }
    .c-admin-box{
      height: 50px;
      line-height: 50px;

    }
  }

</style>
