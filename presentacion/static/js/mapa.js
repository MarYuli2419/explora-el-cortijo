document.addEventListener("DOMContentLoaded", async () => {
  const centro = [4.72629, -74.12103];
  const mapa = L.map("mapa", { scrollWheelZoom: false }).setView(centro, 15);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors", maxZoom: 19
  }).addTo(mapa);
  const detalle = document.getElementById("detalle-lugar");
  const tituloDetalle = document.getElementById("detalle-titulo");
  const textoDetalle = document.getElementById("detalle-texto");
  const zonaDetalle = document.getElementById("detalle-zona");
  const avisoMapa = document.getElementById("aviso-mapa");
  const marcadores = new Map();
  const buscar = document.getElementById("buscar");
  const categoria = document.getElementById("categoria");
  const lista = document.getElementById("lista-lugares");
  const contador = document.getElementById("contador");
  let lugares = [];
  const normalizar = valor => String(valor || "").normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const iconos = { Parques: "🌳", Cultura: "📖", Naturaleza: "🌿",
    Arquitectura: "🏘️", Gastronomía: "🍔", Compras: "🛍️" };
  function pintar() {
    const texto = normalizar(buscar.value.trim());
    const filtrados = lugares.filter(l => {
      const contenido = [l.nombre, l.categoria, l.descripcion, l.plan, l.zona].join(" ");
      return normalizar(contenido).includes(texto) &&
        (!categoria.value || l.categoria === categoria.value);
    });
    contador.textContent = `${filtrados.length} resultado(s)`;
    lista.replaceChildren();
    if (!filtrados.length) {
      const vacio = document.createElement("p");
      vacio.textContent = "No encontramos resultados. Prueba con otra palabra.";
      lista.append(vacio);
    }
    filtrados.forEach(l => {
      const tarjeta = document.createElement("article"); tarjeta.className = "place-card";
      const tag = document.createElement("span"); tag.className = "tag";
      tag.textContent = `${iconos[l.categoria] || "📍"} ${l.categoria}`;
      const titulo = document.createElement("h3"); titulo.textContent = l.nombre;
      const zona = document.createElement("span"); zona.className = "zone";
      zona.textContent = `📍 ${l.zona}`;
      const foto = document.createElement("img"); foto.className = "place-photo";
      foto.src = "/static/" + l.imagen; foto.alt = l.tipo_imagen + " de " + l.nombre;
      foto.loading = "lazy";
      const pie = document.createElement("small"); pie.className = "photo-credit";
      pie.textContent = l.tipo_imagen;
      const descripcion = document.createElement("p"); descripcion.textContent = l.descripcion;
      const boton = document.createElement("button");
      boton.type = "button"; boton.className = "place-action";
      boton.textContent = l.lat == null ? "Buscar dirección en Maps ↗" : "Ver ubicación en el mapa 📍";
      boton.addEventListener("click", () => {
        if (l.lat == null || l.lon == null) {
          window.open("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(l.nombre + " Bogotá"), "_blank", "noopener");
          return;
        }
        tituloDetalle.textContent = l.nombre;
        textoDetalle.textContent = l.descripcion;
        zonaDetalle.textContent = `${l.categoria} · ${l.zona} · ${l.plan}`;
        detalle.hidden = false;
        const fotoDetalle = document.getElementById("detalle-foto");
        fotoDetalle.src = "/static/" + l.imagen;
        fotoDetalle.alt = l.tipo_imagen + " de " + l.nombre;
        document.getElementById("detalle-credito").textContent = l.tipo_imagen;
        avisoMapa.textContent = "Marcador del lugar: " + l.nombre + ". Coordenadas de cartografía abierta; comprueba accesos antes de ir.";
        mapa.setView([l.lat, l.lon], 18);
        marcadores.get(l.id).openPopup();
        document.getElementById("mapa-seccion").scrollIntoView({behavior:"smooth"});
        setTimeout(() => mapa.invalidateSize(), 300);
      });
      tarjeta.append(foto, pie, tag, titulo, zona, descripcion, boton); lista.append(tarjeta);
    });
  }
  try {
    const respuesta = await fetch("/api/lugares");
    if (!respuesta.ok) throw new Error("API no disponible");
    lugares = await respuesta.json();
    [...new Set(lugares.map(l => l.categoria))].sort().forEach(c => {
      const opcion = document.createElement("option");
      opcion.value = c; opcion.textContent = c; categoria.append(opcion);
    });
    lugares.forEach(l => {
      if (l.lat == null || l.lon == null) return;
      const pin = L.marker([l.lat, l.lon]).addTo(mapa);
      const nombre = document.createElement("strong"); nombre.textContent = l.nombre;
      const cont = document.createElement("div"); cont.append(nombre);
      const mini = document.createElement("img"); mini.src = "/static/" + l.imagen;
      mini.alt = l.tipo_imagen; mini.className = "popup-photo";
      cont.prepend(mini);
      pin.bindPopup(cont); marcadores.set(l.id, pin);
      pin.on("click", () => { buscar.value = l.nombre; categoria.value = ""; pintar(); });
    });
    pintar();
  } catch (error) {
    contador.textContent = "Sin conexión";
    lista.textContent = "No pudimos cargar los lugares. Actualiza la página.";
    console.error(error);
  }
  buscar.addEventListener("input", pintar);
  categoria.addEventListener("change", pintar);
  document.querySelectorAll("[data-search]").forEach(b => b.addEventListener("click", () => {
    buscar.value = b.dataset.search; categoria.value = ""; pintar();
    document.getElementById("lugares").scrollIntoView({ behavior: "smooth" });
  }));
});
