// Conexion.js
const API_URL = "https://fakestoreapi.com/products";

async function getProducts() {
  const response = await fetch(API_URL);
  return await response.json();
}

async function getProductById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
}
