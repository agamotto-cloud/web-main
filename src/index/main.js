
import './index.css'




const sidebar = document.getElementById("main-menu");
const toggleBtn = document.querySelector(".toggle-sidebar");
const mainBodyAll = document.querySelectorAll(".main-right-body");


console.log(toggleBtn)
toggleBtn.addEventListener("click", function() {
  mainBodyAll.forEach(e=>e.classList.toggle("collapsed"))
  sidebar.classList.toggle("collapsed");
  console.log(toggleBtn.children[0])
  toggleBtn.children[0].classList.toggle('rotate-text');
});

// 