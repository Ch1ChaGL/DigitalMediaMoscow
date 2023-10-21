'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('modal');

  form.addEventListener('submit', formSend);
  function formSend(e) {
    //e.preventDefault();
    closeModal();
  }
});

//burger
const burger = document.querySelector('.menu__burger');
//Назначение класса active при нажатии на меню-бургер
burger.addEventListener('click', onclick);

const menuList = document.querySelectorAll('.menu__link');

function onclick() {
  burger.classList.toggle('active');
  if (burger.classList.contains('active')) {
    disableScroll();
  } else {
    enableScroll();
  }
  const menu__body = document.querySelector('.menu__body');
  menu__body.classList.toggle('open');

  // Переключить видимость элемента "Главная"
  const menu__list = document.querySelectorAll('.menu__list')[0];
  if (
    menu__body.classList.contains('open') &&
    burger.classList.contains('active')
  ) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('menu__link');
    li.classList.add('menu__link-container');
    a.href = '/index.html';
    a.textContent = 'Главная';
    li.prepend(a);
    menu__list.prepend(li);
  } else {
    const menuLinkContainer = document.querySelector('.menu__link-container');
    menuLinkContainer?.remove();
  }
}

function disableScroll() {
  // Сохранить текущую позицию прокрутки
  let scrollPosition = window.scrollY || window.pageYOffset;
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  document.documentElement.scrollTop = scrollPosition;
  document.body.scrollTop = scrollPosition;
}
function enableScroll() {
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}

window.addEventListener('resize', function () {
  if (window.innerWidth > 600) {
    document.querySelector('.menu__body').classList.remove('open');
    burger.classList?.remove('active');

    const menuLinkContainer = document.querySelector('.menu__link-container');
    menuLinkContainer?.remove();
  }
});

//burger

//navbar-links
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.menu__link');
  const currentURL = window.location.pathname;

  navLinks.forEach(link => {
    const a = link.getAttribute('href');
    if (link.getAttribute('href') === currentURL) {
      link.classList.add('active');
    }
  });
});

//navbar-links

//contact

const contactBtn = document.querySelectorAll('#contact');
for (const btn of contactBtn) {
  //btn.addEventListener('click', showContactPage);
  btn.addEventListener('click', openModal);
}
//contact

const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('modal-close-button');

// Функция для открытия модального окна
function openModal() {
  modalContainer.style.display = 'flex';
}

// Функция для закрытия модального окна
function closeModal() {
  modalContainer.style.display = 'none';
}

// Обработчик события для закрытия модального окна
closeButton?.addEventListener('click', closeModal);

// Закрыть модальное окно, если пользователь кликнет вне окна
modalContainer.addEventListener('click', event => {
  if (event.target === modalContainer) {
    closeModal();
  }
});
