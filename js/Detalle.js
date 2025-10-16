async function verDetalle(id) {
  const contenedor = document.getElementById("app");

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const producto = await res.json();

    contenedor.innerHTML = `
      <h2>🧾 Detalle del producto</h2>
      <div class="detalle">
        <img src="${producto.image}" alt="${producto.title}" width="150">
        <h3>${producto.title}</h3>
        <p><strong>Precio:</strong> $${producto.price}</p>
        <p><strong>Categoría:</strong> ${producto.category}</p>
        <p>${producto.description}</p>
        <button onclick="cargarHome()">⬅️ Volver</button>
      </div>
    `;
  } catch (error) {
    contenedor.innerHTML = "<p>Error al cargar el detalle.</p>";
    console.error(error);
  }
}
