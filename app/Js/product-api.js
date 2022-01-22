window.addEventListener('DOMContentLoaded', function () {
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
  const productBlock = document.querySelector('.product-list-row');
  function renderProducts(products) {

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


  // Tìm kiếm sản phẩm
  const searchButton = document.querySelector('.search-icon');

  searchButton.onclick = () => {
    let searchInputValue = document.querySelector('#search-input').value;
    let searchProductApi = `http://localhost:3000/products?q=${searchInputValue}`;

    renderSearchProduct(searchProductApi);
  }

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
      let searchInputValue = document.querySelector('#search-input').value;
      let searchProductApi = `http://localhost:3000/products?q=${searchInputValue}`;

      renderSearchProduct(searchProductApi);
    }
  });

  function renderSearchProduct(searchProductApi) {
    fetch(searchProductApi)
      .then(res => res.json())
      .then((products) => {
        if (products.length == 0) {
          productBlock.innerHTML = `<h1>Không tìm thấy sản phẩm</h1>`;
        } else {
          renderProducts(products);
        }

      })
  }

  // Hiển thị sản phẩm theo loại
  let params = new URLSearchParams(location.search);
  let id = params.get('id');
  let productByIdApi = `http://localhost:3000/products?category_id=${id}`;
  function renderProductsById() {
    fetch(productByIdApi)
      .then(res => res.json())
      .then((products) => {
        if (id == null) getProducts(renderProducts);
        renderProducts(products);

      })
  }
  renderProductsById();

})