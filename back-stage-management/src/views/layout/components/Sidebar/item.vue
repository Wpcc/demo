<template>
  <div>
    <router-link v-if="!route.meta" :to="fullUrl(route.children[0].path)">
      <el-menu-item :index="fullUrl(route.children[0].path)">
        <span>{{route.children[0].meta.title}}</span>
      </el-menu-item>
    </router-link>
    <template v-else>
      <el-submenu v-if="route.children" :index="fullUrl(route.path)"> <!--//nested: 1> baseUrl=/nested 2> baseUrl=/nested 3> baseUrl=/nested/menu1-->
        <template slot="title">
          <span>{{route.meta.title}}</span>
        </template>
        <Item v-for="item in route.children" :route="item" :key="fullUrl(item.path)" :baseUrl="fullUrl(route.path)"></Item>
      </el-submenu>
      <router-link v-else :to="fullUrl(route.path)">
        <el-menu-item :index="fullUrl(route.path)">
          <span>{{route.meta.title}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>
<script>
  import path from 'path'
  export default {
    name: 'Item',
    props: {
      route: {
        type: Object,
        required: true
      },
      baseUrl: {
        type: String,
        required: true
      }
    },
    methods: {
      fullUrl (url = '') {
        return path.resolve(this.baseUrl, url)
      }
    }
  }
</script>
