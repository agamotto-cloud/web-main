<script setup >

import { ref } from 'vue'
import { ElForm, ElTabPane, ElCard, ElTabs, ElButton } from 'element-plus';

import BaseLogin from './components/BaseLogin.vue'
import PhoneLogin from './components/PhoneLogin.vue'
import Github from './components/oauth/Github.vue'
import Wechat from './components/oauth/Wechat.vue'

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
        <div style="text-align: center;">
          <el-button type="primary" @click="login">登录</el-button>
        </div>
      </el-form>
      <br />
      <hr style="margin: 20px -20px; border-width: 1px;" />
      <div class="oath-list">
        <github />
        <wechat />
      </div>
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

.box-card {
  width: 350px;
}

.oath-list {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.oath-list>div {
  display: block;
  width: 60px;
  text-align: center;
  padding: auto;

}
</style>
