
console.log(document.getElementById("main-body"))
console.log(document.getElementById("main-body").offsetHeight)
const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

const sidebarInfo = document.createElement("div");
sidebarInfo.classList.add("sidebar-info");
const sidebarInfoH1 = document.createElement("h1");
sidebarInfoH1.textContent = "infoinfoinfoin";
sidebarInfo.appendChild(sidebarInfoH1);

const sidebarMenu = document.createElement("div");
sidebarMenu.classList.add("sidebar-menu");
sidebarMenu.id = "main-menu";

sidebar.appendChild(sidebarInfo);
sidebar.appendChild(sidebarMenu);

const nav = document.createElement("nav");
nav.classList.add("main-right-body", "main-nav");

const navLeft = document.createElement("ul");
navLeft.classList.add("nav-left");
const navLeftLi = document.createElement("li");
const toggleSidebar = document.createElement("span");
toggleSidebar.classList.add("toggle-sidebar", "icons");
toggleSidebar.textContent = "menu";
navLeftLi.appendChild(toggleSidebar);
navLeft.appendChild(navLeftLi);
const navRight = document.createElement("ul");
navRight.classList.add("nav-right");
const navRightLi = document.createElement("li");
const navRightSpan = document.createElement("span");
navRightSpan.textContent = "agamotto";
navRightLi.appendChild(navRightSpan);
navRight.appendChild(navRightLi);
nav.appendChild(navLeft);
nav.appendChild(navRight);
const body = document.querySelector("body");
body.appendChild(sidebar);
body.appendChild(nav);
