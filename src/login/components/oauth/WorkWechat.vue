

<script setup>
const emit = defineEmits(['logining'])

function onLogin() {
    //跳转到github授权页面,
    //先获取到当前页面的url
    //const url = window.location.href;
    console.log(window.location)
    var url = window.location.protocol + "//" + window.location.host + window.location.pathname;

    // 创建 URL 对象，传入基础 URL
    const oauthUrl = new URL("https://login.work.weixin.qq.com/wwlogin/sso/login");

    // 设置 URL 参数
    oauthUrl.searchParams.append('login_type', 'CorpApp')
    oauthUrl.searchParams.append('appid', 'ww425c7d2c05d1f9f5');
    oauthUrl.searchParams.append('redirect_uri', url);
    oauthUrl.searchParams.append('agentid', '1000002');
    oauthUrl.searchParams.append('state', 'wechat');
    //oauthUrl.searchParams.append('response_type', 'code');
    //oauthUrl.searchParams.append('scope', 'snsapi_privateinfo');
    emit('logining', true)
    // 跳转到这个 URL
    window.location.href = oauthUrl.toString();


}
</script>
<template>
    <div @click="onLogin">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 -2 30 27">
            <g fill="none" fill-rule="evenodd">
                <path fill="#0082F0"
                    d="M24.27 6.9a10.746 10.746 0 00-1.945-2.764C20.295 2.034 17.453.68 14.322.323a14.773 14.773 0 00-1.656-.096c-.511 0-1.044.03-1.585.089-3.144.342-6.002 1.69-8.047 3.792a10.757 10.757 0 00-1.955 2.757 9.634 9.634 0 00-1.003 4.277c0 1.909.58 3.79 1.678 5.442a14.96 14.96 0 002.302 2.634v.002l-.378 2.974c-.015.04-.031.08-.04.123-.01.039-.012.079-.016.119-.002.03-.01.06-.01.091 0 .033.008.065.01.098.05.489.458.872.96.872.175 0 .337-.05.478-.131l.014-.008c.02-.012.042-.023.062-.036l.903-.454 2.69-1.352a13.93 13.93 0 002.35.453 14.54 14.54 0 003.243-.009 14.092 14.092 0 003.173-.742 1.752 1.752 0 01-1.192-1.832c-.72.23-1.472.393-2.25.482a12.172 12.172 0 01-2.716.008c-.09-.01-.182-.025-.274-.037a11.976 11.976 0 01-1.78-.373 1.217 1.217 0 00-.37-.057c-.2 0-.392.053-.588.154-.026.014-.05.025-.076.04l-2.21 1.303-.096.057-.003.001c-.047.028-.075.039-.1.039a.15.15 0 01-.146-.153l.085-.345.098-.375.162-.614.179-.686a.93.93 0 00-.334-1.033 9.906 9.906 0 01-.923-.777c-.5-.475-.94-.994-1.31-1.55-.869-1.308-1.328-2.792-1.328-4.293 0-1.164.266-2.297.79-3.366a8.633 8.633 0 011.569-2.21c1.68-1.728 4.045-2.837 6.656-3.12.454-.05.901-.075 1.328-.075.449 0 .916.027 1.388.08 2.599.296 4.949 1.41 6.617 3.138a8.618 8.618 0 011.56 2.215 7.584 7.584 0 01.778 3.338c0 .12-.007.24-.013.36a1.746 1.746 0 012.149.251c.03.03.054.062.08.093a9.11 9.11 0 00.031-.739 9.634 9.634 0 00-.986-4.243" />
                <path fill="#FB6500"
                    d="M24.149 22.148a1.7 1.7 0 00-.21-.035 5.377 5.377 0 01-2.996-1.67v.001a.418.418 0 10-.534.64c.041.04.082.078.121.118a5.39 5.39 0 011.478 2.761 1.715 1.715 0 00.059.356 1.749 1.749 0 002.926.777 1.754 1.754 0 00-.844-2.948" />
                <path fill="#0082F0"
                    d="M29.944 17.673a1.75 1.75 0 00-2.98 1.056 5.388 5.388 0 01-1.667 2.999.419.419 0 10.641.534l.117-.121a5.376 5.376 0 012.758-1.48 1.71 1.71 0 00.355-.058 1.754 1.754 0 00.776-2.93" />
                <path fill="#2DBC00"
                    d="M22.53 12.717a1.754 1.754 0 001.054 2.982 5.376 5.376 0 012.996 1.67.419.419 0 10.534-.641 5.389 5.389 0 01-1.6-2.879 1.625 1.625 0 00-.058-.355 1.75 1.75 0 00-2.926-.777" />
                <path fill="#FC0"
                    d="M20.543 19.19a1.93 1.93 0 00.015-.106 5.393 5.393 0 011.668-3 .42.42 0 10-.64-.534 5.375 5.375 0 01-2.876 1.6 1.73 1.73 0 00-.355.06 1.754 1.754 0 00-.776 2.93 1.75 1.75 0 002.964-.95" />
            </g>
        </svg>
    </div>
</template>

<style scoped></style>