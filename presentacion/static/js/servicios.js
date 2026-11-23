document.addEventListener("DOMContentLoaded", () => {
  const servicios = [
    ["🚍", "Estaciones de transporte", "Transporte", "Busca estaciones y paraderos cercanos en el mapa.", "Buscar en Maps", "maps", "estaciones TransMilenio SITP El Cortijo Engativá Bogotá"],
    ["🐾", "Veterinarias", "Servicios", "Encuentra servicios veterinarios y confirma sus horarios.", "Buscar en Maps", "maps", "veterinarias El Cortijo Engativá Bogotá"],
    ["🚧", "Estado de las calles", "Movilidad", "Consulta información institucional sobre movilidad. No es un reporte en tiempo real.", "Consultar Movilidad", "web", "https://www.movilidadbogota.gov.co/"],
    ["🗺️", "Polígonos del barrio", "Territorio", "Explora cartografía y capas geográficas disponibles para Bogotá.", "Abrir Mapas Bogotá", "web", "https://mapas.bogota.gov.co/"],
    ["🏠", "Datos catastrales", "Territorio", "Consulta información catastral en el visor oficial. No se muestran datos privados aquí.", "Consultar cartografía", "web", "https://mapas.bogota.gov.co/"],
    ["📊", "Datos de robos", "Seguridad", "Busca estadísticas públicas en el portal de datos abiertos. No hay cifras en vivo en esta página.", "Ver datos abiertos", "web", "https://datosabiertos.bogota.gov.co/"],
    ["👮", "Centros de atención de policía", "Seguridad", "Localiza CAI y estaciones; verifica la información antes de desplazarte.", "Buscar en Maps", "maps", "CAI policía El Cortijo Engativá Bogotá"],
    ["⚽", "Escenarios deportivos", "Recreación", "Busca canchas, parques y espacios deportivos del sector.", "Buscar en Maps", "maps", "escenarios deportivos El Cortijo Engativá Bogotá"],
    ["🍽️", "Sitios de comida", "Comercio", "Explora restaurantes y negocios de comida cercanos.", "Buscar en Maps", "maps", "restaurantes El Cortijo Engativá Bogotá"],
    ["🌳", "Zonas verdes", "Recreación", "Descubre parques y zonas verdes del barrio y sus alrededores.", "Buscar en Maps", "maps", "parques zonas verdes El Cortijo Engativá Bogotá"],
    ["📹", "Sistemas de cámaras de seguridad", "Seguridad", "Información general sobre seguridad urbana; no se publican ubicaciones de cámaras.", "Consultar Policía", "web", "https://www.policia.gov.co/"]
  ];
  const contenedor = document.getElementById("servicios-lista");
  const filtro = document.getElementById("servicios-filtro");
  const buscar = document.getElementById("servicios-buscar");
  const cuenta = document.getElementById("servicios-contador");
  if (!contenedor || !filtro || !buscar || !cuenta) return;
  [...new Set(servicios.map(s => s[2]))].sort().forEach(nombre => {
    const opcion = document.createElement("option");
    opcion.value = nombre; opcion.textContent = nombre; filtro.append(opcion);
  });
  function mostrar() {
    const termino = buscar.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const visibles = servicios.filter(s => {
      const texto = s.slice(1, 4).join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return texto.includes(termino) && (!filtro.value || s[2] === filtro.value);
    });
    cuenta.textContent = `${visibles.length} de ${servicios.length} servicios`;
    contenedor.replaceChildren();
    if (!visibles.length) {
      const aviso = document.createElement("p");
      aviso.textContent = "No se encontraron servicios con esos filtros.";
      contenedor.append(aviso);
    }
    visibles.forEach(([icono, nombre, grupo, descripcion, accion, tipo, destino]) => {
      const tarjeta = document.createElement("article"); tarjeta.className = "servicio-card";
      const simbolo = document.createElement("span"); simbolo.className = "servicio-icono";
      simbolo.textContent = icono;
      const etiqueta = document.createElement("small"); etiqueta.textContent = grupo;
      const titulo = document.createElement("h3"); titulo.textContent = nombre;
      const texto = document.createElement("p"); texto.textContent = descripcion;
      const enlace = document.createElement("a"); enlace.textContent = accion + " ↗";
      enlace.href = tipo === "maps"
        ? "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(destino)
        : destino;
      enlace.target = "_blank"; enlace.rel = "noopener noreferrer";
      tarjeta.append(simbolo, etiqueta, titulo, texto, enlace); contenedor.append(tarjeta);
    });
  }
  buscar.addEventListener("input", mostrar);
  filtro.addEventListener("change", mostrar);
  mostrar();
});
