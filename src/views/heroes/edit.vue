<template>
    <div>
        <h2 class="sub-header">编辑英雄</h2>
        <form>
        <div class="form-group">
            <label for="name">姓名</label>
            <input v-model="formData.name" type="text" class="form-control" placeholder="name" id="name">
        </div>
        <div class="form-group">
            <label for="gender">性别</label>
            <input v-model="formData.gender" type="text" class="form-control" placeholder="gender" id="genter">
        </div>
        <button @click.prevent="handleEdit" type="submit" class="btn btn-success">编辑</button>
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
            },
            heroId: -1
        }
    },
    created() {
        this.heroId = this.$route.params.id
        // console.log(this.heroId)
        this.loadData()
    },
    methods:{
       loadData(){
           axios
              .get(`http://localhost:3000/heroes/${this.heroId}`)
              .then((res)=>{
                  if (res.status === 200) {
                      this.formData = res.data
                  }
              })
       },
       handleEdit() {
            axios
            .put(`http://localhost:3000/heroes/${this.heroId}`, this.formData)
            .then((res)=>{
                if (res.status === 200) {
                    //跳转到英雄列表
                    // 注意阻止按钮的默认行为
                    this.$router.push({ name: 'heroes' })
                } else {
                    alert('修改失败')
                }
            })
       }
    }
}
</script>

<style>

</style>
