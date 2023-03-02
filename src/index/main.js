
import './index.css'



const sidebar = document.querySelector(".sidebar");

const menu = document.getElementById("main-menu");
const toggleBtn = document.querySelector(".toggle-sidebar");
const mainBodyAll = document.querySelectorAll(".main-right-body");


console.log(toggleBtn)
toggleBtn.addEventListener("click", function () {
  mainBodyAll.forEach(e => e.classList.toggle("collapsed"))
  sidebar.classList.toggle("collapsed");
  console.log(toggleBtn.children[0])
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





for (let i = 0; i < 30; i++) {
 
var newDiv = document.createElement("div");
var a = document.createElement('a');
a.href = "#home"+i
a.innerHTML = "home"+i;
newDiv.appendChild(a)
menu.appendChild(newDiv);
  
}