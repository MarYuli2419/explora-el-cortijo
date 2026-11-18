
# Especificaciones del sistema

## Proyecto: Explora El Cortijo

### 1. Descripción general

Explora El Cortijo es una aplicación web
interactiva diseñada para dar a conocer
lugares de interés del sector El Cortijo,
ubicado en Bogotá, Colombia.

La aplicación permite consultar información
sobre lugares, visualizar fotografías,
explorar ubicaciones en un mapa interactivo
y conocer aspectos de la historia local.

### 2. Objetivo del sistema

Ofrecer una plataforma web accesible,
organizada e intuitiva que facilite la
exploración de El Cortijo mediante
información geográfica, cultural y visual.

### 3. Usuarios del sistema

La aplicación está dirigida a:

- Habitantes del sector El Cortijo.
- Visitantes interesados en conocer la zona.
- Estudiantes e investigadores.
- Personas interesadas en la historia local.

### 4. Funcionalidades principales

- Consultar lugares de interés.
- Buscar lugares por nombre.
- Filtrar lugares por categoría.
- Visualizar ubicaciones en un mapa.
- Consultar fotografías en una galería.
- Ampliar fotografías seleccionadas.
- Explorar planes y actividades recomendadas.
- Consultar información histórica.
- Acceder a fuentes de información externas.
- Utilizar la aplicación desde computadores
  y dispositivos móviles.


### 5. Especificaciones funcionales

#### EF01 - Consulta de lugares
El sistema permite visualizar lugares de
interés de El Cortijo mediante tarjetas
con información descriptiva y fotografías.

#### EF02 - Búsqueda de lugares
El usuario puede introducir el nombre
de un lugar para encontrar coincidencias
entre los lugares disponibles.

#### EF03 - Filtros por categoría
El sistema permite filtrar los lugares
según las categorías disponibles,
como parques, cultura y gastronomía.

#### EF04 - Mapa interactivo
El sistema muestra las ubicaciones de
los lugares mediante un mapa interactivo
basado en OpenStreetMap y Leaflet.

Al seleccionar un lugar, el mapa permite
identificar su ubicación geográfica.

#### EF05 - Galería fotográfica
El usuario puede consultar fotografías
de los lugares y ampliarlas mediante
una ventana emergente.

#### EF06 - Información histórica
La aplicación presenta información
sobre la historia del sector y enlaces
a fuentes de consulta.

#### EF07 - Planes recomendados
El sistema muestra actividades sugeridas
relacionadas con naturaleza, historia
y gastronomía.

#### EF08 - Adaptación a dispositivos
La interfaz se adapta a diferentes
tamaños de pantalla para facilitar
su uso desde computadores y celulares.


### 6. Especificaciones técnicas

#### 6.1 Lenguajes y tecnologías

- Python: desarrollo del servidor.
- Flask: framework para la aplicación web.
- HTML: estructura de las páginas.
- CSS: diseño y presentación visual.
- JavaScript: interacción con el usuario.
- SQLite: almacenamiento de información.
- Leaflet: visualización del mapa.
- OpenStreetMap: cartografía del mapa.

#### 6.2 Arquitectura del sistema

La aplicación utiliza una arquitectura
organizada en tres capas:

1. Presentación:
   Contiene la interfaz web desarrollada
   con HTML, CSS y JavaScript.

2. Lógica:
   Procesa las solicitudes, organiza
   las operaciones del sistema y permite
   consultar la información disponible.

3. Datos:
   Administra el almacenamiento y la
   recuperación de información mediante
   una base de datos SQLite.

#### 6.3 Comunicación entre componentes

La interfaz web se comunica con el
servidor Flask mediante solicitudes HTTP.

El servidor ofrece el endpoint:

GET /api/lugares

Este endpoint devuelve información de
los lugares en formato JSON.

#### 6.4 Programación Orientada a Objetos

El proyecto organiza responsabilidades
mediante módulos y componentes de software,
buscando separar la presentación, la lógica
de la aplicación y el acceso a los datos.

La implementación concreta de clases
y métodos se documenta en el código fuente
y en el archivo ARQUITECTURA.md.

#### 6.5 Publicación

La aplicación se encuentra publicada
en Render y puede consultarse mediante
un navegador web.

URL:
https://explora-el-cortijo.onrender.com/


### 7. Requisitos no funcionales

#### RNF01 - Usabilidad
La aplicación debe presentar una interfaz
clara, intuitiva y fácil de utilizar.

#### RNF02 - Compatibilidad
La aplicación debe funcionar en navegadores
modernos y adaptarse a dispositivos móviles.

#### RNF03 - Disponibilidad
La aplicación debe estar publicada en
internet y permitir el acceso mediante
una dirección web.

La disponibilidad puede depender del
servicio de alojamiento utilizado.

#### RNF04 - Mantenibilidad
El código debe estar organizado en
módulos que faciliten su comprensión,
mantenimiento y actualización.

#### RNF05 - Rendimiento
Las búsquedas y los filtros deben
responder de manera adecuada a las
interacciones del usuario.

### 8. Criterios de aceptación

El proyecto se considera funcional cuando:

- La página principal carga correctamente.
- Los lugares aparecen con su información.
- El buscador encuentra coincidencias.
- Los filtros muestran las categorías.
- El mapa permite localizar lugares.
- La galería muestra y amplía fotografías.
- La sección Historia presenta información.
- Los planes recomendados son visibles.
- Los enlaces externos funcionan.
- La interfaz se adapta a celulares.
- La navegación entre secciones funciona.

### 9. Verificación del sistema

Las pruebas funcionales y sus resultados
se encuentran documentados en PRUEBAS.md.

La arquitectura y la organización de los
componentes se describen en ARQUITECTURA.md.
