<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
        <div class="form-group">
            <label>姓名</label>
            <input v-model="formData.name" type="text" class="form-control" placeholder="name" id="name">
        </div>
        <div class="form-group">
            <label>性别</label>
            <input v-model="formData.gender" type="text" class="form-control" placeholder="gender" id="genter">
        </div>
        <button @click.prevent="handleAdd" type="submit" class="btn btn-success">添加</button>
        </form>
    </div>
</template>

<script>
// 1  添加 绑定文本 v-model   2 绑定添加事件 3  发送请求
import axios from 'axios'
export default {
    data() {
        return {
            //绑定表单元素
            formData : {
                name : '',
                gender : ''
            }

        }
    },
    methods:{
       handleAdd() {
            axios
            .post('http://localhost:3000/heroes', this.formData)
            .then((res)=>{
                const {status, data} = res
                if (status === 201) {
                    //跳转到英雄列表
                    // 注意阻止按钮的默认行为
                    this.$router.push({ name: 'heroes' })
                } else {
                    alert('添加失败')
                }
            })
       }
    }
}
</script>

<style>

</style>
