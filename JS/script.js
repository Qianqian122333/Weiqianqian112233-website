const menu = document.querySelector("#menu");
// nav开始
const nav = document.querySelector(".links");
menu.addEventListener("click", function () {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
});
// nav 结束
// 轮播图开始
let bigPic = document.querySelector(".big-pic");
// 用于获取页面中所有类名为 "smallPic" 的元素的方法，返回的是一个类数组对象
let smallPicArr = document.getElementsByClassName("small-pic");
const img = document.querySelector(".small-pic img");
let index = 0;
let timer;
console.log(smallPicArr);
// 重置类名，让类名只有small - pic
let rebegin = function () {
  for (let i = 0; i < smallPicArr.length; i++) {
    smallPicArr[i].className = "small-pic";
  }
};
let picked = function () {
  // 先重置类名，确保没有元素是被picked的状态
  rebegin();
  // 让第0个元素处于被选中状态
  smallPicArr[index].className = "small-pic picked";
};
// 设置启动轮播图的时间函数，随着时间推移，被选中的对象不断改变
function timerBegin() {
  timer = setInterval(function () {
    picked();
    index++;
    bigPic.style.backgroundImage = `url(../images/${index}Qianqian.jpg)`;
    if (index === smallPicArr.length) {
      index = 0;
    }
  }, 1500);
}
for (let i = 0; i < smallPicArr.length; i++) {
  smallPicArr[i].onmousemove = function () {
    // 鼠标移动到小图片时，右边的小图片变成大图片
    bigPic.style.backgroundImage = `url(../images/${i + 1}Qianqian.jpg)`;
    // 重置定时器
    clearInterval(timer);
    rebegin();
    for (let j = 0; j < smallPicArr.length; j++) {
      smallPicArr[j].className = "small-pic";
    }
    smallPicArr[i].className = "small-pic picked";
  };
  smallPicArr[i].onmouseleave = function () {
    timerBegin();
  };
}
timerBegin();
// 轮播图结束
// copy email

function copyEmail() {
  const email = document.getElementById("email").innerText;
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copied to clipboard!");
    })
    .catch(() => {
      alert("Failed to copy email.");
    });
}
//copy email end
// footer begin
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
//footer end
//about start
const panels = document.querySelectorAll(".panel");
const active = document.querySelector(".active");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    panel.classList.add("active");
  });
});
