
import './index.css'

import './menu.css'

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

var menuLi = [];
function addMenu(menuUl, item) {
  var newLi = document.createElement("li");
  menuLi.push(newLi)
  var a = document.createElement('a');
  a.href = item.path
  a.innerHTML = item.name;
  a.addEventListener("click", (e) => {
    if (newLi.classList.contains("open")) {
      return;
    }
    
    let parentLis = []
    menuLi.forEach(item => {
      if (item.contains(a) && item !=newLi) {
        parentLis.push(item)
        return;
      }
      item.classList.remove('open');
      item.style.height = ""
    });
    newLi.classList.add("open")
    if (item.child) {
      newLi.style.height = ((item.child.length+1) * 50) + 'px';
      newLi.menuHeight = ((item.child.length+1) * 50) ;
      if (parentLis) {
        parentLis.forEach(p => {
          p.style.height = (p.menuHeight + (item.child.length) * 50) + 'px';
        })
      }
    }else{
      //点击展开的是没有子集的，
      parentLis.forEach(p => {
        p.style.height = p.menuHeight  + 'px';
      })
    }
  })
  newLi.appendChild(a);
  menuUl.appendChild(newLi);
  if (item.child && item.child.length > 1) {
    let childMenuRoot = document.createElement("ul")
    newLi.appendChild(childMenuRoot);
    item.child.forEach(menu => {
      addMenu(childMenuRoot, menu);
    })
  }
}



var menuData = [
  { path: '#home', name: '首页' },
  { path: '#home', name: '首页1' },
  { path: '#home', name: '首页2' },
  { path: '#home', name: '首页3' },
  {
    path: '#home', name: '首页4', child: [
      { path: '#home', name: '首页4-1' },
      {
        path: '#home', name: '首页4-2', child: [
          { path: '#home', name: '首页4-2-1' },
          { path: '#home', name: '首页4-2-2' },
        ]
      },
      { path: '#home', name: '首页4-3' },
    ]
  },
  { path: '#home', name: '首页5' },
  { path: '#home', name: '首页6' },
  { path: '#home', name: '首页6' },
  { path: '#home', name: '首页6' },
  { path: '#home', name: '首页6' },
  { path: '#home', name: '首页6' },
  { path: '#home', name: '首页6' },
  { path: '#home', name: '首页6' },
  { path: '#home', name: '首页6' },
  { path: '#home', name: '首页6' },
  { path: '#home', name: '首页6' },
  { path: '#home', name: '首页6' }, { path: '#home', name: '首页6' },
]

var menuRoot = document.createElement("ul")

menu.appendChild(menuRoot);

menuData.forEach(menu => {
  addMenu(menuRoot, menu);
})
