<template>
    <div class="nav-left">
        <div class="user-info">
            <img class="avatar" src="https://via.placeholder.com/150" alt="avatar" />
            <span class="username">John Doe</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                <i class="el-icon-setting">123334555555553</i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile">个人信息</el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script setup >
import { ElDropdownMenu, ElDropdownItem, ElDropdown } from 'element-plus';

function handleCommand(command) {
    if (command === 'profile') {
        // 跳转到个人信息页面
        window.location.href = '/profile'
    } else if (command === 'logout') {
        // 执行退出登录操作,应该是调用接口后清除token然后跳到登录页
        fetch('/logout').then(() => {
            window.location.href = '/login'
        }).catch(() => {
            console.error('退出登录失败')
            window.location.href = '/login'
        })

    }
}


</script>

<style scoped>
.nav-left {
    display: flex;
    align-items: right;
    justify-content: flex-end;
    height: 100%;
    padding-right: 20px;
}

.user-info {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.username {
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
}
</style>
