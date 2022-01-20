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
      <li><a href="product.html?id=${category.id}">${category.name}</a></li>
      `;
    })
    categoryBlock.innerHTML = categoryItem.join('');
    document.querySelector('.dropdown-responsive').innerHTML = categoryItem.join('');
  }

  //  Menu search nav
  const headerSearch = document.querySelector("#header-search");
  const searchContainer = document.querySelector(".search-container");
  headerSearch.addEventListener("click", function (e) {
    searchContainer.classList.toggle("search-active");
    e.preventDefault();
  });

  // Responsive header
  const mobileDropdown = document.querySelector("#mobile-dropdown");
  const mobileDropdownItem = document.querySelector(".dropdown-responsive");
  mobileDropdown.addEventListener("click", function () {
    mobileDropdownItem.classList.toggle("dropdown-active");
  });

  const hamburgerButton = document.querySelector("#hamburger");
  const overlay = document.querySelector(".overlay");
  const menuSidebar = document.querySelector("#menu-sidebar");

  hamburgerButton.addEventListener("click", function () {
    overlay.classList.add("active-overlay");
    menuSidebar.classList.add("active-sidebar");
  });
  overlay.addEventListener("click", function () {
    overlay.classList.remove("active-overlay");
    menuSidebar.classList.remove("active-sidebar");
  });
  menuSidebar.addEventListener("click", function (e) {
    e.stopPropagation();
  });
})