document.addEventListener("DOMContentLoaded", function () {
  const categoriesApi = 'http://localhost:3000/categoies';


  function start() {
    getCategories(renderCategories);
  }

  start();

  // API lấy danh danh mục
  function getCategories(categoies) {
    fetch(categoriesApi)
      .then(res => res.json())
      .then(categoies)
  }

  // Hiển thị danh danh mục
  function renderCategories(categoies) {
    const categoryBlock = document.querySelector('.dropdown');

    const categoryItem = categoies.map((category) => {
      return `
      <li><a href="#">${category.name}</a></li>
      `;
    })
    categoryBlock.innerHTML = categoryItem.join('');
  }
})