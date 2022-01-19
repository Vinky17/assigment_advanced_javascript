document.addEventListener("DOMContentLoaded", function () {
  const productsApi = 'http://localhost:3000/products';

  function start() {
    getProducts(renderProducts);

  }

  start();

  // API lấy danh sách sản phẩm
  function getProducts(products) {
    fetch(productsApi)
      .then(res => res.json())
      .then(products)
  }


  // Hiển thị danh sách sản phẩm
  function renderProducts(products) {
    const productBlock = document.querySelector('.product-list-row');

    const productItem = products.map((product) => {
      return `
      <div class="product-item">
      <div class="image">
        <a onclick="renderProductDetail(${product.id})"><img src="${product.image}" alt="" /></a>
      </div>
      <div class="products-action">
        <h2><a href="${product.id}">${product.name}</a></h2>
        <div class="product-price">
          <p>${product.price}₫</p>
        </div>
        <span onclick="addToCart(${product.id},'${product.name}','${product.image}',${product.price})" class="product-buy-btn">
        Mua ngay
        </span>
      </div>
    </div>
      `;
    })
    productBlock.innerHTML = productItem.join('');
  }

  // End DOMContentLoaded
})