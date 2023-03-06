/*
 * @Author: 董文强 826112946@qq.com
 * @Date: 2023-02-20 09:07:27
 * @LastEditors: 董文强 826112946@qq.com
 * @LastEditTime: 2023-03-06 23:38:11
 * @FilePath: \web-main\src\index\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import './index.css'


//定义收起左侧的样子
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle-sidebar");
const mainBodyAll = document.querySelectorAll(".main-right-body");


toggleBtn.addEventListener("click", function () {
  mainBodyAll.forEach(e => e.classList.toggle("collapsed"))
  sidebar.classList.toggle("collapsed");
  toggleBtn.children[0].classList.toggle('rotate-text');
});

// 


// 获取video元素
const video = document.querySelector('video');

// 请求用户授权访问摄像头
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    // 将视频流绑定到video元素
    video.srcObject = stream;
    video.play();
  })
  .catch(error => {
    console.log('获取摄像头画面失败:', error);
  });







const menu = document.getElementById("main-menu");


function addMenu(menuUl,item){
  var newLi = document.createElement("li");
  var a = document.createElement('a');
  a.href = item.path
  a.innerHTML = item.name;
  newLi.appendChild(a)
  menuUl.appendChild(newLi);
}

var newDiv = document.createElement("ul")
menu.appendChild(newDiv);
for (let i = 0; i < 30; i++) {

  addMenu(newDiv,{path:'#home',name:'首页'})
  // var newDiv = document.createElement("div");
  // var a = document.createElement('a');
  // a.href = "#home" + i
  // a.innerHTML = "home" + i;
  // newDiv.appendChild(a)
  // menu.appendChild(newDiv);

}