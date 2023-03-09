
import './index.css'
import './menu.css'
import './nav.css'

//定义收起左侧的样子
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle-sidebar");
const mainBodyAll = document.querySelectorAll(".main-right-body");


toggleBtn.addEventListener("click", function () {
  mainBodyAll.forEach(e => e.classList.toggle("collapsed"))
  sidebar.classList.toggle("collapsed");
  toggleBtn.classList.toggle('rotate-text');
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
  let a = createLiA(item);
  newLi.appendChild(a);
  menuUl.appendChild(newLi);
  a.addEventListener("click", (e) => {
    if (newLi.classList.contains("open")) {
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
    newLi.classList.add("open")
    setParentHeight(newLi, 0)
  })
  if (item.child && item.child.length > 0) {
    var i = document.createElement('i');
    i.classList = "icons"
    i.innerHTML = "chevron_left"
    a.appendChild(i);
    newLi.menuHeight = ((item.child.length + 1) * 50);
    let childMenuRoot = document.createElement("ul")
    newLi.appendChild(childMenuRoot);
    item.child.forEach(menu => {
      addMenu(childMenuRoot, menu);
    })
  } else {
    newLi.menuHeight = 50;
  }
}
function createLiA(menu) {
  let a = document.createElement('a');
  let icon = document.createElement('i');
  let name = document.createElement('span');
  icon.innerHTML = "home"
  icon.classList = "icons"
  a.href = menu.path
  name.appendChild(icon);
  name.insertAdjacentHTML('beforeend',menu.name);
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
          {
            path: '#home', name: '首页4-2-2', child: [
              { path: '#home', name: '首页4-2-2-1' },
            ]
          },
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
})
