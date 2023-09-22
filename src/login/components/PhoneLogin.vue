<script setup >

import { ref } from 'vue'
import { ElInput, ElFormItem } from 'element-plus';

defineProps(['loginForm'])



</script>
<template>
    <el-form-item label="手机号" prop="phone">
        <el-input v-model="loginForm.phone"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code">
        <el-input type="code" v-model="loginForm.code"></el-input>
    </el-form-item>
</template>


<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background-size: cover;
}
</style>
