// Favoritos.js
function agregarFavorito(id) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  if (!favoritos.includes(id)) {
    favoritos.push(id);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert("Agregado a favoritos ⭐");
  }
}

async function cargarFavoritos() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const titulo = document.createElement("h2");
  titulo.textContent = "⭐ Favoritos";
  app.appendChild(titulo);

  const contenedor = document.createElement("div");
  contenedor.classList.add("grid");
  app.appendChild(contenedor);

  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  for (const id of favoritos) {
    const producto = await getProductById(id);

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = producto.image;

    const nombre = document.createElement("h3");
    nombre.textContent = producto.title;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.price}`;

    const btnDetalle = document.createElement("button");
    btnDetalle.textContent = "Ver Detalle";
    btnDetalle.onclick = () => verDetalle(producto.id);

    card.append(img, nombre, precio, btnDetalle);
    contenedor.appendChild(card);
  }
}
