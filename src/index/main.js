
import './index.css'
import './menu.css'
import './nav.css'
document.documentElement.classList.add('no-transition');

//定义收起左侧的样子
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle-sidebar");
const mainBodyAll = document.querySelectorAll(".main-right-body");
const menu = document.getElementById("main-menu");

var menuLi = [];
var menuMap = {}

toggleBtn.addEventListener("click", function () {
  mainBodyAll.forEach(e => e.classList.toggle("collapsed"))
  sidebar.classList.toggle("collapsed");
  toggleBtn.classList.toggle('rotate-text');
  if(sidebar.classList.contains("collapsed")){
    menuLi.forEach(item => {
      item.classList.remove('open');
      item.style.height = ""
    });
  }else{
    openMenu()
  }
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








function addMenu(menuUl, item) {
  var newLi = document.createElement("li");
  menuLi.push(newLi)
  let a = createLiA(item);
  newLi.appendChild(a);
  menuUl.appendChild(newLi);
  a.addEventListener("click", (e) => {
    if (newLi.classList.contains("open")) {
      //已经是打开状态，需要收起
      newLi.classList.remove('open');
      newLi.style.height = ""
      setParentHeight(newLi, 50 - newLi.menuHeight)
      return;
    }
    menuLi.forEach(item => {
      if (item.contains(a) && item != newLi) {
        return;
      }
      item.classList.remove('open');
      item.style.height = ""
    });
    //逐级打开
    newLi.classList.add("open")
    setParentHeight(newLi, 0)
  })
  if (item.child && item.child.length > 0) {
    var i = document.createElement('i');
    i.classList = "icons info"
    i.innerHTML = "chevron_left"
    a.appendChild(i);
    newLi.menuHeight = ((item.child.length + 1) * 50);
    let childMenuRoot = document.createElement("ul")
    newLi.appendChild(childMenuRoot);
    item.child.forEach(menu => {
      addMenu(childMenuRoot, menu);
    })
  } else {
    menuMap[item.path] = newLi;
    newLi.menuHeight = 50;
  }
}
function createLiA(menu) {
  let a = document.createElement('a');

  let icon = document.createElement('span');
  let name = document.createElement('span');
  let title = document.createElement('span');
  title.classList = "menu-title info"
  title.innerHTML =  menu.name
  icon.innerHTML = "home"
  icon.classList = "icons"
  if (!menu.child) {
    a.href = menu.path
  }
  name.appendChild(icon);
  name.appendChild(title);
  a.appendChild(name)
  return a;
}

function setParentHeight(li, childHeight) {
  li.style.height = (li.menuHeight + childHeight) + "px"
  let currentElement = li.parentElement;
  while (currentElement !== null) {
    if (currentElement.tagName === 'LI') {
      setParentHeight(currentElement, li.menuHeight + childHeight - 50)
      return;
    }
    currentElement = currentElement.parentElement;
  }
}




var menuData = [
  { path: '/home1', name: '首页' },
  { path: '/home2', name: '首页1' },
  { path: '/home3', name: '首页2' },
  { path: '/#home', name: '首页3' },
  {
    path: '/#home', name: '首页4', child: [
      { path: '/#home', name: '首页4-1' },
      {
        path: '/#home', name: '首页4-2', child: [
          { path: '/#home4-2-1', name: '首页4-2-1' },
          {
            path: '/#home4-2-2', name: '首页4-2-2', child: [
              { path: '/#home4-2-2-1', name: '首页4-2-2-1' },
            ]
          },
        ]
      },
      {
        path: '/#home4-3', name: '首页4-3', child: [
          { path: '/#home4-3-1', name: '首页4-3-1' },
          { path: '/#home4-3-2', name: '首页4-3-2' },
        ]
      },
      { path: '#home', name: '首页4-4' },
    ]
  },
  {
    path: '#home', name: '首页5', child: [
      { path: '#home', name: '首页4-1' },
      {
        path: '#home', name: '首页4-2', child: [
          { path: '#home', name: '首页4-2-1' },
          { path: '#home', name: '首页4-2-2' },
        ]
      },
      {
        path: '#home', name: '首页4-3', child: [
          { path: '#home', name: '首页4-3-1' },
          { path: '#home', name: '首页4-3-2' },
        ]
      },
      { path: '#home', name: '首页4-4' },
    ]
  },
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
});


function openMenu() {
  let thisMenuLi = menuMap[location.pathname + location.hash];
  console.log("打开菜单",thisMenuLi)
  if (thisMenuLi ) {
    for (var key in menuMap) {
      menuMap[key]!= thisMenuLi && menuMap[key].classList.remove("active")
    }
    thisMenuLi.classList.add("active")
    
    let currentElement = thisMenuLi.parentElement;
    while (currentElement !== null) {
      if (currentElement.tagName === 'LI') {
        currentElement.classList.add("open")
      }
      currentElement = currentElement.parentElement;
    }
    setParentHeight(thisMenuLi, 0)
  }
}
window.onhashchange = () => {
  openMenu()
}
openMenu();


window.onload = () => {
  document.documentElement.classList.remove('no-transition');
}
