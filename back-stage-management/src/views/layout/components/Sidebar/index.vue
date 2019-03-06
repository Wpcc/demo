<template>
  <div class="w-sidebar">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
        text-color="#fff"
        :style="resetStyle">
        <template v-if="routes">
          <Item
            v-for="route in routes"
            v-if="!route.hidden"
            :route="route"
            :key="route.path"
            :baseUrl="route.path" >
          </Item>
        </template>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
  import Item from './item'
  export default {
    data () {
      return {
        resetStyle: {
          'border-right' : '1px solid #304156',
        }
      }
    },
    components: {
      Item
    },
    computed: {
      routes () {
        return this.$store.state.user.roles.routes
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

