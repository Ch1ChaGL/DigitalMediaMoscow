const list = document.querySelector(".services-page__list");

const openList = (e) => {};

for (const service of list.children) {
  console.log(service);
  service.addEventListener("click", openList);
}
