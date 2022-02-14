const productApi = 'http://localhost:3000/products';
function handleCreateProduct() {
  const createBtn = document.getElementById('createProduct');

  createBtn.onclick = function () {
    const nameValue = document.querySelector('input[name="name"]').value;
    const imageValue = document.querySelector('input[name="image"]').value;
    const priceValue = document.querySelector('input[name="price"]').value;
    const categoryValue = document.querySelector('select[name="category_id"]').value;

    const formData = { name: nameValue, image: imageValue, price: priceValue, category_id: parseInt(categoryValue) };

    createProduct(formData);
    alert('Thêm sản phẩm thành công');
  }
}

function createProduct(data, products) {
  fetch(productApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(products)
}

handleCreateProduct();
