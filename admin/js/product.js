const productApi = 'http://localhost:3000/products';

function renderProducts() {
  fetch(productApi)
    .then(res => res.json())
    .then(products => {
      const productListsBlock = document.querySelector(".product-list-item2");

      const productListsItem = products.map((product => {
        return `
            <td class="product-list-item-img">
          <img src="${product.image}" alt="">
        </td>
        <td class="product-list-item-name">
          ${product.name}
        </td>
        <td class="product-list-item-price">
          ${product.price}
        </td>
        <td class="product-list-item-category">
          ${product.category_id}
        </td>
        <td class="product-list-action">
          <a href="add.html">Thêm</a>
          <a href="update.html?id=${product.id}">Sửa</a>
          <strong onclick="handleDeleteProduct(${product.id})">Xóa</strong>
        </td> `;
      }))
      productListsBlock.innerHTML = productListsItem.join('');
    })
}

function handleDeleteProduct(id) {
  fetch(productApi + '/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json())
    .then(() => {
      renderProducts()
    })
}

renderProducts();

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
  }
}
