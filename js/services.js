const list = document.querySelector('.services-page__list');

const createBlock = (dataName, element) => {
  const servicesPage__block = document.createElement('div');
  servicesPage__block.classList.add('services-page__block');
  servicesPage__block.classList.add('block');

  
};

const openList = e => {
  const closestLi = e.target.closest('li');

  if (closestLi && !closestLi.classList.contains('active')) {
    closestLi.classList.add('active');
  }
  const dataName = closestLi.dataset.name;

  createBlock(dataName, closestLi);
};

const close = e => {};

for (const service of list.children) {
  console.log(service);
  service.addEventListener('click', openList);
}
