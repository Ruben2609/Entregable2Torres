const productos = [
  { id: 1, nombre: "Cyberpunk 2077", precio: 59.99, imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202008/0416/6Bo40lnWU0BhgrOUm7Cb6by3.png" },
  { id: 2, nombre: "The Witcher 3", precio: 39.99, imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/qezXTVn1ExqBjVjR5Ipm97IK.png" },
  { id: 3, nombre: "Halo Infinite", precio: 49.99, imagen: "https://generacionxbox.com/wp-content/uploads/2023/10/halo-infinite.jpg" },
  { id: 4, nombre: "Minecraft", precio: 19.99, imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png" },
  { id: 5, nombre: "Doom Eternal", precio: 29.99, imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Cover_Art_of_Doom_Eternal.png/250px-Cover_Art_of_Doom_Eternal.png" },
  { id: 6, nombre: "God of War", precio: 59.99, imagen: "https://shadow.tech/app/uploads/2024/12/GODOFWAR_KEYART.jpg" },
  { id: 7, nombre: "Fortnite", precio: 0.00, imagen: "https://dropinblog.net/34253310/files/featured/imagem-2024-09-26-103919931.png" },
  { id: 8, nombre: "Resident Evil Village", precio: 59.99, imagen: "https://images.squarespace-cdn.com/content/v1/5ed1b3e73b87d766d1c49146/1627340302779-YNMZ1HLN0AXSMKGW9O69/RE-Village.png" },
  { id: 9, nombre: "Elden Ring", precio: 59.99, imagen: "https://static0.srcdn.com/wordpress/wp-content/uploads/sharedimages/2024/12/mixcollage-08-dec-2024-02-50-pm-6945-1.jpg" },
  { id: 10, nombre: "Fall Guys", precio: 0.00, imagen: "https://img2-levelup.buscafs.com/748713/748713_256x320.jpg" }
];

// Generar lista de productos en el DOM
const contenedor = document.getElementById("lista-productos");
productos.forEach(producto => {
  const prodDiv = document.createElement("div");
  prodDiv.className = "producto";
  // imagen
  const img = document.createElement("img");
  img.src = producto.imagen;
  img.alt = producto.nombre;
  prodDiv.appendChild(img);
  // nombre
  const nombre = document.createElement("h3");
  nombre.textContent = producto.nombre;
  prodDiv.appendChild(nombre);
  // precio
  const precio = document.createElement("p");
  precio.textContent = `$${producto.precio.toFixed(2)}`;
  prodDiv.appendChild(precio);
  // botón
  const boton = document.createElement("button");
  boton.textContent = "Agregar al carrito";
  boton.className = "agregar-carrito";
  boton.dataset.id = producto.id;
  prodDiv.appendChild(boton);
  // agregar al contenedor
  contenedor.appendChild(prodDiv);
});

// Manejo del carrito
let carrito = [];

// Cargar carrito existente de localStorage si hay
const carritoGuardado = localStorage.getItem("carrito");
if (carritoGuardado) {
  carrito = JSON.parse(carritoGuardado);
}
actualizarContadorCarrito();

// Agregar eventos a botones de "Agregar al carrito"
const botonesAgregar = document.querySelectorAll(".agregar-carrito");
botonesAgregar.forEach(boton => {
  boton.addEventListener("click", () => {
    const idProducto = boton.dataset.id;
    agregarAlCarrito(idProducto);
  });
});

function agregarAlCarrito(idProducto) {
  const id = Number(idProducto);
  if (!carrito.includes(id)) {
    carrito.push(id);
    // Guardar en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(`Producto ${id} agregado al carrito.`);
    actualizarContadorCarrito();
  } else {
    console.log(`Producto ${id} ya estaba en el carrito.`);
  }
}

function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");
  contador.textContent = carrito.length;
}
