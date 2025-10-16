// Original.js
async function cargarOriginal() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const titulo = document.createElement("h2");
  titulo.textContent = "🎲 Producto Aleatorio";
  app.appendChild(titulo);

  const boton = document.createElement("button");
  boton.textContent = "Mostrar producto aleatorio";
  boton.onclick = mostrarProductoRandom;
  app.appendChild(boton);

  const contenedor = document.createElement("div");
  contenedor.id = "productoRandom";
  app.appendChild(contenedor);
}

async function mostrarProductoRandom() {
  const productos = await getProducts();
  const random = productos[Math.floor(Math.random() * productos.length)];

  const contenedor = document.getElementById("productoRandom");
  contenedor.innerHTML = "";

  const img = document.createElement("img");
  img.src = random.image;
  img.style.width = "150px";

  const nombre = document.createElement("h3");
  nombre.textContent = random.title;

  const precio = document.createElement("p");
  precio.textContent = `$${random.price}`;

  contenedor.append(img, nombre, precio);
}
