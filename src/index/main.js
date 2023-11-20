
import './index.css'
import './menu.css'
import './nav.css'
document.documentElement.classList.add('no-transition');
import { sidebar, nav,toggleSidebar, sidebarMenu  } from './initHtml.js'
import '../page/error.js'



//定义收起左侧的样子
//const sidebar = document.querySelector(".sidebar");
const toggleBtn = toggleSidebar;
const menu = sidebarMenu;

var menuLi = [];
var menuMap = {}
toggleBtn.addEventListener("click", function () {
  //mainBodyAll.forEach(e => e.classList.toggle("collapsed"))
  document.body.classList.toggle("collapsed");
  //sidebar.classList.toggle("collapsed");
  //toggleBtn.classList.toggle('rotate-text');
  window.localStorage.setItem("main.iscollapsed", sidebar.classList.contains("collapsed"))

});
if (window.localStorage.getItem("main.iscollapsed") == 'true') {
  //body.classList.toggle("collapsed");
  document.body.classList.toggle("collapsed");
  //mainBodyAll.forEach(e => e.classList.toggle("collapsed"))
  //nav.classList.toggle("collapsed");
  //sidebar.classList.toggle("collapsed");
  //toggleBtn.classList.toggle('rotate-text');
}





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
      menu.path = item.path + menu.path
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
  title.innerHTML = menu.name
  if (menu.icon) {
    icon.innerHTML = menu.icon
  } else {
    icon.innerHTML = "home"
  }
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


/*
日志管理
用户管理
权限管理
*/

var menuData = [
  { path: '/home1', name: '首页', icon: "home" },
  {
    path: '/server/#', name: '服务器管理', icon: "storage", child: [
      { path: '/statistic', name: '服务监控', icon: "bar_chart" },
      { path: '/node', name: '服务器', icon: "dns" },
      { path: '/docker', name: '容器管理', icon: "widgets" },
      { path: '/service', name: '服务管理', icon: "cloud" },
      { path: '/flow', name: '流水线', icon: "timeline" },

    ]
  },
  {
    path: '/server/#', name: '系统设置', icon: "settings", child: [
      { path: '/menu', name: '菜单', icon: "list_alt" },
      { path: '/log', name: '日志管理', icon: "description" },
      { path: '/user', name: '用户管理', icon: "person" },
      { path: '/permission', name: '权限管理', icon: "policy" }
    ]
  },
  { path: '/#home', name: '首页3', icon: "bolt" },
  {
    path: '/#home', name: '首页4', icon: "dataset", child: [
      { path: '/#home', name: '首页4-1' },
      {
        path: '/#home', name: '首页4-2', icon: "file_open", child: [
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
    path: '#home', name: '首页5', icon: "block", child: [
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
  { path: '#home', name: '首页6' }, { path: '#home', name: '首页6' },
]

var menuRoot = document.createElement("ul")

menuData.forEach(menu => {
  addMenu(menuRoot, menu);
});

menu.appendChild(menuRoot);


function openMenu() {
  let thisMenuLi = menuMap[location.pathname + location.hash];
  console.log("打开菜单", thisMenuLi)
  if (thisMenuLi) {
    for (var key in menuMap) {
      menuMap[key] != thisMenuLi && menuMap[key].classList.remove("active")
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
//  openMenu()
document.documentElement.classList.remove('no-transition');
}



export default {
}