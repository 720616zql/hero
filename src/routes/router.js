// 导入
import Vue from 'vue'
import VueRouter from 'vue-router'
// 创建组件
import HeroList from '../views/heroes/list.vue'
import EquipList from '../views/equips/list.vue'
import WeaponList from '../views/weapons/list.vue'
//创建添加组件
import HeroAdd from '../views/heroes/add.vue'
//编辑编辑组件
import HeroEdit from '../views/heroes/edit.vue'
//注册插件
Vue.use(VueRouter)
const router = new VueRouter({
    linkExactActiveClass: 'active',  
    routes: [
        // 路由规则
        { name: 'home', path:'/', redirect:{name:'heroes'}},
        { name: 'heroes', path: '/heroes', component: HeroList },
        { name: 'weapons', path: '/weapons', component: WeaponList },
        { name: 'equips', path: '/equips', component: EquipList },
        // 添加操作
        { name: 'heroAdd', path:'/heroes/add', component:HeroAdd},
        { name: 'heroEdit', path:'/heroes/edit/:id', component:HeroEdit}
    ]
})
// 导出
export default router