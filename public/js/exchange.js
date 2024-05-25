function confirmPage(
  name,
  itemName,
  estimatedPrice,
  doorNumber,
  street,
  suburb,
  state,
  pin,
  phone,
  email,
  orderId,
) {
  const randomCustomer = {
    name: 'John Doe',
    address: '1234 Elm Street, Springfield, IL, 62704',
    mobile: '+61 555123456',
    email: 'john.doe@gmail.com',
  };
  return `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
              .order-body {
                  background-color: black;
                  color: whitesmoke;
                  font-family: 'Times New Roman', Times, serif;
                  padding: 10px;
              }
              .head-confirm {
                  padding: 30px;
                  display: flex;
                  flex-wrap: wrap;
                  align-items: center;
                  flex-direction: column;
                  gap: 40px;
              }
              .thankyou {
                  font-weight: 900;
                  font-size: 22px;
                  font-family: 'Courier New', Courier, monospace;
              }
              .email-sent {
                  padding: 20px;
              }
              .order-details {
                  box-shadow: 1px 1px 5px whitesmoke;
                  padding: 20px;
                  display: flex;
                  flex-direction: column;
                  gap: 20px;
              }
              .this-side {
                  color: whitesmoke;
                  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
              }
              .other-side {
                  color: beige;
                  font-family: cursive;
              }
              .order {
                  display: flex;
                  gap: 25px;
              }
          </style>
      </head>
      
      <body class="order-body">
          <div>
              <div class="head-confirm">
                  <div>
                      <img src="images/confirm.png" alt="">
                  </div>
                  <div class="thankyou">
                      Thank you, your order has been placed.
                  </div>
              </div>
          </div>
          <div class="email-sent">
              An email confirmation has been sent to: <span style="color: gray;">${email}</span>
          </div>
          <div class="order-details">
              <div class="order-num order">
                  <div class="this-side">
                      Order Number
                  </div>
                  <div class="other-side">
                      #199-28839-2290
                  </div>
              </div>
              <div class="order-num order">
                  <div class="this-side">
                      Order Total
                  </div>
                  <div class="other-side">
                      $${estimatedPrice}
                  </div>
              </div>
              ${
                orderId.includes('direct')
                  ? ` <div class="random-details order">
                  <div class="this-side">
                      Customer Name
                  </div>
                  <div class="other-side">
                      ${randomCustomer.name}
                  </div>
              </div>
              <div class="random-details order">
                  <div class="this-side">
                      Home Address
                  </div>
                  <div class="other-side">
                      ${randomCustomer.address}
                  </div>
              </div>
              <div class="random-details order">
                  <div class="this-side">
                      Mobile Number
                  </div>
                  <div class="other-side">
                      ${randomCustomer.mobile}
                  </div>
              </div>
              <div class="random-details order">
                  <div class="this-side">
                      Email
                  </div>
                  <div class="other-side">
                      ${randomCustomer.email}
                  </div>
              </div>`
                  : `<div class="delivery-by order">
                  <div class="this-side">
                      Delivery by
                  </div>
                  <div class="other-side">
                      Monday 20 May
                  </div>
              </div>
              <div class="order">
                  <div class="this-side">
                      Delivery to
                  </div>
                  <div class="other-side">
                      ${doorNumber} ${street}, ${suburb}, ${state}, ${pin}
                  </div>
              </div>
              <div class="this-side">
                  Order Summary
              </div>
              <div style="width: 200px; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="display: flex; gap: 40px">
                      <div class="this-side" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                          Subtotal
                      </div>
                      <div class="other-side">
                          $${(estimatedPrice - 6.98).toFixed(2)}
                      </div>
                  </div>
                  <div style="display: flex; gap: 40px">
                      <div class="this-side" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                          Shipping
                      </div>
                      <div class="other-side">
                          $5
                      </div>
                  </div>
                  <div style="display: flex; gap: 74px">
                      <div class="this-side" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                          Tax
                      </div>
                      <div class="other-side">
                          $1.98
                      </div>
                  </div>
              </div>`
              }

             
          </div>
          <div style="text-align: center; margin-top: 10px">
              <a href="/">Click here to redirect to homepage</a>
          </div>
      </body>
      
      </html>`;
}

function displayConfirmationPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get('id');
  let subBtn = document.getElementById('submit-btn');
  subBtn.innerHTML = 'confirming order...';
  let {
    name,
    itemName,
    estimatedPrice,
    doorNumber,
    street,
    suburb,
    state,
    pin,
    phone,
    email,
  } = handleFormSubmit();
  document.documentElement.innerHTML = confirmPage(
    name,
    itemName,
    estimatedPrice,
    doorNumber,
    street,
    suburb,
    state,
    pin,
    phone,
    email,
    orderId,
  );
  setTimeout(() => {
    window.location.href = 'feedback.html'
  }, 2000);

}
function handleFormSubmit(event) {
  // Extract values from the form fields
  const name = document.getElementById('name').value;
  const itemName = document.getElementById('item-name').value;
  const estimatedPrice = document.getElementById('estimated-price').value;
  const doorNumber = document.getElementById('door-number').value;
  const street = document.getElementById('street').value;
  const suburb = document.getElementById('suburb').value;
  const state = document.getElementById('state').value;
  const pin = document.getElementById('pin').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  return {
    name,
    itemName,
    estimatedPrice,
    doorNumber,
    street,
    suburb,
    state,
    pin,
    phone,
    email,
  };
}
