<template>
    <div>
        <h2 class="sub-header">装备列表</h2>
            <a class="btn btn-success" href="add.html">添加</a>
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
                        <a href="edit.html">编辑</a>
                        &nbsp;&nbsp;
                        <a href="javascript:window.confirm('Are you sure?')">删除</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
