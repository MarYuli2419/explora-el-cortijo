
# Módulo de requerimientos
## Proyecto: Explora El Cortijo

### 1. Descripción del proyecto
Explora El Cortijo es una aplicación web desarrollada
para dar a conocer lugares de interés del barrio
El Cortijo, ubicado en Bogotá, Colombia.

La aplicación permite consultar información de
espacios culturales, parques, zonas verdes,
establecimientos y otros sitios de interés.

### 2. Objetivo general
Desarrollar una aplicación web interactiva que
permita conocer y explorar lugares de interés
del barrio El Cortijo mediante herramientas
de consulta, fotografías y mapas digitales.

### 3. Objetivos específicos
- Organizar información de lugares del barrio.
- Visualizar ubicaciones en un mapa interactivo.
- Implementar búsquedas y filtros por categoría.
- Mostrar fotografías y descripciones.
- Aplicar programación orientada a objetos.
- Publicar la aplicación en internet.

### 4. Requerimientos funcionales

**RF01. Consulta de lugares:**
El usuario podrá visualizar los lugares registrados.

**RF02. Búsqueda:**
El usuario podrá buscar lugares mediante palabras clave.

**RF03. Filtros:**
El usuario podrá filtrar lugares por categoría.

**RF04. Mapa interactivo:**
El sistema mostrará marcadores de los lugares
que tengan coordenadas disponibles.

**RF05. Información detallada:**
El usuario podrá consultar la descripción,
categoría y zona de cada lugar.

**RF06. Fotografías:**
El sistema mostrará imágenes asociadas
a los lugares registrados.

**RF07. Ubicaciones externas:**
Cuando no existan coordenadas registradas,
el usuario podrá buscar el lugar en Google Maps.

### 5. Requerimientos no funcionales

**RNF01. Usabilidad:**
La interfaz deberá ser clara y fácil de utilizar.

**RNF02. Accesibilidad:**
La aplicación deberá ser accesible desde
un navegador web.

**RNF03. Organización:**
El código deberá organizarse mediante
una arquitectura de tres capas.

**RNF04. Mantenibilidad:**
El proyecto deberá separar responsabilidades
para facilitar futuras modificaciones.

**RNF05. Disponibilidad:**
La aplicación estará publicada mediante Render,
sujeta a las condiciones del servicio gratuito.

### 6. Casos de uso

**CU01. Consultar lugares**
- Actor: visitante.
- Acción: ingresar a la aplicación.
- Resultado: visualizar los lugares disponibles.

**CU02. Buscar un lugar**
- Actor: visitante.
- Acción: escribir una palabra en el buscador.
- Resultado: mostrar las coincidencias.

**CU03. Filtrar por categoría**
- Actor: visitante.
- Acción: seleccionar una categoría.
- Resultado: visualizar los lugares correspondientes.

**CU04. Consultar ubicación**
- Actor: visitante.
- Acción: seleccionar la ubicación de un lugar.
- Resultado: visualizar su posición en el mapa
  o abrir una búsqueda externa.

### 7. Historias de usuario

**HU01:** Como visitante, quiero consultar
lugares del barrio para conocer sus atractivos.

**HU02:** Como visitante, quiero buscar lugares
por nombre para encontrarlos rápidamente.

**HU03:** Como visitante, quiero filtrar lugares
por categoría para explorar mis intereses.

**HU04:** Como visitante, quiero ver fotografías
para reconocer los lugares antes de visitarlos.

**HU05:** Como visitante, quiero consultar un mapa
para identificar la ubicación de los sitios.

### 8. Tecnologías utilizadas
- Python: lenguaje de programación.
- Flask: desarrollo del servidor web.
- SQLite: almacenamiento de información.
- HTML, CSS y JavaScript: interfaz de usuario.
- Leaflet: mapa interactivo.
- OpenStreetMap: cartografía base.
- GitHub: repositorio del código fuente.
- Render: despliegue de la aplicación.

### 9. Alcance del proyecto
El proyecto permite explorar y consultar
información de lugares del barrio El Cortijo.

No incluye reservas, pagos ni registro
de cuentas de usuario.
