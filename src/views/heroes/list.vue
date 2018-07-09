<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
            <!-- <a class="btn btn-success" href="add.html">添加</a> -->
            <router-link :to="{name:'heroAdd'}" class="btn btn-success" >添加</router-link>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :key="item.id" v-for="(item, index) in list">
                        <td> {{index + 1 }} </td>
                        <td> {{item.name}} </td>
                        <td> {{item.gender}} </td>
                        <td>
                        <!-- <a href="edit.html">编辑</a> -->
                        <!-- <router-link :to="`/heroes/edit/${item.id}`">编辑</router-link> -->
                        <router-link :to="{ name: 'heroEdit', params: { id: item.id } }">编辑</router-link>
                        &nbsp;&nbsp;
                        <!-- <a href="javascript:window.confirm('Are you sure?')">删除</a> -->
                        <a href="#" @click.prevent="handleDelete(item.id)">删除</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>
//引入 axios
import axios from 'axios'

export default {
    data() {
        return {
            list:[]
        }
    },
    // 钩子函数  
    created() {
        this.loadData()
    },
    methods: {
        // 查询 显示界面
        loadData() {
            axios
                .get('http://localhost:3000/heroes')
                .then((res)=>{
                    const {status, data} = res
                    if (status===200) {
                        this.list = data
                    }
                })
        },
        // 删除操作
        handleDelete (id) {
            // 判断是否删除
            if (!confirm('确定删除么')) {
                return
            }
            axios
                .delete(`http://localhost:3000/heroes/${id}`)
                .then((res)=>{
                    if (res.status === 200) {
                        this.loadData()
                    } else {
                        alert('删除失败')
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
    
}
</script>

<style>

</style>

