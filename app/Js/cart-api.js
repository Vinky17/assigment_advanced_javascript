document.addEventListener("DOMContentLoaded", function () {

  let cart = JSON.parse(localStorage.getItem('cart'));
  const myCart = document.getElementById('my-cart');

  if (cart) {
    cart.forEach((product, index) => {
      let cartItem = `
      <tr class="cart__item">
      <td>
        <a href="#"><img src="${product.image}" alt="" /></a>
      </td>
      <td>
        <p>${product.name}</p>
        <p>S</p>
      </td>
      <td>
        <div class="cart__count">
          <input type="button" onclick="decreaseQuatity(${product.id},${product.price}, ${index})" value="-" />
          <input type="text" min="1" onkeyup="reBill(${product.price}, this.value, ${index})" id="product-quatity" value="${product.quatity}"  />
          <input type="button" onclick="increaseQuatity(${product.id},${product.price}, ${index})" value="+" />
        </div>
      </td>
      <td class="summary">${product.quatity * product.price} vnđ</td>
      <td>
        <a  onclick="removeFromCart(${product.id}, ${index})" class="trash">
          <ion-icon name="trash-outline"></ion-icon>
        </a>
      </td>
    </tr> `;

      myCart.innerHTML += cartItem;

      total();
    })
  } else {
    // Hiện thông báo giỏ hàng trống
    document.querySelector('.cart__left').style.display = 'none';
    document.querySelector('.cart__right').style.display = 'none';
    document.querySelector('.cart').innerHTML += `
    <div class="empty-cart">
    <div class="empty-cart-img">
      <img src="https://theme.hstatic.net/1000370235/1000472578/14/empty_cart.png?v=735" alt="Giỏ hàng của bạn rỗng!">
    </div>
    <p class="empty-cart-text">
    Không có  sản phẩm nào  trong giỏ hàng của bạn
    </p>
    <button class="continues-shopping">
    <a href="product.html">Tiếp tục mua sắm</a>
    </button>
  </div> `;
  }


})