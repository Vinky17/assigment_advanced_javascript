document.addEventListener("DOMContentLoaded", function () {
  const showOrder = document.querySelector(".shipping__action");
  const orderList = document.querySelector(".order__list");
  showOrder.addEventListener("click", function (event) {
    orderList.classList.toggle("shipping__active");
  });

  const cart = JSON.parse(localStorage.getItem('cart'));

  if (cart) {
    cart.forEach(item => {
      let orderSummary = `
      <div class="order__summary">
      <div class="order__summary__table">
        <table>
          <thead>
            <tr>
              <td>
                <span class="thumbnail">${item.quatity}</span>
                <img src="${item.image}" />
              </td>
              <td>
                <p>${item.name}</p>
                <p>S</p>
              </td>
              <td>${item.price} vnđ</td>
            </tr>
          </thead>
        </table>
      </div>
      <div class="order__summary__discount">
        <div class="discount">
          <input type="text" placeholder="Mã giảm giá" />
        </div>
        <div class="discount__use">
          <button>Sử dụng</button>
        </div>
      </div>
      <div class="order__summary__shipping">
        <div class="order__summary__table">
          <table>
            <tr>
              <td>Tạm tính</td>
              <td class="summary">${item.quatity * item.price} vnđ</td>
            </tr>
            <tr>
              <td>Phí vận chuyển</td>
              <td>---</td>
            </tr>
          </table>
        </div>
        <div class="order__summary__table table__footer">
          <table>
            <tr>
              <td>Tổng cộng</td>
              <td class="summary">${item.quatity * item.price} vnđ</td>
            </tr>
          </table>
        </div>
      </div>
    </div> `;
      document.getElementById('order').innerHTML += orderSummary
    })
  }

  const orderButton = document.querySelector('#order-now');
  orderButton.onclick = function () {
    const orderName = document.getElementById('order-name').value;
    const orderPhone = document.getElementById('order-phone').value;
    const orderAdress = document.getElementById('order-adress').value;
    const orderEmail = document.getElementById('order-email').value;

    if (orderName && orderPhone && orderAdress && orderEmail && order == '') { alert('Vui lòng nhập đầy đủ thông tin!'); return }

    const order = {
      customer_name: orderName,
      customer_address: orderAdress,
      customer_email: orderEmail,
      customer_phone: orderPhone,
      create_date: new Date().toISOString().slice(0, 10),
      status: 'wait for confirmation'
    }

    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(order => {
        const orderId = order.id;
        saveOrderDetail(orderId);
      })

    alert('Order successfully!!!');
  }

  function saveOrderDetail(orderId) {

    cart.forEach(item => {
      const orderDetail = {
        order_id: orderId,
        product_id: item.id,
        quantity: item.quantity,
        unti_price: item.price
      }

      fetch('http://localhost:3000/order_detail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetail)
      })
    })
  }
})