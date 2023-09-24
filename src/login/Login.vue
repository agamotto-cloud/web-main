<script setup >

import { ref } from 'vue'
import { ElForm, ElTabPane, ElCard, ElTabs, ElButton,vLoading } from 'element-plus';

import BaseLogin from './components/BaseLogin.vue'
import PhoneLogin from './components/PhoneLogin.vue'
import Github from './components/oauth/Github.vue'
import Wechat from './components/oauth/Wechat.vue'

const formRef = ref()
const logiging = ref(false)

const loginForm = ref({
  type: "base",
})

function login() {
  console.log('login', loginForm.value)

}


//获取当前url的参数,如果有type和code,则是第三方登录回调
const url = window.location.href;
const urlObj = new URL(url);
const loginType = urlObj.searchParams.get('type');
const code = urlObj.searchParams.get('code');
if (loginType && code) {
  console.log('第三方登录回调', loginType, code)
  //先去除url中的这俩
  window.history.replaceState({}, 0, urlObj.origin + urlObj.pathname);
  logiging.value = true;
  console.log("登录中...",{
    type: loginType,
    code: code
  })
  //根据type和code,调用后端接口,获取用户信息,并登录
  //登录成功后,跳转到首页
  //window.location.href = "/#/home";
}

function logining(flag){
  logiging.value = flag;
}


</script>
<template>
  <div class="login-container">
    <el-card class="box-card" v-loading="logiging" element-loading-text="登陆中...">
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
        <github @logining="logining"/>
        <wechat @logining="logining"/>
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
  cursor: pointer; /* 添加可点击样式 */

}
</style>
