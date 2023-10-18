"use strict";

const burger = document.querySelector(".menu__burger");
//Назначение класса active при нажатии на меню-бургер
burger.addEventListener("click", onclick);

const menuList = document.querySelectorAll(".menu__link");

for (const li of menuList) {
  li.addEventListener("click", onclick);
}

function onclick() {
  burger.classList.toggle("active");
  if (burger.classList.contains("active")) {
    disableScroll();
  } else {
    enableScroll();
  }
  document.querySelector(".menu__body").classList.toggle("open");

  // Переключить видимость элемента "Главная"
  const menuLinkMain = document.getElementById("menu__link-main");
  menuLinkMain.classList.toggle("hidden");

  const menuLinkContainer = document.getElementById("menu__link-container");
  menuLinkContainer.classList.toggle("hidden");
}

function disableScroll() {
  // Сохранить текущую позицию прокрутки
  var scrollPosition = window.scrollY || window.pageYOffset;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
  document.documentElement.scrollTop = scrollPosition;
  document.body.scrollTop = scrollPosition;
}
function enableScroll() {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 600) {
    document.querySelector(".menu__body").classList.remove("open");
    burger.classList.remove("active");
    const menuLinkMain = document.getElementById("menu__link-main");
    menuLinkMain.classList.add("hidden");

    const menuLinkContainer = document.getElementById("menu__link-container");
    menuLinkContainer.classList.add("hidden");
  }
});
