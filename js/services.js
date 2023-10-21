const list = document.querySelector('.services-page__list');

const closeBlock = e => {
  const target = e.target;

  const block = target.closest('.services-page__block');
  const li = target.closest('li');
  li.classList.remove('active');
  if (block.classList.contains('modal')) {
    enableScroll();
  }
  block.remove();
};

const createBlock = (dataName, element, title) => {
  const servicesPage__block = document.createElement('div');
  servicesPage__block.classList.add('services-page__block');
  servicesPage__block.classList.add('block');
  if (window.innerWidth < 600) servicesPage__block.classList.add('modal');

  const block__header = document.createElement('div');
  block__header.classList.add('block__header');

  const block__title = document.createElement('h2');
  block__title.classList.add('block__title');
  block__title.textContent = title;

  const close__button = document.createElement('div');
  close__button.addEventListener('click', closeBlock);
  close__button.classList.add('close-button');

  const block__text = document.createElement('div');
  block__text.classList.add('block__text');

  const block__button = document.createElement('div');
  block__button.addEventListener('click', openModal);
  block__button.textContent = 'Связаться';
  block__button.classList.add('block__button');
  block__button.classList.add('button');

  for (const props of servicesPageData) {
    if (props.name == dataName) {
      props.value.forEach(pText => {
        const p = document.createElement('p');
        p.textContent = pText;
        block__text.prepend(p);
      });
    }
  }
  block__header.appendChild(block__title);
  block__header.appendChild(close__button);

  servicesPage__block.appendChild(block__header);
  servicesPage__block.appendChild(block__text);
  servicesPage__block.appendChild(block__button);

  element?.appendChild(servicesPage__block);
  if (window.innerWidth < 600) disableScroll();
};

const openList = e => {
  const closestLi = e.target.closest('li');
  if (!closestLi) return;
  const block = closestLi?.querySelector('.services-page__block');
  if (block) return;
  const span = closestLi?.querySelector('span');
  const title = span?.textContent;
  if (closestLi && !closestLi.classList.contains('active')) {
    closestLi.classList.add('active');
  }
  const dataName = closestLi?.dataset?.name;
  createBlock(dataName, closestLi, title);
};

for (const service of list.children) {
  service.addEventListener('click', openList);
}
