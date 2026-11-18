document.addEventListener("DOMContentLoaded", async () => {
  const galeria = document.getElementById("galeria-fotos");
  const modal = document.getElementById("visor-fotos");
  const imagen = document.getElementById("visor-imagen");
  const nombre = document.getElementById("visor-nombre");
  const cerrar = () => { modal.close(); };
  try {
    const respuesta = await fetch("/api/lugares");
    if (!respuesta.ok) throw new Error("No se cargaron los lugares");
    const lugares = await respuesta.json();
    lugares.forEach(lugar => {
      const boton = document.createElement("button");
      boton.type = "button"; boton.className = "gallery-item";
      boton.setAttribute("aria-label", "Ampliar imagen de " + lugar.nombre);
      const foto = document.createElement("img");
      foto.src = "/static/" + lugar.imagen; foto.loading = "lazy";
      foto.alt = lugar.tipo_imagen + " de " + lugar.nombre;
      const pie = document.createElement("span"); pie.textContent = lugar.nombre;
      boton.append(foto, pie);
      boton.addEventListener("click", () => {
        imagen.src = foto.src; imagen.alt = foto.alt;
        nombre.textContent = lugar.nombre + " · " + lugar.tipo_imagen;
        modal.showModal();
      });
      galeria.append(boton);
    });
  } catch (error) { galeria.textContent = "La galería no está disponible."; }
  document.getElementById("cerrar-visor").addEventListener("click", cerrar);
  modal.addEventListener("click", e => { if (e.target === modal) cerrar(); });
});
