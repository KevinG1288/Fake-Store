// Home.js
async function cargarHome() {
  const app = document.getElementById("app");
  app.innerHTML = ""; // limpiar pantalla

  // 🔹 Título
  const titulo = document.createElement("h2");
  titulo.textContent = "🛍️ Productos";
  app.appendChild(titulo);

  // 🔹 Contenedor del buscador
  const buscadorContainer = document.createElement("div");
  buscadorContainer.classList.add("buscador-container");

  const inputBuscador = document.createElement("input");
  inputBuscador.type = "text";
  inputBuscador.id = "buscador";
  inputBuscador.placeholder = "Buscar producto...";

  buscadorContainer.appendChild(inputBuscador);
  app.appendChild(buscadorContainer);

  // 🔹 Contenedor de productos
  const contenedor = document.createElement("div");
  contenedor.classList.add("grid");
  app.appendChild(contenedor);

  // 🔹 Obtener productos de la API
  const productos = await getProducts();

  // 🔹 Función para renderizar productos
  function mostrarProductos(lista) {
    contenedor.innerHTML = "";
    lista.forEach((prod) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = prod.image;
      img.alt = prod.title;

      const nombre = document.createElement("h3");
      nombre.textContent = prod.title;

      const precio = document.createElement("p");
      precio.textContent = `$${prod.price}`;

      const btnDetalle = document.createElement("button");
      btnDetalle.textContent = "Ver Detalle";
      btnDetalle.onclick = () => verDetalle(prod.id);

      const btnFav = document.createElement("button");
      btnFav.textContent = "⭐";
      btnFav.onclick = () => agregarFavorito(prod.id);

      card.append(img, nombre, precio, btnDetalle, btnFav);
      contenedor.appendChild(card);
    });
  }

  // Mostrar todos al inicio
  mostrarProductos(productos);

  // 🔍 Filtrado en tiempo real
  inputBuscador.addEventListener("input", (e) => {
    const texto = e.target.value.toLowerCase();
    const filtrados = productos.filter((p) =>
      p.title.toLowerCase().includes(texto)
    );
    mostrarProductos(filtrados);
  });
}
