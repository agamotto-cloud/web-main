<script setup >

import { ref } from 'vue'
import { ElForm, ElTabPane, ElCard, ElTabs, ElButton } from 'element-plus';

import BaseLogin from './components/BaseLogin.vue'
import PhoneLogin from './components/PhoneLogin.vue'
const formRef = ref()
const loginForm = ref({
  type: "base",
})

function login() {
  console.log('login', loginForm.value)

}



</script>
<template>
  <div class="login-container">
    <el-card class="box-card">
      <el-form ref="formRef" :model="loginForm" label-width="auto">
        <el-tabs v-model="loginForm.type" :stretch="true">
          <el-tab-pane label="账号密码" name="base">
            <base-login :loginForm="loginForm"></base-login>
          </el-tab-pane>
          <el-tab-pane label="手机号" name="phone">
            <phone-login :loginForm="loginForm"></phone-login>
          </el-tab-pane>
        </el-tabs>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form>
    </el-card>

  </div>
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
