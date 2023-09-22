<script setup >

import { ref } from 'vue'
import { ElInput, ElFormItem } from 'element-plus';
var username = ref('')
var password = ref('')
defineProps(['loginForm'])


</script>
<template>
    <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
    </el-form-item>
</template>


<style scoped></style>
