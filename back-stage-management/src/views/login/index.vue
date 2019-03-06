<template lang="html">
  <div class="c-login">
    <el-form :label-position="labelPosition" label-width="80px" :model="form" class="c-form">
      <h3 class="c-title">vue-front-management</h3>
      <el-form-item label="name">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {login} from '@/api/login.js'
  import {setToken} from '@/utils/auth.js'
  export default {
    name: "login",
    data () {
      return {
        labelPosition: 'left',
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit () {
        // 1.数据验证
        // 2.数据提交
        login(this.form.username, this.form.password)
          .then(res => {
            res = res.data
            //存储到cookie中
            setToken(res.token)
            this.$router.push('/')
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style lang="less" scoped>
  @bg : #2d3a4b;
  .c-login{
    width: 100%;
    height: 100%;
    background-color: @bg;
  }
  .c-title{
    font-size: 26px;
    color: #eee;
    text-align: center;
    margin-bottom: 40px;
  }
  .c-form{
    width: 520px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
