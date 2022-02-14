let params = new URLSearchParams(location.search);
console.log(params);
let id = params.get('id');
let productApi = `http://localhost:3000/products/${id}`;

function renderUpdateProductsValue() {
  fetch(productApi)
    .then(res => res.json())
    .then(product => {
      document.querySelector('input[name="name"]').value = product.name;
      document.querySelector('input[name="image"]').value = product.image;
      document.querySelector('input[name="price"]').value = product.price;
    })
}

const btnUpdate = document.querySelector("#updateProduct");

btnUpdate.onclick = () => {
  const nameValue = document.querySelector('input[name="name"]').value;
  const imageValue = document.querySelector('input[name="image"]').value;
  const priceValue = document.querySelector('input[name="price"]').value;
  const categoryValue = document.querySelector('select[name="category_id"]').value;

  const formData = { name: nameValue, image: imageValue, price: priceValue, category_id: parseInt(categoryValue) };

  updateProduct(formData);
  alert('Cập nhật sản phẩm thành công');
}

function updateProduct(data) {
  fetch(productApi, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then()
}

renderUpdateProductsValue();