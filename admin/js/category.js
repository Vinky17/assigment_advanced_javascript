
const categoriesApi = 'http://localhost:3000/categoies';

function start() {
  getCategories();
}

start();

function getCategories() {
  fetch(categoriesApi)
    .then(res => res.json())
    .then(categories => {
      const selectBlock = document.getElementById('category_id');
      const htmls = categories.map((category) => {
        return `
        <option value="${category.id}">${category.name}</option>
        `;
      });
      selectBlock.innerHTML = htmls.join('');
    });
}

