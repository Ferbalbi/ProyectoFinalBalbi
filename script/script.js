const productContainer = document.querySelector(".product-list");
const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const checkoutButton = document.getElementById("checkout-btn");

let products = [];
let cart = [];

// Mostrar productos de la tienda
function mostrarProductos() {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product");
    productItem.innerHTML = `
    <h2>${product.imagen}</h2>
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Agregar al Carrito</button>
        `;
    productContainer.appendChild(productItem);
  });
}
// Guardar productos en el LocalStorage
function gurdarProductos() {
  localStorage.setItem("products", JSON.stringify(products));
}
// Guardar el carrito en el LocalStorage
function guardarCarrito() {
  localStorage.setItem("cart", JSON.stringify(cart));
} // Cargar productos archivo JSON
fetch("productos.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    mostrarProductos();
  });
