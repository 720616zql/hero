<template>
  <div>
      <!-- 取走头部 -->
        <app-header></app-header>
        <div class="container-fluid">
          <div class="row">
            <!-- 取走sidebar -->
            <app-sidebar></app-sidebar>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
             <!-- q取走 英雄显示部分  占位 -->
             <router-view></router-view>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
// 导入header 组件
    import AppHeader from './components/AppHeader.vue'
    import AppSidebar from './components/AppSidebar.vue'
// es6导出模块
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    AppHeader,
    AppSidebar
  }
}
</script>
  
<style>

</style>
