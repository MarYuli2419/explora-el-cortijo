
document.addEventListener("DOMContentLoaded", () => {
    const mapa = L.map("mapa").setView(
        [4.726, -74.114], 15
    );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors",
            maxZoom: 19
        }
    ).addTo(mapa);

    L.marker([4.726, -74.114])
        .addTo(mapa)
        .bindPopup("Referencia aproximada de El Cortijo, Bogotá");
    // Obtener los lugares guardados en la base de datos
    fetch("/api/lugares")
        .then(respuesta => respuesta.json())
        .then(lugares => {
            lugares.forEach(lugar => {
                L.marker([lugar.latitud, lugar.longitud])
                    .addTo(mapa)
                    .bindPopup(
                        `<b>${lugar.nombre}</b><br>
                        Categoría: ${lugar.categoria}`
                    );
            });
        })
        .catch(error => {
            console.error("Error al cargar los lugares:", error);
        });

});
