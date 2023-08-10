// Agregar producto al carrito
function agregarProducto(productId) {
  const productToAdd = products.find((product) => product.id === productId);
  cart.push(productToAdd);
  calcularTotal();
  guardarCarrito();
}

// Quitar producto del carrito
function quitarProducto(productId) {
  cart = cart.filter((product) => product.id !== productId);
  calcularTotal();
  guardarCarrito();
}

// Actualizar contenido del carrito y calcular total
function calcularTotal() {
  cartItems.innerHTML = "";
  let totalPrice = 0;
  cart.forEach((product) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
            ${product.name}  $${product.price}
            <button class="remove-from-cart" data-id="${product.id}">Quitar</button>
        `;
    cartItems.appendChild(cartItem);
    totalPrice += product.price;
  });
  totalPriceElement.textContent = totalPrice;
}

// Evento click para agregar al carrito
productContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const productId = parseInt(event.target.getAttribute("data-id"));
    agregarProducto(productId);
  }
});

// Evento click para quitar del carrito
cartItems.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-from-cart")) {
    const productId = parseInt(event.target.getAttribute("data-id"));
    quitarProducto(productId);
  }
});

// Evento click para realizar la compra (con SweetAlert)
checkoutButton.addEventListener("click", () => {
  if (cart.length > 0) {
    swal({
      title: "Muchas Gracias por su compra!",
      text: `Total: $${totalPriceElement.textContent}`,
      icon: "success",
    });
    cart = [];
    calcularTotal();
    guardarCarrito();
  } else {
    swal("Carrito vacío", "Agregar productos", "error");
  }
});
