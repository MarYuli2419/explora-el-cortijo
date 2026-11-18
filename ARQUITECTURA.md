
# Arquitectura de la solución
## Proyecto: Explora El Cortijo

### 1. Descripción
Explora El Cortijo utiliza una arquitectura de
tres capas para separar las responsabilidades
de la aplicación y facilitar su mantenimiento.

### 2. Capa de presentación
Es la encargada de mostrar la información
al usuario y permitir su interacción.

Tecnologías:
- HTML
- CSS
- JavaScript
- Leaflet

Archivos principales:
- presentacion/templates/index.html
- presentacion/static/css/
- presentacion/static/js/

Funciones:
- Mostrar lugares y fotografías.
- Permitir búsquedas y filtros.
- Visualizar ubicaciones en el mapa.

### 3. Capa de lógica
Procesa las solicitudes y organiza la
información que necesita la aplicación.

Tecnologías:
- Python
- Flask
- Programación orientada a objetos

Archivos principales:
- app.py
- logica/lugar.py

Funciones:
- Atender las solicitudes del navegador.
- Consultar los lugares disponibles.
- Entregar información mediante una API.
- Representar los lugares mediante clases.

### 4. Capa de datos
Se encarga de almacenar y consultar
la información de los lugares.

Tecnología:
- SQLite

Archivos principales:
- datos/base_datos.py
- datos/catalogo.py
- datos/cortijo.db

Funciones:
- Almacenar información de los lugares.
- Consultar los registros.
- Organizar los datos para la aplicación.

### 5. Funcionamiento general

1. El usuario ingresa a la página web.
2. JavaScript solicita los lugares a la API.
3. Flask recibe la solicitud.
4. La aplicación consulta los datos.
5. Flask devuelve la información en JSON.
6. JavaScript muestra los lugares y el mapa.

### 6. Ventajas de la arquitectura
- Separación de responsabilidades.
- Código más organizado.
- Facilidad para realizar pruebas.
- Mantenimiento y actualización.
- Posibilidad de ampliar funcionalidades.

### 7. Despliegue
El código fuente está almacenado en GitHub
y la aplicación web está publicada en Render.

URL:
https://explora-el-cortijo.onrender.com
